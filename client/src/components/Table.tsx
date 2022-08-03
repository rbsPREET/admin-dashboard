import React from "react"

interface ITableProps {
    children: any
    cols: string[]
    isLoading?: boolean
}

const Table: React.FC<ITableProps> = ({ children, cols, isLoading }) => {
    return (
        <div className="bg-gradient-to-b from-secondary/70 to-secondary/20 rounded-md p-3 overflow-auto custom-scrollbar shadow-md h-[calc(100vh-256px)]">
            <table className="w-full">
                <thead>
                    <tr>
                        {cols.map((col) => (
                            <th key={col} className="text-left uppercase text-md">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-primary/50">
                    {/* data map */}
                    {children}
                    {isLoading && <tr><td>Loading...</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Table