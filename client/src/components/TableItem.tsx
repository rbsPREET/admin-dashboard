import { forwardRef } from "react"
import { Post, User } from "../types"
import { TbUserCheck, TbUserOff } from 'react-icons/tb'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import Moment from 'react-moment'
import { Link } from "react-router-dom"

interface ITableItemProps {
    type: string
    item: User | Post | any
}

const TableItem = forwardRef<HTMLTableRowElement, ITableItemProps>(({ type, item }, ref) => {
    return (
        <tr className="text-sm" ref={ref}>
            {type === "User" && (
                <>
                    <td className="py-5">
                        {item._id}
                    </td>
                    <td className="py-5">
                        {item.email}
                    </td>
                    <td className="py-5">
                        {item.firstName}
                    </td>
                    <td className="py-5">
                        {item.lastName}
                    </td>
                    <td className={`py-5 uppercase ${item.role === "Admin" && "text-primary font-bold"}`}>
                        {item.role}
                    </td>
                    <td className="py-5">
                        <Moment fromNow>{item.createdAt}</Moment>
                    </td>
                    <td className="py-5 pl-5">
                        {item.status === 1 && (
                            <Link to={`/users/${item._id}`}>
                                <TbUserCheck size={20} className="text-green-600" />
                            </Link>
                        )}
                        {item.status === 0 && (
                            <TbUserOff size={20} className="text-red-600" />
                        )}
                    </td>
                </>
            )}
            {type === "Post" && (
                <>
                    <td className="py-5 pr-3">
                        {item._id}
                    </td>
                    <td className="py-5 pr-3">
                        {item.userId.email}
                    </td>
                    <td className="py-5 pr-3">
                        {item.category}
                    </td>
                    <td className="line-clamp-1 overflow-hidden pt-5 pr-3">
                        {item.title}
                    </td>
                    <td className="py-5 pr-3 whitespace-nowrap">
                        <Moment fromNow>{item.createdAt}</Moment>
                    </td>
                    <td className="line-clamp-1 overflow-hidden pt-5 pr-3">
                        {item.description}
                    </td>
                    <td className="py-5 text-center">
                        {item.likes.length}
                    </td>
                </>
            )}
            <td className="pr-2">
                <Link to={`/posts/${item._id}`}>
                    <AiOutlineEdit size={20} className="cursor-pointer hover:text-primary" />
                </Link>
            </td>
            <td className="pl-2">
                <BiTrash size={20} className="cursor-pointer hover:text-primary" />
            </td>
        </tr>
    )
})
export default TableItem