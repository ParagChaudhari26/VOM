import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'

// Cause data configuration
const causeData = {
  'gaushala-care': {
    title: 'Gaushala Care',
    subtitle: 'Support cow protection and care at our Gaushala. Provide shelter, food, and medical care for rescued cows.',
    description: [
      'Our Gaushala initiative provides shelter and care for rescued and abandoned cows. We ensure proper nutrition, medical attention, and a safe environment for these gentle animals.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of these animals.'
    ],
    supporters: 89,
    status: 'Ongoing support needed',
    campaignStatus: 'Active campaign',
    stats: [
      { value: '150+', label: 'Cows Sheltered' },
      { value: '12/year', label: 'Rescue Operations' },
      { value: '25', label: 'Villages Served' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80',
    icon: '🐄'
  },
  'education-support': {
    title: 'Education Support',
    subtitle: 'Provide quality education, books, and learning materials to underprivileged children in rural areas.',
    description: [
      'Our education initiative provides free educational resources, books, and learning materials to underprivileged children in rural areas where access to quality education is limited.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of students.'
    ],
    supporters: 156,
    status: 'Ongoing support needed',
    campaignStatus: 'Active campaign',
    stats: [
      { value: '1,200+', label: 'Students Helped' },
      { value: '18/year', label: 'School Programs' },
      { value: '42', label: 'Schools Supported' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
    icon: '📚'
  },
  'healthcare-services': {
    title: 'Healthcare Services',
    subtitle: 'Provide free medical care, medicines, and health camps for rural communities and elderly.',
    description: [
      'Our healthcare initiative provides free medical services to rural communities where healthcare access is limited. We conduct regular health camps, provide medicines, and ensure that basic healthcare reaches every doorstep.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of beneficiaries.'
    ],
    supporters: 142,
    status: 'Ongoing support needed',
    campaignStatus: 'Active campaign',
    stats: [
      { value: '2,800+', label: 'Patients Treated' },
      { value: '24/year', label: 'Health Camps' },
      { value: '35', label: 'Villages Covered' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80',
    icon: '🏥'
  },
  'women-empowerment': {
    title: 'Women Empowerment',
    subtitle: 'Support skill development, vocational training, and economic independence for women.',
    description: [
      'Our women empowerment initiative provides skill development programs, vocational training, and support for economic independence. We help women gain financial freedom and confidence.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of women.'
    ],
    supporters: 203,
    status: 'Ongoing support needed',
    campaignStatus: 'Active campaign',
    stats: [
      { value: '850+', label: 'Women Trained' },
      { value: '15/year', label: 'Training Programs' },
      { value: '28', label: 'Communities Reached' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1521737605893-282e0a29384a?w=1920&q=80',
    icon: '👩'
  },
  'agriculture-development': {
    title: 'Agriculture Development',
    subtitle: 'Support sustainable farming practices, provide seeds, and farming equipment to rural farmers.',
    description: [
      'Our agriculture development initiative supports sustainable farming practices by providing seeds, farming equipment, and training to rural farmers. We help improve crop yields and farmer livelihoods.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in agricultural communities.'
    ],
    supporters: 178,
    status: 'Ongoing support needed',
    campaignStatus: 'Active campaign',
    stats: [
      { value: '320+', label: 'Farmers Supported' },
      { value: '20/year', label: 'Training Sessions' },
      { value: '18', label: 'Farming Communities' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
    icon: '🌾'
  },
  'disaster-relief': {
    title: 'Disaster Relief',
    subtitle: 'Emergency response and relief activities during natural disasters and humanitarian crises.',
    description: [
      'Our disaster relief initiative provides immediate emergency response and relief activities during natural disasters and humanitarian crises. We ensure rapid aid reaches affected communities.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is helping communities recover from disasters.'
    ],
    supporters: 267,
    status: 'Ongoing support needed',
    campaignStatus: 'Active campaign',
    stats: [
      { value: '5,200+', label: 'People Helped' },
      { value: '12/year', label: 'Relief Operations' },
      { value: '45', label: 'Disaster Sites' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80',
    icon: '🚨'
  }
}

const CauseDetail = () => {
  const { causeId } = useParams()
  const [selectedAmount, setSelectedAmount] = useState(null)
  const cause = causeData[causeId]

  if (!cause) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-12 px-5 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cause Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const quickAmounts = [500, 1000, 5000]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Link */}
      <div className="pt-24 pb-4 px-5">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium">
            <span>←</span> Back to Causes
          </Link>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${cause.bannerImage})`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Medical/Theme Icons Overlay */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-5 w-full">
            <div className="flex items-center gap-8">
              {/* Large Icon */}
              <div className="text-8xl md:text-9xl opacity-30">{cause.icon}</div>
              
              {/* Text Content */}
              <div className="text-white flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{cause.title}</h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl">{cause.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-5 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* About This Cause Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">About This Cause</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {cause.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Campaign Status Card */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-orange-500">
                <span className="text-2xl">👥</span>
                <span className="font-semibold">{cause.supporters} supporters</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <span className="text-xl">🎯</span>
                <span className="text-sm">{cause.status}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-xl">📈</span>
                <span className="text-sm">{cause.campaignStatus}</span>
              </div>
            </div>
            
            <Link
              to="/donate"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 block text-center mb-4"
            >
              Proceed to Donate
            </Link>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-600 mb-2">Quick Donate:</p>
              <div className="grid grid-cols-3 gap-2">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 ${
                      selectedAmount === amount
                        ? 'bg-orange-500 text-white'
                        : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                    }`}
                  >
                    ₹{amount.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Impact Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cause.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CauseDetail

