import { Router } from 'express'
import {
  getTodosHandler,
  postTodosHandler,
  getTodoByIdHandler,
  putTodoByIdHandler,
  deleteTodoByIdHandler
} from '../controllers/todos.mjs'

const todosRouter = Router()

todosRouter.route('/').get(getTodosHandler).post(postTodosHandler)

todosRouter.route('/:todoId').get(getTodoByIdHandler).put(putTodoByIdHandler).delete(deleteTodoByIdHandler)

export { todosRouter }
