import { Router } from 'express'
import {
  getProductsHandler,
  postProductsHandler,
  getProductByIdHandler,
  putProductByIdHandler,
  deleteProductByIdHandler
} from '../controllers/products.mjs'
import { validateProductPost, validateProductPut, validateParamsProductId } from '../validators/productValidator.mjs'

const productRouter = Router()

productRouter.route('/').get(getProductsHandler).post(validateProductPost, postProductsHandler)

productRouter
  .route('/:productId')
  .get(validateParamsProductId, getProductByIdHandler)
  .put(validateParamsProductId, validateProductPut, putProductByIdHandler)
  .delete(validateParamsProductId, deleteProductByIdHandler)

export { productRouter }
