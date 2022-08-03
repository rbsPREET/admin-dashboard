import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getPost } from "../../api/axios"
import { getPostFailure, getPostStart, getPostSuccess } from "../../redux/actions/postSlice"
import { useAppSelector } from "../../redux/hooks"
import Moment from 'react-moment'
import { AiOutlineEdit, AiOutlineLock, AiOutlineUnlock } from "react-icons/ai"
import { BiTrash } from "react-icons/bi"

interface IPostInfoProps {

}

const PostInfo: React.FC<IPostInfoProps> = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { post, loading } = useAppSelector((state) => state.post)

    useEffect(() => {
        const getPostInfo = async () => {
            try {
                dispatch(getPostStart())
                const res = await getPost(`posts/${id}`)
                dispatch(getPostSuccess(res))
                return
            } catch (error) {
                dispatch(getPostFailure("Getting post info failed, try again later"))
                navigate('/', { replace: true })
            }
        }
        getPostInfo()
        return
    }, [])

    return (
        loading ? <p>Loading...</p> : (
            <div className="flex flex-col space-y-5">
                <div className="w-full h-full bg-gradient-to-b from-secondary/70 to-secondary/20 rounded-md shadow-md shadow-secondary/50">
                    <div className="flex flex-col p-3 space-y-10">
                        {/* Header */}
                        <div className="space-y-1">
                            <div className="flex flex-row items-center justify-between">
                                <h2 className="text-2xl">{post.title}</h2>
                                <div className="flex items-center gap-2">
                                    <AiOutlineUnlock size={20} className="cursor-pointer text-green-700" /> {/* Switch depends on locked value */}
                                    <AiOutlineLock size={20} className="cursor-pointer text-gray-700" /> {/* Switch depends on locked value */}
                                    <Link to={`/posts/${post._id}/edit`} className='bg-secondary rounded-full w-8 h-8 flex items-center justify-center'>
                                        <AiOutlineEdit size={20} className="text-primary" />
                                    </Link>
                                    <BiTrash size={20} className="cursor-pointer text-red-500 hover:text-primary" />
                                </div>
                            </div>
                            <p className="text-xl">{post.userId}</p>
                            <p className="text-sm">
                                <Moment fromNow>
                                    {post.createdAt}
                                </Moment>
                            </p>
                        </div>
                        {/* Description */}
                        <div className="">
                            <p className="break-words">{post.description}</p>
                        </div>
                        {/* Likes, Comments */}
                        <div className="flex gap-3">
                            <span>Likes:&nbsp;{post.likes?.toString().length}</span>
                            <span>Comments:&nbsp;2</span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-gradient-to-b from-secondary/70 to-secondary/20 rounded-md shadow-md shadow-secondary/50">
                    <div className="flex flex-col p-3 space-y-2">
                        {/* Comments and Create comment */}
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="underline underline-offset-2 text-xl">Comments:</h2>
                            <Link to={`/posts/${post._id}/comment`} className='bg-secondary rounded-full w-8 h-8 flex items-center justify-center'>
                                <AiOutlineEdit size={20} className="text-primary" />
                            </Link>
                        </div>
                        {/* map comments data */}
                        <div className="flex flex-col space-y-3 bg-secondary/40 rounded-md p-3">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex items-center divide-x-2 divide-black">
                                    <p className="pr-2">UserName</p>
                                    <span className="pl-2 text-sm">1 day ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link to={`/posts`} className='bg-secondary rounded-full w-8 h-8 flex items-center justify-center'>
                                        <AiOutlineEdit size={20} className="text-primary" />
                                    </Link>
                                    <BiTrash size={20} className="cursor-pointer text-red-500 hover:text-primary" />
                                </div>
                            </div>
                            <p>blablabla</p>
                        </div>
                        <div className="flex flex-col space-y-3 bg-secondary/40 rounded-md p-3">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex items-center divide-x-2 divide-black">
                                    <p className="pr-2">UserName</p>
                                    <span className="pl-2 text-sm">1 day ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link to={`/posts`} className='bg-secondary rounded-full w-8 h-8 flex items-center justify-center'>
                                        <AiOutlineEdit size={20} className="text-primary" />
                                    </Link>
                                    <BiTrash size={20} className="cursor-pointer text-red-500 hover:text-primary" />
                                </div>
                            </div>
                            <p className="break-words">basfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffffbasfffffffffffffffffff</p>
                        </div>
                        <div className="flex flex-col space-y-3 bg-secondary/40 rounded-md p-3">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex items-center divide-x-2 divide-black">
                                    <p className="pr-2">UserName</p>
                                    <span className="pl-2 text-sm">1 day ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link to={`/posts`} className='bg-secondary rounded-full w-8 h-8 flex items-center justify-center'>
                                        <AiOutlineEdit size={20} className="text-primary" />
                                    </Link>
                                    <BiTrash size={20} className="cursor-pointer text-red-500 hover:text-primary" />
                                </div>
                            </div>
                            <p>blablabla</p>
                        </div>
                        <div className="flex flex-col space-y-3 bg-secondary/40 rounded-md p-3">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex items-center divide-x-2 divide-black">
                                    <p className="pr-2">UserName</p>
                                    <span className="pl-2 text-sm">1 day ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link to={`/posts`} className='bg-secondary rounded-full w-8 h-8 flex items-center justify-center'>
                                        <AiOutlineEdit size={20} className="text-primary" />
                                    </Link>
                                    <BiTrash size={20} className="cursor-pointer text-red-500 hover:text-primary" />
                                </div>
                            </div>
                            <p>blablabla</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default PostInfo