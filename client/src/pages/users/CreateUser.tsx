import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../api/axios'
import PageHeaderLayout from '../../components/PageHeaderLayout'
import PageLayout from '../../components/PageLayout'
import { registerStart, registerSuccess, registerFailure } from '../../redux/actions/authSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Auth } from '../../types'
import InputField from '../../utils/InputField'

const CreateUser = () => {
    const [userCreationDetails, setUserCreationDetails] = useState<Auth>({
        email: "", password: "", confirmPassword: "", firstName: "", lastName: ""
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const userToken = useAppSelector(state => state.auth.token)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!userToken) {
            navigate('/login', { replace: true })
        }
        dispatch(registerStart())
        try {
            await createPost("auth/register", userCreationDetails)
            dispatch(registerSuccess())
            navigate('/users', { replace: true })
        } catch (error) {
            dispatch(registerFailure("User Creation failed"))
        }
        setUserCreationDetails({ email: "", password: "", confirmPassword: "", firstName: "", lastName: "" })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        setUserCreationDetails({
            ...userCreationDetails,
            [target.name]: target.value
        })
    }

    console.log(userCreationDetails)

    return (
        <PageLayout>
            <>
                <PageHeaderLayout title='Create User' displayCreateButton={false} />
            </>
            <>
                <form onSubmit={handleSubmit}>
                    <InputField name="Email" type="email" htmlFor="email" required handleChange={handleChange} stateField={userCreationDetails.email} />
                    <InputField name="Password" type="password" htmlFor="password" required handleChange={handleChange} stateField={userCreationDetails.password} />
                    <InputField name="Confirm Password" type="password" htmlFor="confirmPassword" required handleChange={handleChange} stateField={userCreationDetails.confirmPassword} />
                    <InputField name="FirstName" type="text" htmlFor="firstName" required handleChange={handleChange} stateField={userCreationDetails.firstName} />
                    <InputField name="LastName" type="text" htmlFor="lastName" required handleChange={handleChange} stateField={userCreationDetails.lastName} />
                    <button
                        className="p-3 my-5 bg-primary/60 disabled:bg-primary/30 disabled:opacity-50 text-white uppercase border border-primary disabled:border-primary/50 rounded-md shadow-lg"
                        type='submit'
                        disabled={userCreationDetails.email.length < 4}
                    >
                        Create
                    </button>
                </form>
            </>
        </PageLayout>
    )
}

export default CreateUser