import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import SignIn from './assets/SignIn'
import SignUp from './assets/SignUp'
import Profile from './assets/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
