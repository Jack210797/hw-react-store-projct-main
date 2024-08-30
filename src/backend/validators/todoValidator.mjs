import { celebrate, Joi, Segments } from 'celebrate'

const userSchema = Joi.object({
  name: Joi.string().required()
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
