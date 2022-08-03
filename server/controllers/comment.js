import Comment from "../models/Comment.js"

export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find()
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}

export const getComment = async (req, res, next) => {
    const { id } = req.params
    try {
        const comment = await Comment.findById(id)
        if (!comment) {
            return res.status(404).json({ message: `${id} id is not in use by any comment` })
        }
        res.status(200).json(comment)
    } catch (error) {
        next(error)
    }
}

export const createComment = async (req, res, next) => {
    if (req.user) {
        const commentToCreate = new Comment({ userId: req.user.id, ...req.body })
        try {
            const createdComment = await commentToCreate.save()
            res.status(200).json(createdComment)
        } catch (error) {
            next(error)
        }
    } else {
        res.status(403).json({ message: "Comment creation failed, try again later" })
    }
}

export const updateComment = async (req, res, next) => {
    const { id } = req.params
    try {
        const comment = await Comment.findById(id)
        if (!comment) {
            return res.status(404).json({ message: "No comment has been found, try again later" })
        }
        if (req.user.id === post.userId) {
            const commentToUpdate = await Comment.findByIdAndUpdate(id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(commentToUpdate)
        } else {
            res.status(403).json({ message: "Comment creation failed, try again later" })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteComment = async (req, res, next) => {
    const { id } = req.params
    try {
        const comment = await Comment.findById(id)
        if (!comment) {
            return res.status(404).json({ message: "No comment has been found, try again later" })
        }
        if (req.user.id === comment.userId) {
            const commentToDelete = await Comment.findByIdAndDelete(id)
            res.status(204).json({ message: `The comment with the id ${commentToDelete._id} has been deleted successfully` })
        } else {
            res.status(403).json({ message: "Comment deletion failed, try again later" })
        }
    } catch (error) {
        next(error)
    }
}

export const searchComments = async (req, res, next) => {
    const query = req.query.q
    try {
        const comments = await Comment.find({ description: { $regex: query, $options: "i" } }).limit(5)
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}

export const getPostComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId })
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}