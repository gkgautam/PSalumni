import connectDB from "../../middleware/mongodb";
import Curremp from "../../model/registercurrentemp1";

const handler = async (req, res)=>{


    if(req.method == 'GET'){
    
        const { id } = req.query;
    
        try {
    
          const result = await Curremp.findById({_id:id});
    
          if(result){
            res.status(201).json(result);
          }
          else{
            res.status(500).json({message : "Technical Error, try again later"});
          }
        
        } catch (error) {
          console.log(error);
        }
      }
}

export default connectDB(handler);