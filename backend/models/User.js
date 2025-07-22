const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['faculty', 'student'], required: true }
});

module.exports = mongoose.model('User', userSchema);
