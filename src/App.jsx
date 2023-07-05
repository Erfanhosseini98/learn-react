import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Navbar from './Navbar'
import Home from './pages/Home'
import Create from './pages/Create'

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
