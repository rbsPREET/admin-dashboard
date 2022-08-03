import express from "express"
import { GET_POSTS, GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, SEARCH_POSTS, LIKE_POST } from '../constants/index.js'
import { getPosts, getPost, createPost, updatePost, deletePost, searchPosts, likePost } from "../controllers/post.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.get(GET_POSTS, getPosts)
router.get(SEARCH_POSTS, searchPosts)
router.post(CREATE_POST, verifyToken, createPost)
router.put(UPDATE_POST, verifyToken, updatePost)
router.delete(DELETE_POST, verifyToken, deletePost)
router.get(GET_POST, getPost)
router.put(LIKE_POST, verifyToken, likePost)

export default router