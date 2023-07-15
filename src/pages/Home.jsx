
import BlogList from "../BlogList"
// import useFetch from "../useFetch"

const Home = () => {

    // const { error, loading, data: blogs } = useFetch('http://localhost:8000/blogs')




    return (
        <>
            <div className="home">
                <BlogList title="All Blog" />
                {/* {error && <div>{error}</div>}
                {loading && <div>Loooooooooooooooading</div>}
                {blogs && <BlogList title="All Blog" />} */}
            </div>
        </>
    )
}

export default Home 