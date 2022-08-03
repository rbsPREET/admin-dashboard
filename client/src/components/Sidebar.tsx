import { Sidebar as SidebarType } from "../types"
import { assets } from '../assets'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import SidebarItem from "./SidebarItem"
import { Link } from "react-router-dom"

interface ISidebarProps {
    sidebarData: SidebarType[]
}

const Sidebar = ({ sidebarData }: ISidebarProps) => {

    return (
        <div className="fixed z-20 top-0 left-0 w-64 max-w-64 py-3 shadow-lg overflow-x-hidden hidden md:flex flex-col gap-7 items-center bg-white h-screen">
            {/* Hero Banner && Dark Mode*/}
            <Link to='/'>
                <img className="w-28 h-28" src={assets.images.heroBanner} alt="heroBanner" />
            </Link>
            {/* Navigation Links */}
            <div className="w-full h-full custom-scrollbar px-5 flex flex-col overflow-y-auto">
                {sidebarData.map((item, idx) => (
                    <SidebarItem key={idx} item={item} />
                ))}
            </div>
            {/* Social Media */}
            <ul className="flex flex-row space-x-3">
                <li className="cursor-pointer">
                    <BsLinkedin size={20} color="#0A66C2" />
                </li>
                <li className="cursor-pointer">
                    <BsGithub size={20} color="#171515" />
                </li>
            </ul>
        </div>
    )
}

export default Sidebar