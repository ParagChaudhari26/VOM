import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const DonateNow = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    panNumber: '',
    address: '',
    state: '',
    pinCode: '',
    cause: '',
    amount: '',
    customAmount: '',
    paymentMethod: ''
  })

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ]

  const causes = [
    'Gaushala Care', 'Education Support', 'Healthcare Services',
    'Women Empowerment', 'Agriculture Development', 'Disaster Relief',
    'General Donation', 'Annadaan (Food Distribution)'
  ]

  const quickAmounts = [500, 1000, 2500, 5000, 10000]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isStep1Valid = () => formData.fullName.trim() !== '' && formData.mobileNumber.trim() !== '' && formData.email.trim() !== ''
  const isStep2Valid = () => formData.cause !== '' && (formData.amount !== '' || formData.customAmount !== '')
  const isStep3Valid = () => formData.paymentMethod !== ''

  const canProceed = () => {
    if (currentStep === 1) return isStep1Valid()
    if (currentStep === 2) return isStep2Valid()
    if (currentStep === 3) return isStep3Valid()
    return false
  }

  const handleNext = () => { if (currentStep < 3 && canProceed()) setCurrentStep(currentStep + 1) }
  const handlePrevious = () => { if (currentStep > 1) setCurrentStep(currentStep - 1) }

  const getSelectedAmount = () => {
    if (formData.customAmount) return formData.customAmount
    if (formData.amount) return formData.amount
    return '0'
  }

  const handlePayNow = () => {
    const txnId = 'TXN' + Date.now()
    setTransactionId(txnId)
    setShowSuccess(true)
  }

  const handleDonateAgain = () => {
    setShowSuccess(false)
    setCurrentStep(1)
    setFormData({
      fullName: '', mobileNumber: '', email: '', panNumber: '', address: '',
      state: '', pinCode: '', cause: '', amount: '', customAmount: '', paymentMethod: ''
    })
  }

  const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const getImpactMessage = () => {
    const amount = parseInt(getSelectedAmount())
    if (formData.cause === 'Education Support') return `Your donation of ₹${amount.toLocaleString('en-IN')} can sponsor educational materials for ${Math.floor(amount/500)} children for a month.`
    if (formData.cause === 'Gaushala Care') return `Your donation of ₹${amount.toLocaleString('en-IN')} can provide food and care for ${Math.floor(amount/200)} cows for a week.`
    if (formData.cause === 'Healthcare Services') return `Your donation of ₹${amount.toLocaleString('en-IN')} can provide medical care for ${Math.floor(amount/300)} patients.`
    return `Your donation of ₹${amount.toLocaleString('en-IN')} will make a meaningful difference in the lives of those we serve.`
  }

  // Success Page
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-green-50">
        <Header />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Success Icon & Message */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-serif text-blue-800 mb-3">Thank You for Your Generous Donation!</h1>
              <p className="text-gray-600 text-sm max-w-xl mx-auto">Your contribution has been received successfully and will make a meaningful difference in the lives of those we serve. May your kindness return to you manifold.</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Donation Details Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-base font-serif text-blue-800 flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  Donation Details
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 flex items-center gap-2"><span className="text-gray-400">#</span> Transaction ID:</span>
                    <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded text-xs">{transactionId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 flex items-center gap-2"><span>📅</span> Date:</span>
                    <span className="font-medium text-gray-800">{getCurrentDate()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Cause:</span>
                    <span className="font-medium text-gray-800">{formData.cause}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 flex items-center gap-2"><span>💳</span> Amount:</span>
                    <span className="font-semibold text-green-600 text-lg">₹{parseInt(getSelectedAmount()).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Status:</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Success</span>
                  </div>
                </div>
              </div>

              {/* Next Steps Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-base font-medium text-gray-800 mb-4">Next Steps</h3>
                <div className="space-y-3 mb-6">
                  <button className="w-full flex items-center gap-3 bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors">
                    <span>⬇️</span> Download Receipt (PDF)
                  </button>
                  <button className="w-full flex items-center gap-3 text-orange-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors">
                    <span>👁️</span> Track Fund Allocation
                  </button>
                  <Link to="/" className="w-full flex items-center gap-3 text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    <span>🏠</span> Back to Home
                  </Link>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-orange-700 font-medium text-sm mb-2">Important Information</p>
                  <ul className="text-orange-600 text-xs space-y-1">
                    <li>• Tax receipt will be emailed within 24 hours</li>
                    <li>• This donation is eligible for 80G tax deduction</li>
                    <li>• You can track fund usage in your donor dashboard</li>
                    <li>• Receipt is valid for IT returns filing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Impact Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-xl font-serif text-blue-800 text-center mb-4">Your Impact</h3>
              <p className="text-gray-600 text-center text-sm mb-4">{getImpactMessage()}</p>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <p className="text-orange-700 italic text-sm">"The best way to find yourself is to lose yourself in the service of others." <span className="font-medium">— Mahatma Gandhi</span></p>
              </div>
            </div>

            {/* Share Section */}
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-4">Want to make an even bigger impact? Share this with your friends and family.</p>
              <div className="flex justify-center gap-4">
                <button onClick={handleDonateAgain} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">Donate Again</button>
                <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">Share on Social Media</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-orange-50/50">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-4 text-sm">← Back</Link>
          <h1 className="text-3xl font-serif text-blue-800 mb-1">Make a Donation</h1>
          <p className="text-gray-500 text-sm mb-8">Your contribution helps us serve the community better.</p>

          {/* Progress Steps */}
          <div className="flex items-center mb-10 max-w-xl">
            <div className="flex items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'border-2 border-gray-300 text-gray-400'}`}>1</div>
              <span className={`ml-2 text-sm ${currentStep >= 1 ? 'text-orange-500' : 'text-gray-400'}`}>Personal Info</span>
            </div>
            <div className={`flex-1 h-px mx-4 ${currentStep > 1 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
            <div className="flex items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${currentStep >= 2 ? 'bg-orange-500 text-white' : 'border-2 border-gray-300 text-gray-400'}`}>2</div>
              <span className={`ml-2 text-sm ${currentStep >= 2 ? 'text-orange-500' : 'text-gray-400'}`}>Donation Details</span>
            </div>
            <div className={`flex-1 h-px mx-4 ${currentStep > 2 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
            <div className="flex items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${currentStep >= 3 ? 'bg-orange-500 text-white' : 'border-2 border-gray-300 text-gray-400'}`}>3</div>
              <span className={`ml-2 text-sm ${currentStep >= 3 ? 'text-orange-500' : 'text-gray-400'}`}>Payment</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                {/* Step 1 */}
                {currentStep === 1 && (
                  <>
                    <h2 className="text-xl font-serif text-blue-800 mb-8">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-orange-500">*</span></label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" className="w-full h-11 px-4 bg-gray-100 border-0 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number <span className="text-orange-500">*</span></label>
                        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter mobile number" className="w-full h-11 px-4 bg-gray-100 border-0 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-orange-500">*</span></label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" className="w-full h-11 px-4 bg-gray-100 border-0 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number (Optional)</label>
                        <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="Enter PAN number" className="w-full h-11 px-4 bg-gray-100 border-0 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" rows="3" className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                        <select name="state" value={formData.state} onChange={handleChange} className="w-full h-11 px-4 bg-gray-100 border-0 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                          <option value="">Select state</option>
                          {indianStates.map((state) => (<option key={state} value={state}>{state}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="Enter PIN code" className="w-full h-11 px-4 bg-gray-100 border-0 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <>
                    <h2 className="text-xl font-serif text-blue-800 mb-8">Donation Details</h2>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Cause <span className="text-orange-500">*</span></label>
                      <select 
                        name="cause" 
                        value={formData.cause} 
                        onChange={handleChange}
                        className="w-full h-11 px-4 bg-gray-100 border-0 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 appearance-none cursor-pointer"
                      >
                        <option value="">Choose a cause to support</option>
                        {causes.map((cause) => (
                          <option key={cause} value={cause}>{cause}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount <span className="text-orange-500">*</span></label>
                      <div className="flex flex-wrap gap-3 mb-4">
                        {quickAmounts.map((amt) => (
                          <button key={amt} type="button" onClick={() => setFormData({ ...formData, amount: amt.toString(), customAmount: '' })}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${formData.amount === amt.toString() && !formData.customAmount ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-orange-500 border-orange-300 hover:border-orange-500'}`}>
                            ₹{amt.toLocaleString('en-IN')}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                        <input type="number" name="customAmount" value={formData.customAmount} onChange={(e) => setFormData({ ...formData, customAmount: e.target.value, amount: '' })} placeholder="Enter custom amount" className="w-full h-11 pl-8 pr-4 bg-gray-100 border-0 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                  <>
                    <h2 className="text-xl font-serif text-blue-800 mb-6">Payment Method</h2>
                    <p className="text-sm font-medium text-gray-700 mb-4">Select Payment Method <span className="text-orange-500">*</span></p>
                    <div className="space-y-3 mb-6">
                      {[
                        { id: 'upi', label: 'UPI Payment', icon: '📱' },
                        { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                        { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                        { id: 'wallet', label: 'Wallet', icon: '👛' }
                      ].map((method) => (
                        <label key={method.id}
                          className={`flex items-center p-4 rounded-lg cursor-pointer transition-all border-2 ${formData.paymentMethod === method.id ? 'bg-orange-50 border-orange-500' : 'bg-gray-50 border-transparent hover:bg-gray-100'}`}>
                          <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={handleChange} className="w-4 h-4 text-orange-500 focus:ring-orange-500" />
                          <span className="ml-3 text-lg">{method.icon}</span>
                          <span className="ml-2 text-sm font-medium text-gray-700">{method.label}</span>
                        </label>
                      ))}
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                      <span className="text-blue-500">🔒</span>
                      <div>
                        <p className="text-blue-800 font-medium text-sm">Secure Payment</p>
                        <p className="text-blue-600 text-xs">Your payment information is encrypted and secure. We use industry-standard security measures to protect your data.</p>
                      </div>
                    </div>
                  </>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-6">
                  <button onClick={handlePrevious} disabled={currentStep === 1}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-white hover:bg-orange-50 h-9 px-4 py-2 border-orange-200 text-orange-700">
                    Previous
                  </button>
                  <button onClick={currentStep === 3 ? handlePayNow : handleNext} disabled={!canProceed()}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-6 py-2 text-white ${canProceed() ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-300 cursor-not-allowed'}`}>
                    {currentStep === 3 ? 'Pay Now' : 'Next'}
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-base font-serif text-blue-800 flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  Donation Summary
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Cause:</span><span className="font-medium text-gray-800">{formData.cause || 'Not selected'}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Amount:</span><span className="font-medium text-gray-800">₹{getSelectedAmount()}</span></div>
                </div>
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <div className="flex justify-between items-center"><span className="font-medium text-gray-700">Total:</span><span className="text-xl font-semibold text-orange-500">₹{getSelectedAmount()}</span></div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mt-5">
                  <p className="text-green-700 font-medium text-sm mb-1">Tax Benefit</p>
                  <p className="text-green-600 text-xs leading-relaxed">This donation is eligible for 80G tax deduction. You will receive a tax receipt via email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DonateNow
