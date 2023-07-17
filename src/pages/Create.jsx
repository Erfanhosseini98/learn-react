import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../useFetch"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [authorId, setAuthorId] = useState(1)
    const [loading, setLoading] = useState(false)
    const { data: authors, loading: authorsLoading, error: authorsError } = useFetch('http://localhost:8000/authors')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, authorId }
        setLoading(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(
            setLoading(() => {
                setLoading(false)
                navigate("/")
            })
        )
    }
    return (
        <>
            <div className="create" >

                <h2>Create a new blog post</h2>

                <form onSubmit={handleSubmit}>
                    <label>Blog Title:</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>Blog Body:</label>
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                    <label>Blog author:</label>
                    <select value={authorId} onChange={(e) => setAuthorId(+e.target.value)}>
                        {authorsError && <option>{authorsError}</option>}
                        {authorsLoading && <option>Loading...</option>}
                        {authors && authors.map((item) => {
                            return <option key={item.id} value={item.id} >{item.name}</option>
                        })}
                    </select>
                    {!loading && <button >Add Blog</button>}
                    {loading && <button disabled >Adding Blog ...</button>}

                </form>
            </div>

        </>

    )
}

export default Create