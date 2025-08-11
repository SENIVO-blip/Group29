const axios = require('axios');
const Patient = require('../models/Patient');

exports.analyzeSymptoms = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Symptoms array must contain at least one item"
      });
    }

    const patient = await Patient.findOne({ userId: req.user.id });
    const context = patient?.healthProfile || {};

    const prompt = `
      Patient Context: ${JSON.stringify(context)}
      Symptoms: ${symptoms.join(', ')}

      Analyze and provide:
      1. Top 3 possible conditions (ranked by likelihood say likelihood high,medium,low  and explain little bit about that condition)
      2. Recommended next steps
      3. Red flags (when to seek immediate care, just put 2 top treats)
      4. General advice (after giving advice say Try to consult our live doctors at senivo)

      Format as JSON with keys: conditions, nextSteps, redFlags, advice
    `;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "moonshotai/kimi-k2:free", 
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3,
        max_tokens: 500
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost:5000', 
          'X-Title': 'HealthCare App' 
        }
      }
    );

    const result = JSON.parse(response.data.choices[0].message.content);
    await Patient.updateOne(
      { userId: req.user.id },
      { $push: { aiResults: { symptoms, analysis: result } } }
    );

    res.json({ success: true, analysis: result });

  } catch (err) {
    console.error("AI Analysis Error:", err.response?.data || err.message);
    res.status(500).json({ 
      success: false,
      error: "AI service unavailable. Please try later.",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};