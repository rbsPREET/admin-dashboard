import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: "User"
    },
    status: {
        type: Number,
        default: 1
    },
    posts: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    }
}, { timestamps: true })

export default mongoose.model("User", UserSchema)