import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Mood from './components/Mood'
import Memories from './components/Memories'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mood' element={<Mood />}></Route>
        <Route path='/memories' element={<Memories />}></Route>
      </Routes>
    </Router>
  )
}
