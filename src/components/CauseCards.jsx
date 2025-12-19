import React from 'react'
import { Link } from 'react-router-dom'

const CauseCards = ({ causes }) => {
  return (
    <section className="py-16 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  {cause.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cause.description}
                </p>
                <div className="flex gap-3">
                  <Link 
                    to={`/cause/${cause.id}`}
                    className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 text-center"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to="/donate"
                    className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300 text-center"
                  >
                    Contribute
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CauseCards

