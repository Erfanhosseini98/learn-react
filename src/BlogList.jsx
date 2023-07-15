import { Link } from "react-router-dom"
import useFetch from "./useFetch"


const BlogList = ({ blogs, title }) => {

    const { data: authors, loading: authorsLoading, error: authorsError } = useFetch('http://localhost:8000/authors')



    return (
        <>
            <h3>{title}</h3>
            <div className="blog-list">
                {
                    blogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <Link to={`Blog/${blog.id}`}>
                                <h2>{blog.title}</h2>
                                <p>Written by {
                                    authorsLoading ? 'Loading' :  authors && authors.find(author => author.id === blog.authorId).name
                                   }
                                </p>
                                {<Link to={`EditBlog/${blog.id}`} ><button> Edit </button></Link>}
                                <br />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BlogList


