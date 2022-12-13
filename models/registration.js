import mongoose from "mongoose";

const registrationSchema = mongoose.Schema({
  email: String,
  age: Number,
  batch: String,
  txnID: String,
});

const Registration = new mongoose.model("Registration", registrationSchema);
export default Registration;