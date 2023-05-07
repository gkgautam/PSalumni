import mongoose from "mongoose";

const myAdminSchema = new mongoose.Schema({
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

const Admin = mongoose.model("admin", myAdminSchema);

export default Admin;