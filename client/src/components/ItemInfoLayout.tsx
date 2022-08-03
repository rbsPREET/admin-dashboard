import React, { ReactElement } from "react"

interface IItemInfoLayoutProps {
    children: JSX.Element[]
}

const ItemInfoLayout: React.FC<IItemInfoLayoutProps> = ({ children }) => {
    return (
        <>
            {/* Header */}
            < div className="w-full h-full" >
                {children[0]}
            </div>
            {/* Body */}
            < div className="w-full h-full" >
                {children[1]}
            </div>
        </>
    )
}

export default ItemInfoLayout