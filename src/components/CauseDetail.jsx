import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const causeData = {
  'gaushala-care': {
    title: 'Gaushala Care',
    subtitle: 'Support cow protection and care at our Gaushala. Provide shelter, food, and medical care for rescued cows.',
    description: [
      'Our Gaushala is home to over 150 cows, providing them with shelter, nutritious food, and medical care. Many of these cows are rescued from abandonment or injury. Your donation helps us maintain this sacred space where these gentle beings can live with dignity and care.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of beneficiaries.'
    ],
    supporters: 142,
    stats: [
      { value: '150+', label: 'Cows Protected' },
      { value: '₹85,000', label: 'Monthly Feed Cost' },
      { value: '45/month', label: 'Medical Treatments' }
    ],
    bannerImage: 'https://kdham.com/wp-content/uploads/2023/02/Gaushala-kdham.jpg'
  },
  'education-support': {
    title: 'Education Support',
    subtitle: 'Provide quality education, books, and learning materials to underprivileged children in rural areas.',
    description: [
      'We partner with 12 schools in rural areas to provide quality education to underprivileged children. Your support helps us provide books, uniforms, educational materials, and skilled teachers. Together, we\'re breaking the cycle of poverty through education.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of beneficiaries.'
    ],
    supporters: 142,
    stats: [
      { value: '320', label: 'Students Supported' },
      { value: '12', label: 'Schools Partnered' },
      { value: '1,250', label: 'Books Distributed' }
    ],
    bannerImage: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?w=1920&q=80'
  },
  'healthcare-services': {
    title: 'Healthcare Services',
    subtitle: 'Provide free medical care, medicines, and health camps for rural communities and elderly.',
    description: [
      'Our healthcare initiative provides free medical services to rural communities where healthcare access is limited. We conduct regular health camps, provide medicines, and ensure that basic healthcare reaches every doorstep.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of beneficiaries.'
    ],
    supporters: 142,
    stats: [
      { value: '2,800+', label: 'Patients Treated' },
      { value: '24/year', label: 'Health Camps' },
      { value: '35', label: 'Villages Covered' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1722235625805-ea64de92983d?w=1920&q=80'
  },
  'women-empowerment': {
    title: 'Women Empowerment',
    subtitle: 'Support skill development, vocational training, and economic independence for women.',
    description: [
      'We provide vocational training and skill development programs to women from underprivileged backgrounds, helping them gain financial independence and create sustainable livelihood opportunities. Our goal is to make women economically independent and confident contributors to society.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of beneficiaries.'
    ],
    supporters: 142,
    stats: [
      { value: '185', label: 'Women Trained' },
      { value: '8', label: 'Skills Programs' },
      { value: '92', label: 'Employment Generated' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1709109566592-2762ab28f207?w=1920&q=80'
  },
  'agriculture-development': {
    title: 'Agriculture Development',
    subtitle: 'Support sustainable farming practices, provide seeds, and farming equipment to rural farmers.',
    description: [
      'Our agriculture development initiative supports sustainable farming practices by providing seeds, farming equipment, and training to rural farmers. We help improve crop yields and farmer livelihoods through modern techniques and organic farming methods.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is making a difference in the lives of beneficiaries.'
    ],
    supporters: 142,
    stats: [
      { value: '320+', label: 'Farmers Supported' },
      { value: '15', label: 'Villages Covered' },
      { value: '₹2.5L', label: 'Equipment Provided' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1542911882-c7100ccf771b?w=1920&q=80'
  },
  'disaster-relief': {
    title: 'Disaster Relief',
    subtitle: 'Emergency response and relief activities during natural disasters and humanitarian crises.',
    description: [
      'Our disaster relief initiative provides immediate emergency response and relief activities during natural disasters and humanitarian crises. We ensure rapid aid reaches affected communities with food, shelter, and medical supplies.',
      'Every rupee donated is tracked transparently and used efficiently to maximize impact. We provide regular updates on how your contribution is helping communities recover from disasters.'
    ],
    supporters: 142,
    stats: [
      { value: '5,200+', label: 'People Helped' },
      { value: '12', label: 'Relief Operations' },
      { value: '₹15L', label: 'Relief Distributed' }
    ],
    bannerImage: 'https://images.unsplash.com/photo-1738743610025-6ebe3e13f7b4?w=1920&q=80'
  }
}

const CauseDetail = () => {
  const { causeId } = useParams()
  const [selectedAmount, setSelectedAmount] = useState(null)
  const cause = causeData[causeId]

  if (!cause) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <Header />
        <div className="pt-24 pb-12 px-5 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cause Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">Back to Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const quickAmounts = [500, 1000, 5000]

  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <Header />
        
        {/* Back Button Bar */}
        <div className="bg-white border-b border-orange-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 text-blue-800 hover:bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2" aria-hidden="true">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Causes
            </Link>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative h-[50vh] overflow-hidden">
          <img src={cause.bannerImage} alt={cause.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{cause.title}</h1>
              <p className="text-lg text-gray-200 max-w-3xl">{cause.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - About & Stats */}
            <div className="lg:col-span-2">
              {/* About This Cause Card */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border mb-8">
                <div className="[&:last-child]:pb-6 p-8">
                  <h2 className="text-2xl font-serif text-blue-800 mb-6">About This Cause</h2>
                  <div className="prose prose-gray max-w-none">
                    {cause.description.map((para, index) => (
                      <p key={index} className="text-gray-700 mb-4">{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Statistics Card */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
                <div className="[&:last-child]:pb-6 p-8">
                  <h3 className="text-xl font-serif text-blue-800 mb-6">Impact Statistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cause.stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Donation Card */}
            <div className="lg:col-span-1">
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded border sticky top-24">
                <div className="[&:last-child]:pb-6 p-6">
                  {/* Supporters & Status */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4 mr-2 text-orange-600" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      <span>{cause.supporters} supporters</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-4 h-4 mr-2 text-blue-600" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                      <span>Ongoing support needed</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-4 h-4 mr-2 text-green-600" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      <span>Active campaign</span>
                    </div>
                  </div>

                  {/* Proceed to Donate Button */}
                  <div className="space-y-3">
                    <Link
                      to="/donate"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[>svg]:px-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-3"
                    >
                      Proceed to Donate
                    </Link>

                    {/* Quick Amount Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                      {quickAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border-orange-200 text-orange-700 hover:bg-orange-50 ${selectedAmount === amount ? 'bg-orange-100' : ''}`}
                        >
                          ₹{amount.toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default CauseDetail
