const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true },
  type: { type: String, enum: ['file', 'youtube'], required: true },
  url: String,
  filename: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);
