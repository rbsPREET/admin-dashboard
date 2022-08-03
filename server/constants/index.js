const API = "/api/v1"

// API Routes
export const AUTH = `${API}/auth`
export const USERS = `${API}/users`
export const POSTS = `${API}/posts`
export const COMMENTS = `${API}/comments`
export const GLOBAL = `${API}/global`

// Auth
export const REGISTER = '/register'
export const LOGIN = '/login'
export const LOGOUT = '/logout'

// User
export const GET_USERS = '/'
export const GET_USER = '/:id'
export const UPDATE_USER = '/:id'
export const DELETE_USER = '/:id'

// Post
export const GET_POSTS = '/'
export const GET_POST = '/:id'
export const CREATE_POST = '/'
export const UPDATE_POST = '/:id'
export const DELETE_POST = '/:id'
export const SEARCH_POSTS = '/search'
export const LIKE_POST = '/:id/like'

// Comment
export const GET_COMMENTS = '/'
export const GET_COMMENT = '/:id'
export const CREATE_COMMENT = '/'
export const UPDATE_COMMENT = '/:id'
export const DELETE_COMMENT = '/:id'
export const SEARCH_COMMENTS = '/search'
export const GET_POST_COMMENTS = '/post/:postId'

// Global
export const GET_LASTEST_UPDATES = '/lastest'