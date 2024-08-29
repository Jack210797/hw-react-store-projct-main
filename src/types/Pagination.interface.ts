import { ProductInterface } from './Product.Interface'

export interface PaginationInterface {
  totalItems: number
  currentPage: number
  totalPages: number
  itemsPerPage: number
}

export interface ProductsApiResponse {
  products: ProductInterface[]
  pagination: PaginationInterface
}
