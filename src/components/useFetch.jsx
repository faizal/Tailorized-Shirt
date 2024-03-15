import { useEffect, useState } from "react"
import axios from "axios"
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: url,
          headers: { 
            'Cookie': 'CFID=1399596; CFTOKEN=83115218'
          }
        };
        
        const res = await axios.request(config)
        const json = await res.json()
        setData(json);
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData();
  }, [url])

  return { loading, error, data }
}

export default useFetch