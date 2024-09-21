import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PlacaCumple from '../pages/PlacaCumple'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PlacaCumple/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter