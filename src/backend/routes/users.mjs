import express from 'express'
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  deleteUserByIdHandler
} from '../controllers/users.mjs'
import { validateUserPost, validateUserPut, validateParamsUserId } from '../validators/userValidator.mjs'

const usersRouter = express.Router()

usersRouter.route('/').get(getUsersHandler).post(validateUserPost, postUsersHandler)

usersRouter
  .route('/:userId')
  .get(validateParamsUserId, getUserByIdHandler)
  .put(validateParamsUserId, validateUserPut, putUserByIdHandler)
  .delete(validateParamsUserId, deleteUserByIdHandler)

export { usersRouter }
