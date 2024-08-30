import express from 'express'
import {
  getPostsHandler,
  postPostsHandler,
  getPostByIdHandler,
  putPostByIdHandler,
  deletePostByIdHandler
} from '../controllers/posts.mjs'

const postsRouter = express.Router()

postsRouter.route('/').get(getPostsHandler).post(postPostsHandler)

postsRouter.route('/:postId').get(getPostByIdHandler).put(putPostByIdHandler).delete(deletePostByIdHandler)

export { postsRouter }
