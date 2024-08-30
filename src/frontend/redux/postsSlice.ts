import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PostInterface } from '../types/Post.interface.ts'
import { RootState } from './store.ts'
import { createFetchThunk } from './createFetchThunk.ts'

interface PostsStateInterface {
  posts: PostInterface[]
  error: string | null
  isLoading: boolean
}

const initialState: PostsStateInterface = {
  posts: [],
  error: null,
  isLoading: false
}

export const fetchAllPosts = createFetchThunk<PostInterface>('posts/fetchAllPosts')

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        ;(state.isLoading = true), (state.error = null)
      })
      .addCase(fetchAllPosts.fulfilled, (state, action: PayloadAction<PostInterface[]>) => {
        state.isLoading = false
        state.posts = action.payload
      })
      .addCase(fetchAllPosts.rejected, (state, action: PayloadAction<unknown, string>) => {
        state.isLoading = false
        if (action.payload instanceof Error) {
          state.error = action.payload.message
        } else {
          state.error = 'An unexpected error occurred'
        }
      })
  }
})
export const selectPosts = (state: RootState) => state.posts.posts
export const selectPostsLoading = (state: RootState) => state.posts.isLoading
export const selectPostsError = (state: RootState) => state.posts.error

export default postsSlice.reducer
