import { Sidebar } from '../types'
import { BiUserCircle } from 'react-icons/bi'
import { BsFillFilePostFill, BsCardChecklist } from 'react-icons/bs'
import { GoCommentDiscussion } from 'react-icons/go'

export const sidebarData: Sidebar[] = [
    {
        title: "Users",
        icon: <BiUserCircle size={24} />,
        routeLink: "/users",
        children: [
            {
                title: "All"
            },
            {
                title: "Active"
            },
            {
                title: "Banned"
            },
        ]
    },
    {
        title: "Posts",
        icon: <BsFillFilePostFill size={22} />,
        routeLink: "/posts",
        children: [
            {
                title: "All"
            },
            {
                title: "Active"
            },
            {
                title: "Pending"
            },
            {
                title: "Closed"
            }
        ]
    },
    {
        title: "Comments",
        icon: <GoCommentDiscussion size={22} />,
        routeLink: "/comments",
        children: [
            {
                title: "All"
            },
            {
                title: "Active"
            },
            {
                title: "Deleted"
            }
        ]
    },
    {
        title: "Todo",
        routeLink: "/todo",
        icon: <BsCardChecklist size={20} />,
    }
]