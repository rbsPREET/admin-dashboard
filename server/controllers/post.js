import Post from "../models/Post.js"
import User from "../models/User.js"

export const getPosts = async (req, res, next) => {
    const page = req.query.page ? Number(req.query.page) : 1
    const sort = req.query.sort ? Number(req.query.sort) : -1
    const DEFAULT_LIMIT = 15
    try {
        const posts = await Post.find({}).skip((page - 1) * DEFAULT_LIMIT).limit(DEFAULT_LIMIT).populate('userId', 'email', User).sort({ createdAt: sort })
        res.status(200).json(posts)
    } catch (error) {
        next(error)
    }
}

export const getPost = async (req, res, next) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        if (!post) {
            return res.status(404).json({ message: `${id} id is not in use by any post` })
        }
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}

export const createPost = async (req, res, next) => {
    if (req.user) {
        const postToCreate = new Post({ userId: req.user.id, ...req.body })
        try {
            const createdPost = await postToCreate.save()
            res.status(200).json(createdPost)
        } catch (error) {
            next(error)
        }
    } else {
        res.status(403).json({ message: "Post creation failed, try again later" })
    }
}

export const updatePost = async (req, res, next) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        if (!post) {
            return res.status(404).json({ message: "No post has been found, try again later" })
        }
        if (req.user.id === post.userId) {
            const postToUpdate = await Post.findByIdAndUpdate(id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(postToUpdate)
        } else {
            res.status(403).json({ message: "Post creation failed, try again later" })
        }
    } catch (error) {
        next(error)
    }
}

export const deletePost = async (req, res, next) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        if (!post) {
            return res.status(404).json({ message: "No post has been found, try again later" })
        }
        if (req.user.id === post.userId) {
            const postToDelete = await Post.findByIdAndDeletendB(id)
            res.status(204).json({ message: `The post with the id ${postToDelete._id} has been deleted successfully` })
        } else {
            res.status(403).json({ message: "Post deletion failed, try again later" })
        }
    } catch (error) {
        next(error)
    }
}

export const searchPosts = async (req, res, next) => {
    const query = req.query.q
    try {
        const posts = await Post.find({ title: { $regex: query, $options: "i" } }).limit(5)
        res.status(200).json(posts)
    } catch (error) {
        next(error)
    }
}

export const likePost = async (req, res, next) => {
    const userId = req.user.id
    const { id } = req.params
    try {
        const postToUpdate = await Post.findByIdAndUpdate(id, {
            $addToSet: { likes: userId }
        }, { new: true })
        res.status(200).json(postToUpdate)
    } catch (error) {
        next(error)
    }
}