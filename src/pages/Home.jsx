
import BlogList from "../BlogList"
import useFetch from "../useFetch"

const Home = () => {

    const { error, loading, data: blogs } = useFetch('http://localhost:8000/blogs')

    
    

    return (
        <>
            <div className="home">
                {error && <div>{error}</div>}
                {loading && <div>Loooooooooooooooading</div>}
                {blogs && <BlogList blogs={blogs} title="All Blog" />}
                {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Jane Smith')} title="Mario Blog" />}
            </div>
        </>
    )
}

export default Home 