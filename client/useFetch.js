import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState({})
  // needs to be json but is returning string?
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData({
          ...res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [url])

  return { data }
}

export default useFetch
