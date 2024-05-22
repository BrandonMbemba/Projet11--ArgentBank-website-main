import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './components/header.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Signin.jsx'
import Profile from '../pages/Profile.jsx'
import '../sass/index.scss'
import Footer from './components/footer.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App () {
  const isConnected = useSelector((state) => state.auth.isConnected);


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route 
                    path='profile' 
                    element={isConnected ? <Profile /> : <Navigate to="/signin" />} 
                />
      </Routes>
      <Footer />
    </div>
  )
}
