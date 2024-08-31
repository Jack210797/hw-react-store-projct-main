import { Router } from 'express'
import {
  getTodosHandler,
  postTodosHandler,
  getTodoByIdHandler,
  putTodoByIdHandler,
  deleteTodoByIdHandler
} from '../controllers/todos.mjs'

import { validateTodoPost, validateTodoPut, validateParamsTodoId } from '../midleware/validators/todoValidator.mjs'

const todosRouter = Router()

todosRouter.route('/').get(getTodosHandler).post(validateTodoPost, postTodosHandler)

todosRouter
  .route('/:todoId')
  .get(validateParamsTodoId, getTodoByIdHandler)
  .put(validateParamsTodoId, validateTodoPut, putTodoByIdHandler)
  .delete(validateParamsTodoId, deleteTodoByIdHandler)

export { todosRouter }
