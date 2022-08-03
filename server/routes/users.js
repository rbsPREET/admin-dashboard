import express from "express"
import { GET_USERS, GET_USER, UPDATE_USER, DELETE_USER } from '../constants/index.js'
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.get(GET_USERS, getUsers)
router.get(GET_USER, getUser)
router.put(UPDATE_USER, verifyToken, updateUser)
router.delete(DELETE_USER, verifyToken, deleteUser)

export default router