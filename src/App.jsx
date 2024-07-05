import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home';
import SetTime from './pages/SetTime';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/listen" element={<SetTime />} />
      </Routes>
    </Router>
  )
}

export default App