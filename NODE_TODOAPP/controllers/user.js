import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendToken } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";




export const getAllUsers =  async(req, res) => {}

export const register =  async(req, res) => {
  try {
    const {name , email, password} = req.body;

  let   user = await User.findOne({email});

  if(user) return next(new ErrorHandler("User Already Exist", 400));



  const hashedPassword = await bcrypt.hash(password,10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  sendToken(user, res, "register Successfully" );
  
  } catch (error) {
     next(error);
  }
}

export const login = async (req, res, next) => {
   try {
    const {email, password} = req.body;
    const user = await User.findOne({email}).select("+password");

    if(!user) return next(new ErrorHandler("user does not exist", 400));
    

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch) return next(new ErrorHandler("invalid Email or Password", 400));
    
      // if(!isMatch){
      //   return res.status(404).json({
      //     success: false,
      //     message: "invalid Email or Password",

      //   }); 
      // }
      sendToken(user, res,  `Welcom Back ${user.name}`);
   } 
   catch (error) {
    next(error);
   }
};

export const getMyProfile = (req,res) => {
 
    res.status(200).json({
      success: true,
      user:  req.user,
    })
  }

  export const logout = (req, res) => {
      res.status(200).cookie("token","", {
        expires: new Date.now(),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
      })
      .json({
        success: true,
        user: req.user,
      })

  }








