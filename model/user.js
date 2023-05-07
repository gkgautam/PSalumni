import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
});

mongoose.models = {};

const User = mongoose.model("user", mySchema);

export default User;