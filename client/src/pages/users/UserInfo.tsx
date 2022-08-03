import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUser } from "../../api/axios"
import { User } from "../../types"

interface IUserInfoProps {

}

const UserInfo: React.FC<IUserInfoProps> = () => {
    const [user, setUser] = useState<any>({
        _id: "", email: "", firstName: "", lastName: "", createdAt: "", posts: [], comments: [], role: "", status: 0
    })
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const res = await getUser(`users/${id}`)
                console.log(res)
                setUser(res)
                return
            } catch (error) {
                console.log("Failed")
                navigate('/', { replace: true })

            }
        }
        getUserInfo()
        return
    }, [])

    return (
        <div>UserInfo</div>
    )
}

export default UserInfo