import mongoose from 'mongoose'

const Event = new mongoose.Schema({
  reservationDate: { type: Date, default: Date.now },
  startDate: { type: Date },
  endDate: { type: Date },
  rooms: { type: [Number] },//[1,3,5,6]
  participents: { type: Number },//43
  customerName: { type: String },
  customerPhone: { type: String },
  customerEmail: { type: String },
  organization: { type: String },
  email: { type: String },//"yoyo"/"popo"/"momo"

  comments: { type: String },
});

export default mongoose.model('event', Event)