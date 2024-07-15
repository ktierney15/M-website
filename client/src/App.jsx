import { React } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from './components/Footer'

import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"
// import './App.css'

function App() {
  return (
    <>
      <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="services" element={<Services />} />
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