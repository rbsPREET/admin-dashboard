import { useEffect, useState } from "react"
import { getGlobalLastestItems } from "../api/axios"
import ModelCard from "../components/ModelCard"
import PageBodyLayout from "../components/PageBodyLayout"
import PageHeaderLayout from "../components/PageHeaderLayout"
import PageLayout from "../components/PageLayout"
import { Global } from '../types'

const Home = () => {
    const [data, setData] = useState<Global>({
        users: [],
        posts: []
    })

    useEffect(() => {
        const getGlobalLastest = async () => {
            try {
                const res = await getGlobalLastestItems('global/lastest')
                setData(res)
                return
            } catch (error) {
                console.log(error)
            }
        }
        getGlobalLastest()
        return
    }, [])

    console.log(data)

    return (
        <>
            <PageLayout>
                <>
                    <PageHeaderLayout
                        title="Home - Lastest Updates"
                    />
                </>
                <>
                    <div className="flex flex-col space-y-5">
                        <ModelCard data={data.users} loading={true} error={true} title={"Users"} />
                        <ModelCard data={data.posts} loading={true} error={true} title={"Posts"} />
                    </div>
                </>
            </PageLayout>
        </>
    )
}

export default Home