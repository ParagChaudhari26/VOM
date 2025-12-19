import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '🌐'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      icon: '🎨'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: '📱'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a wide range of services to meet your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-10 rounded-xl bg-gray-50 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

