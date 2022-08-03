import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    const emailExists = await User.findOne({
        email: req.body.email
    })
    if (emailExists) {
        return res.status(403).json({ error: 'Email is already taken by another user' })
    }
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)
        const userToCreate = new User({
            ...req.body,
            password: hashedPassword
        })
        await userToCreate.save()
        res.status(201).send({ message: "User created successfully" })
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    const { email, password: passwordRequest } = req.body
    try {
        const isUserExist = await User.findOne({ email })
        if (!isUserExist) {
            return res.status(401).json({ message: `Email is not in use by any user` })
        }
        const isPasswordCorrect = await bcrypt.compare(passwordRequest, isUserExist.password)
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid Email || Password" })
        }
        const token = jwt.sign({ _id: isUserExist._id, email: isUserExist.email }, process.env.JWT_SECRET, {
            expiresIn: "24h"
        })
        const { password, ...user } = isUserExist._doc
        res.cookie("access_token", token, {
            expire: new Date() + 9999,
            httpOnly: true
        })
        return res.json({
            userDetails: {
                message: "Logged in successfully",
                user: user
            },
            token: token
        })
    } catch (error) {
        next(error)
    }
}

export const logout = async (req, res, next) => {
    res.clearCookie("access_token")

    return res.json({ message: "Logged out successfully" })
}
