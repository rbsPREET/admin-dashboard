import Sidebar from "./Sidebar"
import { sidebarData } from '../data/homeData'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Sidebar sidebarData={sidebarData} />
            <Navbar />
            <div className="md:ml-64 mt-16 p-5 min-h-[calc(100vh-64px)] bg-secondary/10">
                <Outlet />
            </div>
        </>
    )
}

export default Layout