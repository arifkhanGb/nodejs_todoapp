import { getAllUsers, register, login, logout, getMyProfile } from "../controllers/user.js";
import {isAuthenticated} from '../middlewares/auth.js'; 
import express from "express";
 
const router = express.Router();

router.get("/all", getAllUsers);//not in use

router.post("/new",register);
router.post("/login",login);

router.get ("/logout",logout);

//dynamic routing 
router.get("/me", isAuthenticated, getMyProfile);



export default router;