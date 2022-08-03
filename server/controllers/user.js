import User from "../models/User.js"

export const getUsers = async (req, res, next) => {
    const page = req.query.page ? Number(req.query.page) : 1
    const sort = req.query.sort ? Number(req.query.sort) : 1
    const DEFAULT_LIMIT = 15
    try {
        const users = await User.find({}).skip((page - 1) * DEFAULT_LIMIT).limit(DEFAULT_LIMIT).sort({ createdAt: sort })
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: `${id} id is not in use by any user` })
        }
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const userToUpdate = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(userToUpdate)
        } catch (error) {
            next(error)
        }
    } else {
        res.status(403).json({ message: "You can't update that account, try again later" })
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const userToDelete = await User.findByIdAndDelete(req.params.id)
            res.status(204).json({ message: `The account with the id ${userToDelete._id} got deleted successfully` })
        } catch (error) {
            next(error)
        }
    } else {
        res.status(403).json({ message: "You can't delete that account, try again later" })
    }
}