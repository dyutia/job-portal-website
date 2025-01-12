
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-b from-emerald-600/20">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  )
}
