import { useEffect, useState } from "react"
import BlogList from "./BlogList"

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                    setLoading(false)
                })
        },1000)
    }, [])

    return (
        <>
            <div className="home">
                {loading && <div>Loooooooooooooooading</div>}
                {blogs && <BlogList blogs={blogs} title="All Blog" handleDelete={handleDelete} />}
                {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario Blog" />}
            </div>
        </>
    )
}

export default Home 