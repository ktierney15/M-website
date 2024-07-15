import { React } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from './components/Footer'

import Home from "./pages/Home"
import Nutrition from "./pages/Nutrition"
import Fitness from "./pages/Fitness"
import Contact from "./pages/Contact"
import About from "./pages/About"

function App() {
  return (
    <>
      <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="nutrition" element={<Nutrition />} />
              <Route path="fitness" element={<Fitness />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
            </Routes>
          </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App