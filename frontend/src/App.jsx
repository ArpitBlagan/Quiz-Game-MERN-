import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./pages/Navbar"
import Register from "./pages/Register"
import Scoreboard from "./pages/Scoreboard"
import Test from "./pages/Test"
import Progress from "./pages/Progress"
import Form from "./pages/Form"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Uploads from "./pages/Uploads"
function App() {
  return (
    <Router><Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/board" element={<Scoreboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/uploads" element={<Uploads/>}/>
        <Route path="/form" element={<Form/>}/>
        </Routes>
        <div class="font-mono text-white bg-gray-800 p-6 text-center  bottom-0 w-full">
          <span>© 2023 Copyright: </span>
          <a
            class="underline text-semibold "
            href="https://www.linkedin.com/in/arpit-blagan-79081b193/"
            >Arpit Blagan</a>
        </div>
    </Router>
  )
}

export default App
