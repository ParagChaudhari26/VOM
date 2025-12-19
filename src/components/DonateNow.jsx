import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const DonateNow = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    panNumber: '',
    address: '',
    state: '',
    pinCode: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const steps = [
    { number: 1, label: 'Personal Info' },
    { number: 2, label: 'Donation Details' },
    { number: 3, label: 'Payment' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <span>←</span> Back
          </Link>

          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Make a Donation</h1>
            <p className="text-gray-600">Your contribution helps us serve the community better.</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 max-w-2xl">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step.number
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-2 text-sm ${
                      currentStep >= step.number ? 'text-orange-500 font-semibold' : 'text-gray-500'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      currentStep > step.number ? 'bg-orange-500' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Panel - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {currentStep === 1 && (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Personal Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Enter mobile number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PAN Number <span className="text-gray-400 text-xs">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="panNumber"
                          value={formData.panNumber}
                          onChange={handleChange}
                          placeholder="Enter PAN number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your address"
                          rows="3"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            State
                          </label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          >
                            <option value="">Select state</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="gujarat">Gujarat</option>
                            <option value="tamil-nadu">Tamil Nadu</option>
                            <option value="delhi">Delhi</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            PIN Code
                          </label>
                          <input
                            type="text"
                            name="pinCode"
                            value={formData.pinCode}
                            onChange={handleChange}
                            placeholder="Enter PIN code"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Donation Details</h2>
                    <p className="text-gray-600">Step 2 content will go here</p>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Payment</h2>
                    <p className="text-gray-600">Step 3 content will go here</p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-2 rounded-lg font-semibold border-2 transition-colors duration-300 ${
                      currentStep === 1
                        ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                        : 'border-orange-500 text-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentStep === 3}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                      currentStep === 3
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {currentStep === 3 ? 'Complete' : 'Next'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Donation Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <span className="text-red-500">❤️</span> Donation Summary
                </h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Cause:</p>
                    <p className="text-base font-medium text-gray-800">Not selected</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Amount:</p>
                    <p className="text-base font-medium text-gray-800">₹0</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Total:</p>
                    <p className="text-2xl font-bold text-orange-500">₹0</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Tax Benefit</h3>
                  <p className="text-sm text-green-700">
                    This donation is eligible for 80G tax deduction. You will receive a tax receipt via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateNow

