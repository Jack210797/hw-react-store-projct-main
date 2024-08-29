import axios from 'axios'
import { useState } from 'react'

export const useDelete = (url: string) => {
  const [error, setError] = useState<string | null>(null)
  const del = async (id: string) => {
    try {
      const response = await axios.delete(`${url}/${id}`)
      return response.data
    } catch (error) {
      setError(`Error deleting data: ${(error as Error).message}`)
    }
  }

  return { delete: del, error }
}
