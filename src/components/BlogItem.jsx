import useFetch from "../useFetch"
import { Link } from "react-router-dom"

const BlogItem = ({blog}) => {
    const { data: authors, loading: authorsLoading, error: authorsError } = useFetch('http://localhost:8000/authors')

    return ( 
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {
                authorsLoading ? 'Loading' : authors && authors.find(author => author.id === blog.authorId).name
            }
            </p>
            <br />
        <Link className="btn" to={`Blog/${blog.id}`}>
        <button> Read more ... </button>
        </Link>
        <Link className="btn" to={`EditBlog/${blog.id}`} ><button> Edit </button></Link>
    </div>
     );
}
 
export default BlogItem;