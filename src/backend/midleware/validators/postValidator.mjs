import { celebrate, Joi, Segments } from 'celebrate'

const userSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  id: Joi.number().integer().positive().required(),
  title: Joi.string().required(),
  body: Joi.string().required()
})

const validatePostPost = celebrate({
  [Segments.BODY]: userSchema
})

const validatePostPut = celebrate({
  [Segments.BODY]: userSchema
})

const validateParamsPostId = celebrate({
  [Segments.PARAMS]: {
    postId: Joi.number().integer().positive().required()
  }
})

export { validatePostPost, validatePostPut, validateParamsPostId }
