import React, { useCallback } from "react"
import TableItem from "../components/TableItem"
import { Post, User } from "../types"

export interface IRenderDataBasedOnTypeProps {
    data: User[] | Post[] | any | null
    type: string
    intersectObserverRef: any | null
    isLoading?: boolean
    hasNextPage?: boolean
    setPageNum?: any
}

const RenderDataBasedOnType: React.FC<IRenderDataBasedOnTypeProps> = ({ data, type, intersectObserverRef, isLoading, hasNextPage, setPageNum }) => {
    const lastItemRef = useCallback((item: any) => {
        if (isLoading) {
            return
        }
        if (intersectObserverRef.current) {
            intersectObserverRef.current.disconnect()
        }
        intersectObserverRef.current = new IntersectionObserver(items => {
            if (items[0].isIntersecting && hasNextPage) {
                console.log('Near last item')
                setPageNum((prev: number) => prev + 1)
            }
        })
        if (item) {
            intersectObserverRef.current.observe(item)
        }
    }, [isLoading, hasNextPage, setPageNum])

    return (
        data.map((item: Post | User, idx: number) => {
            if (data.length === idx + 1) {
                return <TableItem key={item._id} type={type} item={item} ref={lastItemRef} />
            }
            return <TableItem key={item._id} type={type} item={item} />
        })
    )
}

export default RenderDataBasedOnType