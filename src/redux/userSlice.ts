import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../types/User.interface'
import { RootState } from './store.ts'
import { createFetchThunk } from './createFetchThunk.ts'

interface UserStateInterface {
  users: UserInterface[]
  error: string | null
  isLoading: boolean
}

const initialState: UserStateInterface = {
  users: [],
  error: null,
  isLoading: false
}

export const fetchAllUsers = createFetchThunk<UserInterface>('users/fetchAllUsers')

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAllUsers.fulfilled, (state, action: PayloadAction<unknown[]>) => {
        state.isLoading = false
        state.users = action.payload as UserInterface[]
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.isLoading = false
        if (action.error && typeof action.error.message === 'string') {
          state.error = action.error.message
        } else {
          state.error = 'An unexpected error occurred'
        }
      })
  }
})

export const selectUsers = (state: RootState) => state.users.users
export const selectUsersLoading = (state: RootState) => state.users.isLoading
export const selectUsersError = (state: RootState) => state.users.error

export default userSlice.reducer
