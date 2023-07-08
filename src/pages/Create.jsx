import { useState } from "react"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Erfan')


    return (
        <>
            <div className="create" >
                <h2>Create a new blog post</h2>
                <form action="">

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
                    <button >
                        Add Blog
                    </button>
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>

                </form>
            </div>

        </>

    )
}

export default Create