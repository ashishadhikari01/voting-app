import React,{ useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import LandingLayout from "../components/LandingLayout"

function App() {
   
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout/>}>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

// https://www.figma.com/design/25kkLKI3Qsztcop084Xwqu/Online-Voting-System--Community-?node-id=4-16&t=eNyhJMQVHavWjz0k-0