import express from 'express'
import {
  getPostsHandler,
  postPostsHandler,
  getPostByIdHandler,
  putPostByIdHandler,
  deletePostByIdHandler
} from '../controllers/posts.mjs'
import { validatePostPost, validatePostPut, validateParamsPostId } from '../validators/postValidator.mjs'

const postsRouter = express.Router()

postsRouter.route('/').get(getPostsHandler).post(validatePostPost, postPostsHandler)

postsRouter
  .route('/:postId')
  .get(validateParamsPostId, getPostByIdHandler)
  .put(validateParamsPostId, validatePostPut, putPostByIdHandler)
  .delete(validateParamsPostId, deletePostByIdHandler)

export { postsRouter }
