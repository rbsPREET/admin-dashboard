import express from "express"
import { GET_LASTEST_UPDATES } from '../constants/index.js'
import { getLastestUpdatesOfModels } from "../controllers/global.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.get(GET_LASTEST_UPDATES, getLastestUpdatesOfModels)

export default router