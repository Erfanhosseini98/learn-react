// import { Link } from "react-router-dom"
// import useFetch from "./useFetch"
import { useSelector, useDispatch } from "react-redux"


const BlogList = ({ title }) => {

  // const { data: authors, loading: authorsLoading, error: authorsError } = useFetch('http://localhost:8000/authors')
  const blogs = useSelector((state) => state.MyBlogs.blogs)
  const loading = useSelector((state) => state.MyBlogs.loading)
  const dispatch = useDispatch()
  const clickMe = () => {
    dispatch.MyBlogs.fillBlogsEffect()
  }


  return (
    <>
      <h3>{title}</h3>
      <div className="blog-list">
        <p onClick={clickMe}>Click</p>
        {console.log(blogs,loading)}
      </div>
    </>
  )
}

export default BlogList


