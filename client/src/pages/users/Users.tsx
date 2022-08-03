import { useState } from "react"
import PageBodyLayout from "../../components/PageBodyLayout"
import PageHeaderLayout from "../../components/PageHeaderLayout"
import PageLayout from "../../components/PageLayout"
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling'

const Users = () => {
    const [pageNum, setPageNum] = useState(1)
    const [sort, setSort] = useState(-1)
    const { results, isLoading, isError, error, hasNextPage } = useInfiniteScrolling(pageNum, sort, "users")
    return (
        <>
            <PageLayout>
                <>
                    <PageHeaderLayout
                        title="Users"
                    />
                </>
                <>
                    <PageBodyLayout
                        type="User"
                        cols={["ID", "Email", "FirstName", "LastName", "Role", "CreatedAt", "Status"]}
                        data={results}
                        isLoading={isLoading}
                        isError={isError}
                        error={error}
                        hasNextPage={hasNextPage}
                        setPageNum={setPageNum}
                        setSort={setSort}
                        sort={sort}
                    />
                </>
            </PageLayout>
        </>
    )
}

export default Users