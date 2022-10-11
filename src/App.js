import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import AddNewProducts from './components/AddNewProducts'
export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <section className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/addproduct' element={<AddNewProducts />} />
          </Routes>
        </section>
      </Router>
    </div>
  )
}
