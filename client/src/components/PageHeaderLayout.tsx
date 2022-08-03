import React from "react"
import { IoCreateOutline } from 'react-icons/io5'
import { Link } from "react-router-dom"

interface IPageHeaderLayoutProps {
    title: string
    displayCreateButton?: boolean
}

const PageHeaderLayout: React.FC<IPageHeaderLayoutProps> = ({ title, displayCreateButton = true }) => {
    return (
        <div className="flex flex-row justify-between items-center pb-3">
            <h2 className="text-3xl">{title}</h2>
            {displayCreateButton &&
                <Link to={`/${title.toLowerCase()}/create`} className='bg-secondary/50 p-2 rounded-full cursor-pointer'>
                    <IoCreateOutline size={20} className="text-primary" />
                </Link>
            }
        </div>
    )
}

export default PageHeaderLayout