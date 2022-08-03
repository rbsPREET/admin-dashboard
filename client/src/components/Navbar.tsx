import { BsBell } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logout } from '../redux/actions/authSlice'
import { userLogout } from '../api/axios'
import { useNavigate } from 'react-router-dom'

/*
    <div className='w-1/2 hidden md:flex flex-row items-center px-3 border border-secondary rounded-full'>
        <BsSearch size={18} />
        <input onChange={() => { }} className='w-full p-2 outline-none rounded-md' placeholder='Search...' />
    </div>
*/

const Navbar = () => {
    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await userLogout("auth/logout")
            dispatch(logout())
            navigate('/login', { replace: true })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="fixed top-0 z-10 bg-white md:ml-64 w-full md:w-[calc(100%-256px)]">
            <div className="flex flex-row items-center h-16 justify-between mx-5">
                {/* Search Bar */}
                <div className=''>
                    <p>Hi,&nbsp;{user?.firstName}&nbsp;😃</p>
                </div>
                {/* Icons */}
                <div className='w-1/2 flex justify-end'>
                    <ul className='flex flex-row space-x-5'>
                        <li className='cursor-pointer hover:text-primary'>
                            <MdOutlineDarkMode size={20} />
                        </li>
                        <li className='relative cursor-pointer hover:text-primary'>
                            <BsBell size={20} />
                            <span className='absolute flex items-center justify-center rounded-full text-white text-sm bg-red-500 w-4 h-4 -top-1 -right-2'>2</span>
                        </li>
                        <li className='cursor-pointer text-red-500 hover:text-red-700' onClick={handleLogout}>
                            <FiLogOut size={20} />
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar