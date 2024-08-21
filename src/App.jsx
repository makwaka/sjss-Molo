import React from 'react'
import './App.css'
import Header from './Header'
import HomePage from './HomePage'
import About from './About'
import Resources from './Resources'
import Gallery from './Gallery'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/'  element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="resources" element={<Resources />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
