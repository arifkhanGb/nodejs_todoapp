import mongoose from "mongoose";



export const connectDB = () => {

    mongoose.connect(process.env.mongoURl, { 
        dbName: "backendAPI" 
    
    }).then(() => {
      console.log("database connected")
      }).catch((e) => {
        console.log(e);;
    
    });
}