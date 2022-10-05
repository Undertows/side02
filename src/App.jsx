import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Mood from './components/Mood'
import Memories from './pages/Memories'
import Loginput from './components/Loginput'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mood' element={<Mood/>}/>
        <Route path='/memories' element={<Memories/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}
