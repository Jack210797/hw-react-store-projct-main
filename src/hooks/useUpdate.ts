import axios from 'axios'
import { useState } from 'react'
import { ProductInterface } from '../types/Product.Interface'

export const useUpdate = (url: string) => {
  const [error, setError] = useState<string | null>(null)

  const update = async (product: Partial<ProductInterface>) => {
    try {
      const response = await axios.put(`${url}/${product.id}`, product)
      return response.data
    } catch (error) {
      setError(`Error updating data: ${(error as Error).message}`)
    }
  }

  return { update, error }
}
