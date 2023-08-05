import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddlewares } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
})

const router = express.Router();

//using middlewares
app.use(express.json());
app.use(cookieParser());// for access cookie
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "PUT","POST","DELETE"],
  Credential: true, //
}));

app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);
 
app.get("/", (req, res) => {
  res.send("ready to make api");
});

app.use(errorMiddlewares);










