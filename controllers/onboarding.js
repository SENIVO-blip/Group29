const Patient = require('../models/Patient');
const User = require('../models/user');

exports.completeOnboarding = async (req, res) => {
  try {
    const { healthProfile } = req.body;

    
    if (!healthProfile?.age || !healthProfile?.bloodType) {
      return res.status(400).json({
        success: false,
        error: "Age and blood type are required"
      });
    }

    
    const patient = await Patient.findOneAndUpdate(
      { userId: req.user.id },
      { healthProfile },
      { new: true, upsert: true }  
    );

    
    await User.findByIdAndUpdate(req.user.id, { 
      onboardingComplete: true 
    });

    res.json({ success: true, patient });

  } catch (err) {
    console.error("Onboarding error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error during onboarding" 
    });
  }
};