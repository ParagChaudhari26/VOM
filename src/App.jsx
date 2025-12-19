import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DonorDashboard from './components/DonorDashboard'
import DonateNow from './components/DonateNow'
import CauseDetail from './components/CauseDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<DonorDashboard />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/cause/:causeId" element={<CauseDetail />} />
      </Routes>
    </Router>
  )
}

export default App

