import React from 'react';
import Header from '../components/Header';
import DonorDashboard from '../components/DonorDashboard';
import Footer from '../components/Footer';

const DonorDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DonorDashboard />
      <Footer />
    </div>
  );
};

export default DonorDashboardPage;