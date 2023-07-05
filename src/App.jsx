import Navbar from './Navbar'
import Home from './Home'

import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
       <div className="App">
         <Navbar></Navbar>
         <div className="content">
           <Home></Home>
         </div>
       </div>
     </BrowserRouter>
    </>
  )
}

export default App
