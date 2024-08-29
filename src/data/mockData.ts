import { ProductInterface } from '../types/Product.Interface'

export interface ProductCategoriesInterface {
  value: string
  text: string
}

export const PRODUCT_CATEGORIES: ProductCategoriesInterface[] = [
  {
    value: 'Accessories and Peripherals',
    text: 'Accessories and Peripherals'
  },
  {
    value: 'Cameras',
    text: 'Cameras'
  },
  {
    value: 'Computers',
    text: 'Computers'
  },
  {
    value: 'Graphics Cards',
    text: 'Graphics Cards'
  },
  {
    value: 'Headphones',
    text: 'Headphones'
  },
  { value: 'Laptops', text: 'Laptops' },
  { value: 'Monitors', text: 'Monitors' },
  { value: 'Software', text: 'Software' },
  { value: 'Smartphones', text: 'Smartphones' },
  { value: 'Audio and Headphones', text: 'Audio and Headphones' },
  { value: 'Gaming', text: 'Gaming' },
  { value: 'Smart Home', text: 'Smart Home' },
  { value: 'Wearables', text: 'Wearables' },
  { value: 'Home Entertainment', text: 'Home Entertainment' },
  { value: 'Networking', text: 'Networking' },
  { value: 'Storage', text: 'Storage' },
  { value: 'Drones and Accessories', text: 'Drones and Accessories' }
]

export const INITIAL_PRODUCT: Partial<ProductInterface> = {
  name: 'Razer BlackWidow V3 Pro Mechanical Gaming Keyboard',
  description: 'Wireless mechanical gaming keyboard with customizable RGB lighting',
  price: 230.0,
  image: 'https://loremflickr.com/640/480/keyboard',
  category: 'Accessories and Peripherals'
}

export interface SortByListInterface {
  value: string
  text: string
}

export const SORT_BY_LIST: SortByListInterface[] = [
  {
    value: '',
    text: 'Default order'
  },
  {
    value: 'price',
    text: 'Sort by price'
  },
  {
    value: 'name',
    text: 'Sort by name'
  },
  {
    value: 'category',
    text: 'Sort by category'
  }
]

export interface OrderByListInterface {
  value: string
  text: string
}

export const ORDER_BY_LIST: SortByListInterface[] = [
  {
    value: 'asc',
    text: 'Ascending'
  },
  {
    value: 'desc',
    text: 'Descending'
  }
]
