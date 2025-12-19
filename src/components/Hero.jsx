import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=1920&q=80)'
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
            Support Siddhagiri Math
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-center">
            through <span className="text-orange-400">Transparent</span> Donations
          </p>
          <p className="text-white text-left text-lg leading-relaxed max-w-3xl">
            Your contribution helps in Gaushala care, Annadaan (food distribution), Education, Healthcare, Women Empowerment, Agriculture development, and Disaster Relief activities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

