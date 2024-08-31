import { celebrate, Joi, Segments } from 'celebrate'

const userSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  id: Joi.number().integer().positive().required(),
  title: Joi.string().required(),
  completed: Joi.boolean().required()
})

const validateTodoPost = celebrate({
  [Segments.BODY]: userSchema
})

const validateTodoPut = celebrate({
  [Segments.BODY]: userSchema
})

const validateParamsTodoId = celebrate({
  [Segments.PARAMS]: {
    todoId: Joi.number().integer().positive().required()
  }
})

export { validateTodoPost, validateTodoPut, validateParamsTodoId }
