import React, { useRef, Dispatch, SetStateAction, useState } from "react"
import { Post, User } from '../types'
import Table from "./Table"
import TableItem from "./TableItem"
import { BsSearch } from 'react-icons/bs'
import RenderDataBasedOnType from "../helpers/RenderDataBasedOnType"
import { IRenderDataBasedOnTypeProps } from '../helpers/RenderDataBasedOnType'

interface IPageBodyLayoutProps {
    type: string
    cols: string[]
    data: User[] | Post[] | any | null
    isLoading?: boolean
    isError?: boolean
    error?: any
    hasNextPage?: boolean
    setPageNum?: Dispatch<SetStateAction<number>> | any
    setSort?: Dispatch<SetStateAction<number>> | any
    sort?: number
}

const PageBodyLayout: React.FC<IPageBodyLayoutProps> = ({ type, cols, data, isLoading = false, isError = false, error, hasNextPage, setPageNum, setSort, sort = 1 }) => {
    const intersectObserverRef = useRef<any>()
    const renderProps = { data, type, intersectObserverRef, isLoading, hasNextPage, setPageNum }
    // Implement Infinite Scrolling
    const renderContent = RenderDataBasedOnType(renderProps)

    const [switcher, setSwitcher] = useState("ascending")

    const handleFilters = (e: any) => {
        setSwitcher(e.target.id)
        if (!(Number(e.target.value) === sort)) {
            console.log("Diff")
            setSort(Number(e.target.value))
            setPageNum(1)
        }
        console.log(e.target.value, sort)
    }

    return (
        <>
            {/* Search && Filters */}
            <div className="flex flex-row justify-between items-center w-full mb-3">
                <div className='w-3/5 md:w-1/2 flex flex-row items-center px-3 border border-secondary rounded-full'>
                    <BsSearch size={18} />
                    <input onChange={() => { }} className='w-full p-2 outline-none bg-transparent rounded-md' placeholder='Search...' />
                </div>
                <div className="flex flex-col w-24 items-center">
                    <div className="flex items-center justify-between w-full">
                        <input id="ascending" type="checkbox" checked={switcher === "ascending"} onChange={handleFilters} value="-1" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="ascending" className="text-sm font-medium text-gray-900 dark:text-gray-300">Ascending </label>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <input id="descending" type="checkbox" checked={switcher === "descending"} onChange={handleFilters} value="1" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="descending" className="text-sm font-medium text-gray-900 dark:text-gray-300">Descending</label>
                    </div>
                </div>
            </div>
            {isError && <p className="text-red-500 uppercase">Error: {error?.message}</p>}
            {type === "User" && (
                <div>
                    <Table cols={cols}>
                        <>
                            {renderContent}
                        </>
                    </Table>
                </div>
            )}
            {type === "Post" && (
                <div>
                    <Table cols={cols} isLoading={isLoading}>
                        <>
                            {renderContent}
                        </>
                    </Table>
                </div>
            )}
        </>
    )
}

export default PageBodyLayout