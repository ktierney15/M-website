import { React } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from './components/Footer'

import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Schedule from "./pages/Schedule"
// import './App.css'

function App() {
  return (
    <>
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App