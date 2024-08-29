import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string, limit?: number, reload?: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()

    const fetchData = async () => {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 20))
        const responce = await axios.get<T[]>(limit ? `${url}?_limit=${limit}` : url, {
          cancelToken: cancelToken.token
        })

        if (responce?.status !== 200) {
          throw new Error(`Error: Request failed with status code: ${responce.status}`)
        }

        setData(responce.data)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', (error as Error).message)
        } else {
          setError(`Error fetching data: ${(error as Error).message}`)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchData().catch((err) => console.error('Error fetching data:', err.message))
  }, [url, limit, reload])
  return { data, error, isLoading }
}
