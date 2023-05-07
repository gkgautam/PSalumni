import connectDB from "../../middleware/mongodb";
import argon2 from "argon2";
import Admin from "../../model/admin";
import validator from 'validator';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {


  if(req.method == 'GET'){
    try {
      const data = await Admin.find({});

      res.status(200).json(data);

    } catch (error) {
      console.log(error)
    }
  }
  if (req.method == "POST") {

    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Required Fields..." })
    }

    else if (!validator.isEmail(email)) {
      res.status(400).json({ message: "Please enter valid email address" });
    }

    else {
      try {
        if(email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASS){

          const adminToken = jwt.sign({email:email}, process.env.TOKEN_SECRET_KEY, {
            expiresIn:"10m"
          });

          res.status(200).json({ message: "login success !", adminToken });
        }
        else{
          res.status(400).json({ message: "unAuthorized Access" });
        }

      } catch (error) {
        console.log(error);
      }
    }
  }
}


export default connectDB(handler);