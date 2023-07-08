import { Link } from "react-router-dom"


const BlogList = ({ blogs, title, handleDelete }) => {


  return (
    <>
      <h3>{title}</h3>
      <div className="blog-list">
        {
          blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`Blog/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <br />
                {handleDelete && <button onClick={() => handleDelete(blog.id)}>delete blog</button>}
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default BlogList


