import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    person_name:{
    type:String,
    required:true
  },
  person_email:{
    type:String,
    required:true,
    unique:true
  },
  person_resume:{
    type:Buffer,
  }
});

mongoose.models = {};

const Referrals = mongoose.model("referrals", mySchema);

export default Referrals;