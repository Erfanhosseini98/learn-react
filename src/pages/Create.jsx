import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Erfan')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
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
                    <select
                        value={author} onChange={(e) => setAuthor(e.target.value)}>
                        <option value="Erfan">Erfan</option>
                        <option value="Eric">Eric</option>
                    </select>
                    {!loading && <button >Add Blog</button>}
                    {loading && <button disabled >Adding Blog ...</button>}
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>

                </form>
            </div>

        </>

    )
}

export default Create