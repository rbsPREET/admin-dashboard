import React, { useState } from "react"
import { FiChevronDown } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { BiMinus } from 'react-icons/bi'
import { Sidebar } from "../types"
import { NavLink } from "react-router-dom"

interface SidebarItemProps {
    item: Sidebar
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
    const [openChildren, setOpenChildren] = useState(false)
    const [activeItem, setActiveItem] = useState(false)

    const handleOpenItem = () => {
        setOpenChildren(!openChildren)
        setActiveItem(!activeItem)
    }

    return (
        <div>
            <div
                onClick={() => item.children && handleOpenItem()}
                className={`flex flex-row items-center transition-all duration-200 justify-start p-3 relative cursor-pointer hover:bg-secondary/30 hover:rounded-lg hover:text-primary ${activeItem && "bg-secondary/30 rounded-lg text-primary"}`}
            >
                {item.icon}&nbsp;
                <NavLink to={item.routeLink} className="break-words">
                    {item.title}
                </NavLink>
                {item.children ?
                    openChildren
                        ?
                        <>
                            <IoMdClose size={20} className="absolute right-3" />
                        </>
                        :
                        <>
                            <FiChevronDown size={20} className="absolute right-3" />
                        </>
                    : ""}
            </div>
            <div>
                {openChildren &&
                    <>
                        <div className="flex flex-col">
                            {item.children?.map((item, idx) => (
                                <div key={idx} className={`flex flex-row items-center transition-all duration-200 p-3 gap-4 cursor-pointer hover:text-primary ${idx === 0 ? "text-primary" : "text-gray-500"}`}>
                                    <BiMinus size={14} />
                                    <p className="">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
        </div >
    )
}

export default SidebarItem