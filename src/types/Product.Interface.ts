export interface ProductInterface {
  length: number
  map(arg0: (product: ProductInterface) => import('react/jsx-runtime').JSX.Element): import('react').ReactNode
  id: string
  name: string
  price: number
  description: string
  category: string
  image: string
}
