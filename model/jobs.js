import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    job_title:{
    type:String,
    required:true
  },
  apply_link:{
    type:String,
    required:true,
    unique:true
  },
  job_img:{
    type:String,
    required:true
  },
  job_desc:{
    type:String,
    required:true
  },
  no_vacancy:{
    type:String,
    required:true
  }
});

mongoose.models = {};

const Jobs = mongoose.model("jobs", mySchema);

export default Jobs;