import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Mood from './components/Mood'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/mood' element={<Mood />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}
