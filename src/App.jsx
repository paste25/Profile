import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
function App() {

  return (
    <main className="text-white mb-8 md:mb-0">
     <BrowserRouter>
    <Navbar></Navbar>
    <div className="flex justify-center items-center mt-10">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
  </div>
  </BrowserRouter>
  </main>
  )
}

export default App
