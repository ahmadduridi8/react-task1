import React from 'react'
import Navbar from './components/Navbar.jsx'
import Text  from './components/Text.jsx'
import TaskCards from './components/TaskCards.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'


export default function  () {
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/TaskCards" element={<TaskCards/>}></Route>
        <Route path="/Text" element={<Text/>}></Route>
        <Route path="*" element={<h2>page not found</h2>}></Route>
      </Routes>
      
      
    </>
  )
}
