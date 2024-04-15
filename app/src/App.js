import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
// import Foot er from './components/Footer'

import Home from "./pages/Home"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            {/* <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
            <Route path="about" element={<About />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
