import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    comments: {
        type: [String],
        default: []

    },
    likes: {
        type: [String],
        default: []
    }
}, { timestamps: true })

export default mongoose.model("Post", PostSchema)