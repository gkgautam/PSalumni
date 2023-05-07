import connectDB from "../../middleware/mongodb";
import Curremp from "../../model/registercurrentemp1";
import argon2 from "argon2";
import validator from 'validator';


const handler = async (req, res)=>{

  if(req.method == "POST"){

    const { name, title, ps_id ,person_type,start_date,business_unit,email,p_id,people_mgr,profile_img,curr_status,curr_org,end_date,social_media,personal_email,mobile,office_location,skills} = req.body;

    if(!name || !title || !ps_id || !person_type || !start_date || !business_unit || !email || !p_id || !people_mgr || !profile_img ||!curr_status ||!curr_org ||!end_date ||!social_media ||!personal_email ||!mobile ||!office_location ||!skills){
      res.status(400).json({message:"Required field"});
    }

    else if(!validator.isEmail(email)){
      res.status(400).json({message:"Please enter valid email address"});
    }

    else{
      try {
        const userFind = await Curremp.findOne({email});

        if(userFind){
          res.status(400).json({message:"pehle se hai user"});
        }

        else{
        //   const hashedPassword = await argon2.hash(password);
        //{
          // name:name, 
          // title:title, 
          // ps_id:ps_id,
          // person_type:person_type,
          // start_date:start_date,
          // business_unit:business_unit,
          // email:email,
          // p_id:p_id,
          // people_mgr:people_mgr,
          // profile_img:profile_img}
          const newUser = new Curremp({ name, title, ps_id ,person_type,start_date,business_unit,email,p_id,people_mgr,profile_img,curr_status,curr_org,end_date,social_media,personal_email,mobile,office_location,skills});
          const result = await newUser.save();

          if(result){
            res.status(201).json({message : "User Saved Success"});
          }
          else{
            res.status(500).json({message : "Technical Error, try again later"});
          }
        }
      } 
      
      catch (error) {
        console.log(error);
      }
    }
  }
}

export default connectDB(handler);