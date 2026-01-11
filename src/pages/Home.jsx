import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const causes = [
    {
      id: 'gaushala-care',
      title: 'Gaushala Care',
      description: 'Support cow protection and care at our Gaushala. Provide shelter, food, and medical care for rescued cows.',
      image: 'https://kdham.com/wp-content/uploads/2023/02/Gaushala-kdham.jpg'
    },
    {
      id: 'education-support',
      title: 'Education Support',
      description: 'Provide quality education, books, and learning materials to underprivileged children in rural areas.',
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1ODI4MDQ1MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'healthcare-services',
      title: 'Healthcare Services',
      description: 'Provide free medical care, medicines, and health camps for rural communities and elderly.',
      image: 'https://images.unsplash.com/photo-1722235625805-ea64de92983d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGhlbHB8ZW58MXx8fHwxNzU4Mzc4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'women-empowerment',
      title: 'Women Empowerment',
      description: 'Support skill development, vocational training, and economic independence for women.',
      image: 'https://images.unsplash.com/photo-1709109566592-2762ab28f207?w=800&q=80'
    },
    {
      id: 'agriculture-development',
      title: 'Agriculture Development',
      description: 'Support sustainable farming practices, provide seeds, and farming equipment to rural farmers.',
      image: 'https://images.unsplash.com/photo-1542911882-c7100ccf771b?w=800&q=80'
    },
    {
      id: 'disaster-relief',
      title: 'Disaster Relief',
      description: 'Emergency response and relief activities during natural disasters and humanitarian crises.',
      image: 'https://images.unsplash.com/photo-1738743610025-6ebe3e13f7b4?w=800&q=80'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Lives Impacted', color: 'text-orange-600' },
    { value: '₹2Cr+', label: 'Funds Raised', color: 'text-blue-800' },
    { value: '100%', label: 'Transparency', color: 'text-green-600' },
    { value: '25+', label: 'Years Service', color: 'text-orange-600' }
  ]

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
          {/* HERO SECTION */}
          <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1677584597089-fc996f7b0e1b?crop=entropy&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Siddhagiri Math Temple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 to-blue-900/30"></div>
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Support Siddhagiri Math</h1>
              <p className="text-xl md:text-2xl mb-4 italic">through Transparent Donations</p>
              <p className="text-base md:text-lg opacity-90">
                Your contribution helps in Gaushala care, Annadaan (food distribution), Education,
                Healthcare, Women Empowerment, Agriculture development, and Disaster Relief activities.
              </p>
            </div>
          </section>

          {/* STATS SECTION */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CAUSES SECTION */}
          <section className="py-16 bg-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-blue-800 mb-4">Our Causes</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose a cause close to your heart and make a meaningful impact in the lives of those who need it most.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {causes.map((cause) => (
                  <div
                    key={cause.id}
                    className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl overflow-hidden border border-orange-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cause.image}
                        alt={cause.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-serif text-blue-800 mb-2">{cause.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{cause.description}</p>
                    </div>
                    <div className="flex gap-3 px-6 pb-6 pt-6 border-t items-center">
                      <Link
                        to={`/cause/${cause.id}`}
                        className="flex-1 h-8 rounded-md border border-blue-200 text-blue-800 hover:bg-blue-50 flex items-center justify-center text-sm"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/donate"
                        className="flex-1 h-8 rounded-md bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center text-sm"
                      >
                        Contribute
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* JOIN OUR MISSION SECTION */}
          <section className="py-16 bg-blue-800 text-white">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-serif mb-6">Join Our Mission of Service</h2>
              <p className="text-lg mb-8 text-blue-100">
                Every donation is tracked transparently and goes directly to the cause you choose.
                Together, we can build a better tomorrow.
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[>svg]:px-4 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              >
                Start Donating Today
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
