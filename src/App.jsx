import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DonateNow from './components/DonateNow'
import CauseDetail from './components/CauseDetail'
import DonorDashboardPage from './pages/DonorDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/cause/:causeId" element={<CauseDetail />} />
        <Route path="/dashboard" element={<DonorDashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App

