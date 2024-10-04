import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'
import JobOverview from './pages/JobOverview'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path='/overview' element={<JobOverview/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
