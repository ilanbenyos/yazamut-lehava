import mongoose from 'mongoose'

const User = new mongoose.Schema({
  fName: { type: String },
  lName: { type: String },
  gender: { type: String },
  email: { type: String },
  age: { type: Number },
});


export default mongoose.model('user', User)