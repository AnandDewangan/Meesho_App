import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import UserProfile from './components/UserProfile/UserProfile'
import MeeshoContext from './Context/meeshoContext'
import BuyNow from './components/BuyNow/BuyNow'

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <MeeshoContext.Provider value={
        {
          number: number,
          setNumber: setNumber
        }
      }>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/notfound' element={<NotFound />}/>
          <Route path='/userProfile' element={<UserProfile/>}/>
          <Route path='/buynow' element={<BuyNow/>}/>
        </Routes>
      </BrowserRouter>
      </MeeshoContext.Provider>
    </div>
  )
}
