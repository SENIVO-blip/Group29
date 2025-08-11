const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true  
    
  },
  medicalReports: [{
    filename: String,
    path: String,
    uploadedAt: { type: Date, default: Date.now }
  }],
  healthProfile: {
    type: {
      age: { type: Number, min: 1, max: 120 },
      bloodType: { 
        type: String, 
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] 
      },
      allergies: { type: [String], default: [] },
      medications: { type: [String], default: [] }
    },
    default: {}  
  },
  aiResults: { type: [Object], default: [] },  
  reportFiles: { type: [String], default: [] } 
}, { timestamps: true });

PatientSchema.index({ userId: 1 });

module.exports = mongoose.model('Patient', PatientSchema);