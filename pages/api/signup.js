import connectDB from "../../middleware/mongodb";
import User from "../../model/user";
import Curremp from "../../model/registercurrentemp1";
import argon2 from "argon2";
import validator from 'validator';


const handler = async (req, res) => {

  if (req.method == "POST") {

    const { name, emailorpersonal, password } = req.body;

    if (!name || !emailorpersonal || !password) {
      res.status(400).json({ message: "Required field" });
    }

    else if (!validator.isEmail(emailorpersonal)) {
      res.status(400).json({ message: "Please enter valid email address" });
    }

    else {
      try {
        const userFind = await User.findOne({ email: emailorpersonal });

        if (userFind) {
          res.status(400).json({ message: "You are already Registered" });
        }

        else {
          const Curremployee = await Curremp.findOne({
            $or: [{ email: emailorpersonal }, { personal_email: emailorpersonal }]
          });

          if (!Curremployee) {
            res.status(400).json({ message: "You are not an employee for this company" });
          }

          else {
            const hashedPassword = await argon2.hash(password);
            const newUser = new User({ name: name, email: emailorpersonal, password: hashedPassword });
            const result = await newUser.save();

            if (result) {
              res.status(201).json({ message: "User Saved Success" });
            }
            else {
              res.status(500).json({ message: "Technical Error, try again later" });
            }
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