import React from 'react'

const Statistics = () => {
  const stats = [
    {
      value: '50K+',
      label: 'Lives Impacted',
      color: 'text-orange-500'
    },
    {
      value: '₹2Cr+',
      label: 'Funds Raised',
      color: 'text-blue-600'
    },
    {
      value: '100%',
      label: 'Transparency',
      color: 'text-green-500'
    },
    {
      value: '25+',
      label: 'Years Service',
      color: 'text-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-700 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics

