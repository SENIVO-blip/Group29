const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient'); // Add this line

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ msg: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Not authorized, token failed' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: 'Not authorized to access this route' });
    }
    next();
  };
};

const getPatientData = async (req, res, next) => {
  try {
    const patient = await Patient.findOne({ userId: req.user.id });
    if (!patient) {
      return res.status(404).json({ error: 'Patient profile not found' });
    }
    req.patient = patient;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cleaner exports
module.exports = {
  protect,
  authorize, 
  getPatientData
};