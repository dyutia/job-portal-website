<<<<<<< HEAD
import React, { useState } from "react";
import JobLists from "./components/JobLists";
import PostJob from "./components/PostJob";
import JobListProvider from "./store/job-lists-store";
import Filter from "./components/Filter";
import JobHeader from "./components/JobHeader";

const App = () => {
	return <JobListProvider></JobListProvider>;
};

export default App;
=======
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-b from-emerald-600/20">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
>>>>>>> bf4b219cae034b9bd0de9ba351f70ef69989935f
