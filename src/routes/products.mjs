import { Router } from 'express'
import {
  getProductsHandler,
  postProductsHandler,
  getProductByIdHandler,
  putProductByIdHandler,
  deleteProductByIdHandler
} from '../controllers/products.mjs'

const productRouter = Router()

productRouter.route('/').get(getProductsHandler).post(postProductsHandler)

productRouter
  .route('/:productId')
  .get(getProductByIdHandler)
  .put(putProductByIdHandler)
  .delete(deleteProductByIdHandler)

export { productRouter }
