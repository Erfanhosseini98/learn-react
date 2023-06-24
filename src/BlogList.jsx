
const BlogList = ({ blogs ,title}) => {
  // const blogs = props.blogs
  // const hello = props.hello
  // const {blogs,hello} = props
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
            </div>
          ))
        }
      </div>
    </>
  )
}

export default BlogList


