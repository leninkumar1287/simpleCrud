import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './Home'
export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <section className='container'>
          <Routes>
            <Route path='/' component={<Home />} />
          </Routes>

        </section>
      </Router>
    </div>
  )
}
