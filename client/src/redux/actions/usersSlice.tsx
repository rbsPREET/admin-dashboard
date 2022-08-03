import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types'
import { RootState } from '../store'

export interface UsersSliceState {
    users: User[]
}

const initialState: UsersSliceState = {
    users: []
}

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {

        },
        getUsers: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.users

export default usersSlice.reducer