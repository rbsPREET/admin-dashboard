import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../api/axios'
import PageHeaderLayout from '../../components/PageHeaderLayout'
import PageLayout from '../../components/PageLayout'
import { createPostFailure, createPostStart, createPostSuccess } from '../../redux/actions/postSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Post } from '../../types'
import InputField from '../../utils/InputField'
import SelectField from '../../utils/SelectField'
import TextAreaField from '../../utils/TextAreaField'

export interface ICategory {
    _id: number,
    title: string
}

const CreatePost = () => {
    const [postCreationDetails, setPostCreationDetails] = useState<Post>({
        category: "", title: "", description: "", userId: ""
    })

    const categories: ICategory[] = [
        {
            _id: 1,
            title: "Relationship"
        },
        {
            _id: 2,
            title: "Fitness"
        },
        {
            _id: 3,
            title: "Carrer"
        },
    ]

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth.user)
    const userToken = useAppSelector(state => state.auth.token)

    useEffect(() => {
        setPostCreationDetails({ ...postCreationDetails, userId: user?._id, category: '-1' })
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!userToken) {
            navigate('/login', { replace: true })
        }
        dispatch(createPostStart())
        try {
            const res = await createPost("posts", postCreationDetails)
            dispatch(createPostSuccess(res))
            navigate('/posts', { replace: true })
        } catch (error) {
            dispatch(createPostFailure("Post Creation failed"))
        }
        setPostCreationDetails({ title: "", description: "", category: "", userId: "" })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        setPostCreationDetails({
            ...postCreationDetails,
            [target.name]: target.value
        })
    }

    return (
        <PageLayout>
            <>
                <PageHeaderLayout title='Create Post' displayCreateButton={false} />
            </>
            <>
                <form onSubmit={handleSubmit}>
                    <InputField name="Title" type="text" htmlFor="title" required handleChange={handleChange} stateField={postCreationDetails.title} />
                    <SelectField list={categories} name="Category" htmlFor="category" required handleChange={handleChange} stateField={postCreationDetails.category} />
                    <TextAreaField name="Description" htmlFor="description" required handleChange={handleChange} stateField={postCreationDetails.description} />
                    <button
                        className="p-3 my-5 bg-primary/60 disabled:bg-primary/30 disabled:opacity-50 text-white uppercase border border-primary disabled:border-primary/50 rounded-md shadow-lg"
                        type='submit'
                        disabled={postCreationDetails.category === "-1"}
                    >
                        Create
                    </button>
                </form>
            </>
        </PageLayout>
    )
}

export default CreatePost