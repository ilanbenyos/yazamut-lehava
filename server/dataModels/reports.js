import mongoose from 'mongoose'

const Report = new mongoose.Schema({
  reprotingDate: { type: Date, default: Date.now },
  images: { type: [String] },
  reporterId: { type: String },
  reporterPhone: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  plateNumber: { type: String },
  reporterEmail: { type: String },
  json: { type: String },
  comments: { type: String },
});

export default mongoose.model('report', Report)