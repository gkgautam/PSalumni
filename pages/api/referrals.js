import connectDB from "../../middleware/mongodb";
import Referrals from "../../model/referrals";
import argon2 from "argon2";
import validator from 'validator';


const handler = async (req, res)=>{

  if(req.method == "POST"){

    const { person_name, person_email, person_resume } = req.body;

    if(!person_name|| !person_email || !person_resume){
      res.status(400).json({message:"Required field"});
    }
    else{
      try {
         
          const newUser = new Referrals({ person_name, person_email, person_resume});
          const result = await newUser.save();

          if(result){
            res.status(201).json({message : "Referral submitted Successfully"});
          }
          else{
            res.status(500).json({message : "Technical Error, try again later"});
          }
        
      } 
      
      catch (error) {
        console.log(error);
      }
    }
  }
}

export default connectDB(handler);