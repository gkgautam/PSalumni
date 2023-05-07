import mongoose from "mongoose";

const curremp = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  ps_id:{
    type:String,
    required:true
  },
  person_type:{
    type:String,
    required:true
  },
  start_date:{
    type:String,
    required:true,

  },
  business_unit:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  p_id:{
    type:String,
    required:true,
    
  },
  people_mgr:{
    type:String,
    required:true
  },
  profile_img:{
    type:String,
    required:true
  },
  curr_status:{
    type:String,
    required:true
  },
  curr_org:{
    type:String,
    required:true
  },
  end_date:{
    type:String,
    required:true
  },
  social_media:{
    type:String,
    required:true
  },
  personal_email:{
    type:String,
    required:true
  },
  mobile:{
    type:String,
    required:true
  },
  office_location:{
    type:String,
    required:true
  },
  skills:{
    type:String,
    required:true
  }
  
});

mongoose.models = {};

const Curremp = mongoose.model("registercurrentemp1", curremp);

export default Curremp;