import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Products from './components/Products'
export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <section className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </section>
      </Router>
    </div>
  )
}
