import React, { ReactElement } from "react"
import { Post, User } from "../types"
import FoxImage from '../assets/avatars/fox3.jpg'
import { Link } from "react-router-dom"
import { MdReadMore } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import Moment from "react-moment"

interface IModelCardProps {
    data: User[] | Post[] | any
    loading: boolean
    error: boolean
    title: string
}

const ModelCard: React.FC<IModelCardProps> = ({ data, loading, error, title }) => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col p-5 space-y-2 bg-gradient-to-b from-secondary/70 to-secondary/20 w-full rounded-lg shadow-md shadow-secondary/50">
                {/* Title + Fetch more button */}
                <div className="flex flex-row justify-between items-center">
                    <p className="text-xl">{title}</p>
                    <Link to={`/${title.toLowerCase()}`} replace>
                        <MdReadMore size={24} />
                    </Link>
                </div>
                {title === "Users" && (
                    data.map((user: User) => (
                        <div key={user._id} className="flex flex-row w-full overflow-hidden text-md items-center bg-secondary/80 p-3 rounded-sm border border-primary/50">
                            {/* Avatar */}
                            <img src={FoxImage} alt="avatar" className="w-14 h-14 mr-2 rounded-full" />
                            <div className="flex flex-col items-center w-[15%]">
                                {/* Username (FirstName) */}
                                <p>{user.firstName}</p>
                                {/* User Email */}
                                <p>{user.email}</p>
                            </div>
                            <h2 className="overflow-hidden flex justify-center w-[30%]">{user._id}</h2>
                            <Moment format="D/MM/YYYY" withTitle className="flex justify-center w-[20%]">
                                {user.createdAt}
                            </Moment>
                            <span className="flex justify-center w-[15%]">Posts:&nbsp;{user.posts?.length}</span>
                            <span className="flex justify-center w-[15%]">Comments:&nbsp;{user.comments?.length}</span>
                            <Link to={`/users/${user._id}`} className='w-[5%] flex justify-end'>
                                <BsInfoCircle size={20} />
                            </Link>
                        </div>
                    ))
                )}
                {title === "Posts" && (
                    data.map((post: Post) => (
                        <div key={post._id} className="flex flex-row w-full overflow-hidden text-md items-center bg-secondary/80 p-3 rounded-sm border border-primary/50">
                            <div className="flex flex-col overflow-hidden conta items-center w-[15%]">
                                {/* Post title */}
                                <p className="w-[80%] whitespace-nowrap overflow-hidden overflow-ellipsis">{post.title}</p>
                                {/* Post category */}
                                <p>{post.category}</p>
                            </div>
                            <h2 className="overflow-hidden flex justify-center w-[20%]">{post._id}</h2>
                            <h3 className="overflow-ellipsis overflow-hidden whitespace-nowrap w-[20%]">{post.description}</h3>
                            <Moment format="D/MM/YYYY" withTitle className="flex justify-center w-[20%]">
                                {post.createdAt}
                            </Moment>
                            <span className="flex justify-center w-[10%]">Comments:&nbsp;{post.comments?.toString().length}</span>
                            <span className="flex justify-center w-[10%]">Likes:&nbsp;{post.likes?.toString().length}</span>
                            <Link to={`/posts/${post._id}`} className='w-[5%] flex justify-end'>
                                <BsInfoCircle size={20} />
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ModelCard