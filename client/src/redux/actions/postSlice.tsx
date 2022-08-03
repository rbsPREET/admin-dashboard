import { createSlice } from '@reduxjs/toolkit'
import { Post } from '../../types'
import { RootState } from '../store'

export interface PostSliceState {
    post: Post,
    loading: boolean,
    error: boolean,
    errorMessage: string,
}

const initialState: PostSliceState = {
    post: {
        _id: "",
        userId: "",
        title: "",
        description: "",
        category: "",
        createdAt: "",
        comments: [],
        likes: 0
    },
    loading: false,
    error: false,
    errorMessage: ""
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPostStart: (state) => {
            state.loading = true
        },
        getPostSuccess: (state, action) => {
            state.post = action.payload
            state.loading = false
        },
        getPostFailure: (state, action) => {
            state.loading = false
            state.error = true
            state.errorMessage = action.payload
        },
        createPostStart: (state) => {
            state.loading = true
        },
        createPostSuccess: (state, action) => {
            state.post = action.payload
            state.loading = false
        },
        createPostFailure: (state, action) => {
            state.loading = false
            state.error = true
            state.errorMessage = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { getPostStart, getPostSuccess, getPostFailure, createPostStart, createPostSuccess, createPostFailure } = postSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selecPosts = (state: RootState) => state.post.post

export default postSlice.reducer