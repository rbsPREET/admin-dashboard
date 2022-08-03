import Post from "../models/Post.js"
import User from "../models/User.js"

export const getLastestUpdatesOfModels = async (req, res, next) => {
    try {
        const posts = await Post.find({}).limit(5).sort({ createdAt: -1 })
        const users = await User.find({}).limit(5).sort({ createdAt: -1 })
        res.status(200).json({ posts, users })
    } catch (error) {
        next(error)
    }
}