import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = () => {
  const [state, setState] = useState({
    isLoading: true,
    videos: [],
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3080/api/v1/media`)
      const { files } = data.data
      setState({ isLoading: false, videos: files })
    } catch (error) {
      setState({ isLoading: false, videos: [] })
    }
  }

  return state
}

export default useFetch