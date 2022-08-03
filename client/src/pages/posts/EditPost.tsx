import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getPost } from '../../api/axios'

const EditPost = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const res = await getPost(`posts/${id}`)
                setPost(res)
            } catch (error) {
                console.log(error)
            }
        }
        getPostDetails()
    }, [id])

    return (
        <div>EditPost</div>
    )
}

export default EditPost