import { celebrate, Joi, Segments } from 'celebrate'

const productSchema = Joi.object({
  id: Joi.number().integer().positive(),
  name: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().integer().positive().required(),
  image: Joi.string().uri().required(),
  category: Joi.string().required()
})

const validateProductPost = celebrate({
  [Segments.BODY]: productSchema
})

const validateProductPut = celebrate({
  [Segments.BODY]: productSchema
})

const validateParamsProductId = celebrate({
  [Segments.PARAMS]: {
    productId: Joi.number().integer().positive().required()
  }
})

export { validateProductPost, validateProductPut, validateParamsProductId }
