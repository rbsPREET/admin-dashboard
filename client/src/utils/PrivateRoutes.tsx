import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const PrivateRoutes = () => {
    const user = useAppSelector((state) => state.auth.token)
    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes