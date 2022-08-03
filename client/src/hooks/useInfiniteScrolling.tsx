import { useState, useEffect } from 'react'
import { getItemsPage } from '../api/axios'
import { Post } from '../types'

const usePosts = (pageNum: number, sort: number, routeEndpoint: string) => {
    const [results, setResults] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError({})
        const controller = new AbortController()
        const { signal } = controller
        getItemsPage(pageNum, sort, routeEndpoint, { signal })
            .then(data => {
                setResults(prev => [...prev, ...data])
                console.log("Data: ", data.length)
                console.log(data.length % 15 === 0)
                setHasNextPage(Boolean(data.length % 15 === 0))
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                if (signal.aborted) {
                    return
                }
                setIsError(true)
                setError({
                    message: err.message
                })
            })

        console.log(results)
        return () => {
            controller.abort()
        }
    }, [pageNum, sort])

    useEffect(() => {
        setResults([])
    }, [sort])

    return { results, isLoading, isError, error, hasNextPage }
}

export default usePosts