import { celebrate, Joi, Segments } from 'celebrate'

const userShmema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required()
})

const validateAuthPost = celebrate({
  [Segments.BODY]: userShmema
})

export { validateAuthPost }
