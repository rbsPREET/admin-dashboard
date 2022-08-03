import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Auth, LoginDetails, User } from '../../types'
import { RootState } from '../store'
import { PURGE } from 'redux-persist'
import Cookie from 'js-cookie'

export interface AuthSliceState {
    user: User,
    token: string | null,
    loading: boolean,
    error: boolean,
    errorMessage: string,
}

const initialState: AuthSliceState = {
    user: { _id: "", email: "", firstName: "" },
    token: null,
    loading: false,
    error: false,
    errorMessage: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action: PayloadAction<LoginDetails>) => {
            state.user = action.payload.userDetails.user
            state.token = action.payload.token
            state.loading = false
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = true
            state.errorMessage = action.payload
        },
        registerStart: (state) => {
            state.loading = true
        },
        registerSuccess: (state) => {
            state.loading = false
        },
        registerFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = true
            state.errorMessage = action.payload
        },
        logout: () => {
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => initialState)
    }
})

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.user

export default authSlice.reducer