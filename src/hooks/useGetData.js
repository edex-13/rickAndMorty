import { useState, useEffect } from 'react'

export const useGetData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch(url)
        const json = await response.json()
        setData(json)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }
    fetchData()
  }, [])
  return { data, loading, error }
}
