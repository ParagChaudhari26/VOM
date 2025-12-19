import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Get In Touch
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-10 rounded-xl shadow-md" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base font-sans transition-colors duration-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base font-sans transition-colors duration-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base font-sans resize-y transition-colors duration-300 focus:outline-none focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full mt-4 px-8 py-3 text-base font-semibold bg-indigo-600 text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

