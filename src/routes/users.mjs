import express from 'express'
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  deleteUserByIdHandler
} from '../controllers/users.mjs'

const usersRouter = express.Router()

usersRouter.route('/').get(getUsersHandler).post(postUsersHandler)

usersRouter.route('/:userId').get(getUserByIdHandler).put(putUserByIdHandler).delete(deleteUserByIdHandler)

export { usersRouter }
