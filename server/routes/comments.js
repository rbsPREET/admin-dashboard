import express from "express"
import { GET_COMMENTS, GET_COMMENT, CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, SEARCH_COMMENTS, GET_POST_COMMENTS } from '../constants/index.js'
import { getComments, getComment, createComment, updateComment, deleteComment, searchComments, getPostComments } from "../controllers/comment.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.get(GET_COMMENTS, getComments)
router.get(GET_POST_COMMENTS, getPostComments)
router.get(SEARCH_COMMENTS, searchComments)
router.post(CREATE_COMMENT, verifyToken, createComment)
router.put(UPDATE_COMMENT, verifyToken, updateComment)
router.delete(DELETE_COMMENT, verifyToken, deleteComment)
router.get(GET_COMMENT, getComment)

export default router