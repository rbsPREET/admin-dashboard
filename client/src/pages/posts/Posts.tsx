import { useState } from "react"
import PageBodyLayout from "../../components/PageBodyLayout"
import PageHeaderLayout from "../../components/PageHeaderLayout"
import PageLayout from "../../components/PageLayout"
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling'

const Posts = () => {
    const [pageNum, setPageNum] = useState(1)
    const [sort, setSort] = useState(-1)
    const { results, isLoading, isError, error, hasNextPage } = useInfiniteScrolling(pageNum, sort, "posts")

    return (
        <>
            <PageLayout>
                <>
                    <PageHeaderLayout
                        title="Posts"
                    />
                </>
                <>
                    <PageBodyLayout
                        type="Post"
                        cols={["ID", "CreatedBy", "Category", "Title", "CreatedAt", "Description", "Likes"]}
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

export default Posts