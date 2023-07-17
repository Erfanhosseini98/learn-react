
import useFetch from "../useFetch"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import BlogItem from "../components/BlogItem"

const Home = () => {
    // const { error, loading, data: blogs } = useFetch()
    const dispatch = useDispatch()
    const blogs = useSelector((store) => store.MyBlogs.data)
    const error = useSelector((store) => store.MyBlogs.error)
    const loading = useSelector((store) => store.MyBlogs.loading)
    useEffect(() => {
        dispatch.MyBlogs.getBlogs()
    }, [])

    return (
        <>
            <div className="home">
                <h3>All Blogs</h3>
                {error && <div>{error}</div>}
                {loading && <div>Loading...</div>}
                {blogs &&
                    <div className="blog-list">
                        {
                            blogs.map((blog) => (
                                <BlogItem key={blog.id} blog={blog}></BlogItem>
                            ))
                        }
                    </div>}
            </div>
        </>
    )
}

export default Home 