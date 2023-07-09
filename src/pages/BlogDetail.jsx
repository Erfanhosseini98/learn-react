import {  useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetail = () => {
    const { id } = useParams()
    const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id)
    const naviagte = useNavigate()
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id , {
            method: 'DELETE'
        }).then(() => {
            naviagte('/')
        })
    }
    return (
        <div>
            {loading && <p>Loading post</p>}
            {error && <p>error {error}</p>}
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        <br />
                        <p>{blog.body}</p>

                        <button onClick={handleDelete}>Delete</button>
                    </article>
                )}
        </div>
    )
}

export default BlogDetail