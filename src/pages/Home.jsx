import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import OurCausesIntro from '../components/OurCausesIntro'
import CauseCards from '../components/CauseCards'
import Mission from '../components/Mission'
import Footer from '../components/Footer'

const Home = () => {
  // First set of causes
  const causes1 = [
    {
      id: 'gaushala-care',
      title: 'Gaushala Care',
      description: 'Support cow protection and care at our Gaushala. Provide shelter, food, and medical care for rescued cows.',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80'
    },
    {
      id: 'education-support',
      title: 'Education Support',
      description: 'Provide quality education, books, and learning materials to underprivileged children in rural areas.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
    },
    {
      id: 'healthcare-services',
      title: 'Healthcare Services',
      description: 'Provide free medical care, medicines, and health camps for rural communities and elderly.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80'
    }
  ]

  // Second set of causes
  const causes2 = [
    {
      id: 'women-empowerment',
      title: 'Women Empowerment',
      description: 'Support skill development, vocational training, and economic independence for women.',
      image: 'https://images.unsplash.com/photo-1521737605893-282e0a29384a?w=800&q=80'
    },
    {
      id: 'agriculture-development',
      title: 'Agriculture Development',
      description: 'Support sustainable farming practices, provide seeds, and farming equipment to rural farmers.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80'
    },
    {
      id: 'disaster-relief',
      title: 'Disaster Relief',
      description: 'Emergency response and relief activities during natural disasters and humanitarian crises.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80'
    }
  ]

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Statistics />
      <OurCausesIntro />
      <CauseCards causes={causes1} />
      <CauseCards causes={causes2} />
      <Mission />
      <Footer />
    </div>
  )
}

export default Home

