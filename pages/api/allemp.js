import connectDB from "../../middleware/mongodb";
import Curremp from "../../model/registercurrentemp1";

const handler = async (req, res)=>{


  if(req.method == 'GET'){
    try {
      const data = await Curremp.find({});
      res.status(200).json(data);

    } catch (error) {
      console.log(error)
    }
  }
}

export default connectDB(handler);