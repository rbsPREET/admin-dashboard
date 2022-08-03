import React from "react"

interface IPageLayoutProps {
    children: JSX.Element[]
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
    return (
        <>
            {/* Header */}
            <div className="w-full h-full">
                {children[0]}
            </div>
            {/* Body */}
            <div className="w-full h-full">
                {children[1]}
            </div>
        </>
    )
}

export default PageLayout