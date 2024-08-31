import { celebrate, Joi, Segments } from 'celebrate'

const userShmema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  id: Joi.number().integer().positive().required(),
  title: Joi.string().required(),
  body: Joi.string().required()
})

const validatePostPost = celebrate({
  [Segments.BODY]: userShmema
})

const validatePostPut = celebrate({
  [Segments.BODY]: userShmema
})

const validateParamsPostId = celebrate({
  [Segments.PARAMS]: {
    postId: Joi.number().integer().positive().required()
  }
})

export { validatePostPost, validatePostPut, validateParamsPostId }
