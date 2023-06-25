
const BlogList = ({ blogs ,title, handleDelete}) => {


  console.log(blogs)
  return (
    <>
    <h3>{title}</h3>
      <div className="blog-list">
        {
          blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <br />
              <button onClick={() => handleDelete(blog.id)}>delete blog</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default BlogList

