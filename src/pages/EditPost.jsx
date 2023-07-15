import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../useFetch"

const EditPost = () => {
    const { id } = useParams()
    const { data: blog, loading: blogLoading , error } = useFetch('http://localhost:8000/blogs/' + id)
    console.log(blog)
    const { data: authors, loading: authorsLoading, error: authorsError } = useFetch('http://localhost:8000/authors')
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    // const [loading, setLoading] = useState(false)
    // const navigate = useNavigate()
    // const handleEdit = (e) => {
    //     e.preventDefault()
    //     const blog = { title, body, author }
    //     setLoading(true)
    //     fetch('http://localhost:8000/blogs' + id, {
    //         method: 'PATCH',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(blog)
    //     }).then(
    //         setLoading(() => {
    //             setLoading(false)
    //             navigate("/")
    //         })
    //     )
    // }
    return (
        <>
            {/* <div className="create" >
                <h2>Edit </h2>
                <form onSubmit={handleEdit}>

                    <label>Blog Title:</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>Blog Body:</label>
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                    <label>Blog author:</label>
                    <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                        {authorsError && <option>{authorsError}</option>}
                        {authorsLoading && <option>Loading...</option>}
                        {authors && authors.map((item) => {
                            { console.log(item) }
                            return <option key={item.id} value={item.id} >{item.name}</option>
                        })}
                    </select>
                    {!loading && <button >Add Blog</button>}
                    {loading && <button disabled >Adding Blog ...</button>}
                </form>
            </div> */}
        </>
    )
}

export default EditPost