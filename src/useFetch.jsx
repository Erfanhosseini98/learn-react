import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
                .catch(e => {
                    setLoading(false)
                    setError(e.message)

                })
        }, 1000)
    }, [url])
    return { data, loading, error }
}

export default useFetch