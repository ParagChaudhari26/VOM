import React from 'react'
import Header from './Header'

const DonorDashboard = () => {
  const stats = [
    {
      title: 'Total Donated',
      value: '₹22,000',
      color: 'text-orange-500',
      icon: '❤️'
    },
    {
      title: 'Donations This Year',
      value: '5',
      color: 'text-blue-600',
      icon: '📅'
    },
    {
      title: 'Tax Savings (80G)',
      value: '₹11,000',
      color: 'text-green-500',
      icon: '📄'
    },
    {
      title: 'Lives Impacted',
      value: '220+',
      color: 'text-purple-500',
      icon: '📈'
    }
  ]

  const donationHistory = [
    {
      date: '15 Jan 2024',
      transactionId: 'TXN1738383087001',
      cause: 'Gaushala Care',
      amount: '₹5,000',
      status: 'Allocated',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      date: '20 Feb 2024',
      transactionId: 'TXN1738383087002',
      cause: 'Education Support',
      amount: '₹2,500',
      status: 'Allocated',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      date: '10 Mar 2024',
      transactionId: 'TXN1738383087003',
      cause: 'Healthcare Services',
      amount: '₹10,000',
      status: 'In Progress',
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      date: '25 Mar 2024',
      transactionId: 'TXN1738383087004',
      cause: 'Women Empowerment',
      amount: '₹3,000',
      status: 'Allocated',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      date: '5 Apr 2024',
      transactionId: 'TXN1738383087005',
      cause: 'General Donation',
      amount: '₹1,500',
      status: 'Allocated',
      statusColor: 'bg-green-100 text-green-700'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Donor Dashboard</h1>
            <p className="text-gray-600">Track your donations and their impact</p>
          </div>

          {/* Summary Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="text-gray-600 text-sm mb-2">{stat.title}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="absolute top-4 right-4 text-2xl">{stat.icon}</div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Fund Distribution Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-6">Fund Distribution by Cause</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Donut Chart Placeholder */}
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    {/* Gaushala Care - Light Green */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#86efac"
                      strokeWidth="20"
                      strokeDasharray={`${25.5 * 3.14159} ${100 * 3.14159}`}
                    />
                    {/* Education - Yellow */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#fde047"
                      strokeWidth="20"
                      strokeDasharray={`${20 * 3.14159} ${100 * 3.14159}`}
                      strokeDashoffset={-25.5 * 3.14159}
                    />
                    {/* General - Red */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f87171"
                      strokeWidth="20"
                      strokeDasharray={`${15 * 3.14159} ${100 * 3.14159}`}
                      strokeDashoffset={-45.5 * 3.14159}
                    />
                    {/* Healthcare - Dark Blue */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="20"
                      strokeDasharray={`${25 * 3.14159} ${100 * 3.14159}`}
                      strokeDashoffset={-60.5 * 3.14159}
                    />
                    {/* Women Empowerment - Orange */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#fb923c"
                      strokeWidth="20"
                      strokeDasharray={`${14.5 * 3.14159} ${100 * 3.14159}`}
                      strokeDashoffset={-85.5 * 3.14159}
                    />
                  </svg>
                </div>
                {/* Legend */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-300"></div>
                    <span className="text-sm text-gray-700">Gaushala Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    <span className="text-sm text-gray-700">Education</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-400"></div>
                    <span className="text-sm text-gray-700">General</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-gray-700">Healthcare</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                    <span className="text-sm text-gray-700">Women Empowerment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Donation Trend */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-6">Monthly Donation Trend</h2>
              <div className="h-64 flex items-end justify-between gap-2">
                {[
                  { month: 'Jan', value: 4000 },
                  { month: 'Feb', value: 2000 },
                  { month: 'Mar', value: 13000 },
                  { month: 'Apr', value: 1500 },
                  { month: 'May', value: 0 },
                  { month: 'Jun', value: 0 }
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex items-end justify-center mb-2">
                      <div
                        className="w-full bg-orange-500 rounded-t transition-all duration-300 hover:bg-orange-600"
                        style={{ height: `${(item.value / 14000) * 100}%`, minHeight: item.value > 0 ? '4px' : '0' }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0</span>
                <span>3500</span>
                <span>7000</span>
                <span>10500</span>
                <span>14000</span>
              </div>
            </div>
          </div>

          {/* Donation History Table */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-blue-900">Donation History</h2>
              <div className="flex gap-3">
                <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                  <option>2024</option>
                </select>
                <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50">
                  <span>🔽</span> Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Transaction ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Cause</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {donationHistory.map((donation, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-700">{donation.date}</td>
                      <td className="py-4 px-4 text-sm text-gray-700 font-mono">{donation.transactionId}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">{donation.cause}</td>
                      <td className="py-4 px-4 text-sm font-semibold text-gray-900">{donation.amount}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${donation.statusColor}`}>
                          {donation.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                            <span>👁️</span> View
                          </button>
                          <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-1">
                            <span>⬇️</span> Receipt
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
              Make Another Donation
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
              <span>⬇️</span> Download Annual Report
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center gap-2">
              <span>📄</span> Tax Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonorDashboard

