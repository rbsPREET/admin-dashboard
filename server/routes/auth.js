import express from "express"
import { authRegisterValidator } from "../middleware/auth.js"
import { REGISTER, LOGIN, LOGOUT } from '../constants/index.js'
import { register, login, logout } from "../controllers/auth.js"

const router = express.Router()

router.post(REGISTER, authRegisterValidator, register)
router.post(LOGIN, login)
router.get(LOGOUT, logout)


export default router