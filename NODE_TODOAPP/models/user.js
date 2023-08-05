import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        select: false,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

// creating User
 export const User = mongoose.model("user", Schema);