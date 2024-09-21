import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PlacaCumple from '../pages/PlacaCumple'
import Navbar from '../common/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<PlacaCumple/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter