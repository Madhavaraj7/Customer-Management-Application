import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  s_no: { type: Number, unique: true },
  name_of_customer: String,
  email: { type: String, unique: true },
  mobile_number: String,
  dob: Date,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
});

customerSchema.index({ email: 1, mobile_number: 1 });

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
