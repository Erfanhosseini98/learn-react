import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetail = () => {
    const { id } = useParams()
    const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id)
    console.log(id)

    console.log(blog)
    return (
        <div>
            {loading && <p>Loading post</p>}
            {error && <p>error {error}</p>}
            {
                blog && (
                    <article>
                        <Link to="/">
                            <div><p> <strong>&lt;</strong>  back</p></div>
                        </Link>
                        <br />
                        <hr />
                        <br />
                        <h2>{blog.title}</h2>
                        <h4>{blog.author}</h4>
                        <br />
                        <hr />
                        <br />
                        <p>Article :</p>
                        <p>{blog.body}</p>


                    </article>
                )}

        </div>

    )
}

export default BlogDetail