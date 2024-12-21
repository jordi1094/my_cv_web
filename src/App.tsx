import React, {useState, useEffect} from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import AboutMe from './pages/AboutMe'


function App() {

  return (
    <Routes>
      <Route path='/' element={<AboutMe/>}/>
    </Routes>
  )
}

export default App
