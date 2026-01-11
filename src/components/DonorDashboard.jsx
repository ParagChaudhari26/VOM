import React, { useState } from 'react';
import { 
  Heart, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Eye, 
  Download, 
  Filter,
  ChevronDown 
} from 'lucide-react';

const DonorDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showFilter, setShowFilter] = useState(false);

  // Sample donation data
  const donationHistory = [
    {
      id: 1,
      date: '15 Jan 2024',
      transactionId: 'TXN173838007001',
      cause: 'Gaushala Care',
      amount: 5000,
      status: 'Allocated'
    },
    {
      id: 2,
      date: '20 Feb 2024',
      transactionId: 'TXN173838007002',
      cause: 'Education Support',
      amount: 2500,
      status: 'Allocated'
    },
    {
      id: 3,
      date: '10 Mar 2024',
      transactionId: 'TXN173838007003',
      cause: 'Healthcare Services',
      amount: 10000,
      status: 'In Progress'
    },
    {
      id: 4,
      date: '25 Mar 2024',
      transactionId: 'TXN173838007004',
      cause: 'Women Empowerment',
      amount: 3000,
      status: 'Allocated'
    },
    {
      id: 5,
      date: '5 Apr 2024',
      transactionId: 'TXN173838007005',
      cause: 'General Donation',
      amount: 1500,
      status: 'Allocated'
    }
  ];

  // Dashboard stats
  const stats = [
    {
      title: 'Total Donated',
      value: '₹22,000',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Donations This Year',
      value: '5',
      icon: Calendar,
      color: 'text-blue-500'
    },
    {
      title: 'Tax Savings (80G)',
      value: '₹11,000',
      icon: FileText,
      color: 'text-green-500'
    },
    {
      title: 'Lives Impacted',
      value: '220+',
      icon: TrendingUp,
      color: 'text-purple-500'
    }
  ];

  // Chart data for fund distribution
  const fundDistribution = [
    { cause: 'Healthcare', percentage: 45, color: 'bg-slate-600' },
    { cause: 'Education', percentage: 25, color: 'bg-orange-500' },
    { cause: 'Women Empowerment', percentage: 15, color: 'bg-green-500' },
    { cause: 'Gaushala Care', percentage: 15, color: 'bg-yellow-500' }
  ];

  // Monthly trend data
  const monthlyTrend = [
    { month: 'Jan', amount: 5000 },
    { month: 'Feb', amount: 2500 },
    { month: 'Mar', amount: 13000 },
    { month: 'Apr', amount: 1500 },
    { month: 'May', amount: 0 },
    { month: 'Jun', amount: 0 }
  ];

  const maxAmount = Math.max(...monthlyTrend.map(item => item.amount));

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    if (status === 'Allocated') {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else if (status === 'In Progress') {
      return `${baseClasses} bg-yellow-100 text-yellow-800`;
    }
    return `${baseClasses} bg-gray-100 text-gray-800`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Donor Dashboard</h1>
          <p className="text-gray-600">Track your donations and their impact</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                    <IconComponent size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Fund Distribution Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Fund Distribution by Cause</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {fundDistribution.map((item, index) => {
                    const offset = fundDistribution.slice(0, index).reduce((sum, prev) => sum + prev.percentage, 0);
                    const circumference = 2 * Math.PI * 30;
                    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((offset / 100) * circumference);
                    
                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="30"
                        fill="none"
                        stroke={item.color.replace('bg-', '#')}
                        strokeWidth="12"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              {fundDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                    <span className="text-sm text-gray-600">{item.cause}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Donation Trend */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Donation Trend</h3>
            <div className="flex items-end justify-between h-64 mb-4">
              {monthlyTrend.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="bg-orange-500 rounded-t w-12 transition-all duration-300 hover:bg-orange-600"
                    style={{ 
                      height: `${(item.amount / maxAmount) * 200}px`,
                      minHeight: item.amount > 0 ? '20px' : '0px'
                    }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-2">{item.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>7000</span>
              <span>14000</span>
            </div>
          </div>
        </div>
        {/* Donation History */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-blue-600">Donation History</h3>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cause</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donationHistory.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {donation.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {donation.transactionId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {donation.cause}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ₹{donation.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadge(donation.status)}>
                        {donation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="inline-flex items-center px-3 py-1 text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </button>
                      <button className="inline-flex items-center px-3 py-1 text-green-600 hover:text-green-800">
                        <Download className="w-4 h-4 mr-1" />
                        Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Make Another Donation
              </button>
              <button className="flex items-center px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download Annual Report
              </button>
              <button className="flex items-center px-6 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                <FileText className="w-4 h-4 mr-2" />
                Tax Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;