import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import BlogDetail from "./pages/BlogDetail"
import NotFound from "./pages/NotFound"
import EditPost from "./pages/EditPost"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <div className="content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="Create" element={< Create />}></Route>
              <Route path="Blog/:id" element={< BlogDetail />}></Route>
              <Route path="*" element={< NotFound />}></Route>
              <Route path="EditBlog/:id" element={< EditPost />}></Route>

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
