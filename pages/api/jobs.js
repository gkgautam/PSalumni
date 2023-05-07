import connectDB from "../../middleware/mongodb";
import Jobs from "../../model/jobs";
import argon2 from "argon2";
import validator from 'validator';


const handler = async (req, res)=>{

  if(req.method == "GET"){
    try {
      const data = await Jobs.find({});
      res.status(200).json(data);

    } catch (error) {
      console.log(error)
    }
  }






  if(req.method == "POST"){

    const { job_title, apply_link, job_img ,job_desc,no_vacancy} = req.body;

    if(!job_title|| !apply_link || !job_img || !job_desc || !no_vacancy){
      res.status(400).json({message:"Required field"});
    }
    else{
      try {
         
          const newUser = new JObs({ job_title, apply_link, job_img ,job_desc,no_vacancy});
          const result = await newUser.save();

          if(result){
            res.status(201).json({message : "Job posted Successfully"});
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