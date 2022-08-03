import InputField from "../utils/InputField"
import { assets } from '../assets'
import { ChangeEvent, FormEvent, useState } from "react"
import { userLogin } from "../api/axios"
import { loginFailure, loginStart, loginSuccess } from "../redux/actions/authSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { useNavigate, Navigate } from "react-router-dom"

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const currentUser = useAppSelector((state) => state.auth.token)

    const [authDetails, setAuthDetails] = useState({
        email: "", password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            dispatch(loginStart())
            const res = await userLogin("auth/login", authDetails)
            dispatch(loginSuccess(res))
            navigate('/', { replace: true })
        } catch (error) {
            dispatch(loginFailure("Login failed"))
        }
        setAuthDetails({ email: "", password: "" })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let target = e.currentTarget as HTMLInputElement
        setAuthDetails({
            ...authDetails,
            [target.name]: target.value
        })
    }

    return (
        currentUser ?
            <>
                <Navigate to="/" replace />
            </>
            :
            <>
                <div className="flex justify-center items-center w-screen h-screen bg-secondary/10">
                    <div className="flex flex-col items-center justify-center md:justify-between h-full md:h-1/2 w-full md:w-1/2 bg-secondary/50 py-3 rounded-md shadow-lg">
                        <img className="w-24 md:w-32 h-24 md:h-32 mt-5 md:mt-0" src={assets.images.heroBanner} alt="heroBanner" />
                        <InputField name="Email" type="email" htmlFor="email" required handleChange={handleChange} stateField={authDetails.email} />
                        <InputField name="Password" type="password" htmlFor="password" required handleChange={handleChange} stateField={authDetails.password} />
                        <button className="p-3 my-5 bg-primary/60 disabled:bg-primary/30 disabled:opacity-50 text-white border border-primary disabled:border-primary/50 rounded-md shadow-lg" onClick={handleSubmit} disabled={!authDetails.email || !authDetails.password}>
                            Login
                        </button>
                    </div>
                </div>
            </>
    )
}

export default Login