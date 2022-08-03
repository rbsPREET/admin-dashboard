import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import expressValidator from "express-validator"
import { AUTH, USERS, POSTS, COMMENTS, GLOBAL } from "./constants/index.js"

import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'
import globalRoute from './routes/global.js'

dotenv.config()
const app = express()

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to MongoDB")
    }).catch((err) => {
        throw err
    })
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({ origin: true, credentials: true }))
app.use(expressValidator())

app.use(AUTH, authRoute)
app.use(USERS, userRoute)
app.use(POSTS, postRoute)
app.use(COMMENTS, commentRoute)
app.use(GLOBAL, globalRoute)

// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "ERROR: Please try again later"
    return res.status(status).json({ message: message })
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    dbConnection()
    console.log(`Connected to server on port ${PORT}`)
})
