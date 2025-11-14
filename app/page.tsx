import Link from 'next/link'
import Image from 'next/image'
import { Shield, Clock, Award, CheckCircle, Bug, Home as HomeIcon, Building2, Leaf } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Bug,
      title: 'Termite Control',
      description: 'Complete termite elimination and prevention solutions for your property.',
      image: '/images/termite.jpg',
    },
    {
      icon: HomeIcon,
      title: 'Rodent Control',
      description: 'Safe and effective rodent removal and prevention services.',
      image: '/Rodent.jpg',
    },
    {
      icon: Bug,
      title: 'Cockroach Control',
      description: 'Comprehensive cockroach treatment for homes and businesses.',
      image: '/cockroach.jpg',
    },
    {
      icon: Bug,
      title: 'Bed Bug Control',
      description: 'Advanced bed bug treatment with guaranteed results.',
      image: '/Bed Bugs.jpg',
    },
    {
      icon: Bug,
      title: 'Mosquito Control',
      description: 'Effective mosquito control for a healthier environment.',
      image: '/mosquito.jpg',
    },
    {
      icon: Building2,
      title: 'Commercial Services',
      description: 'Specialized pest control solutions for businesses.',
      image: '/commercial.jpg',
    },
    {
      icon: Bug,
      title: 'Snake Removal',
      description: 'Safe, humane snake removal and relocation by trained professionals.',
      image: '/Snake.jpg',
    },
    {
      icon: Bug,
      title: 'Ant Control',
      description: 'Targeted treatments to eliminate ant colonies and prevent re-infestation.',
      image: '/ant.jpg',
    },
    {
      icon: Bug,
      title: 'Spider Control',
      description: 'Comprehensive spider inspection and treatment for indoor and outdoor areas.',
      image: '/Spider.jpg',
    },
    {
      icon: Bug,
      title: 'Fly Control',
      description: 'Odorless, effective fly control solutions for hygienic spaces.',
      image: '/fly.jpg',
    },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Safe & Certified',
      description: 'We use eco-friendly, government-approved chemicals safe for your family and pets.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for emergency pest control needs.',
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Highly trained professionals with years of pest control expertise.',
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Results',
      description: 'We stand behind our work with a satisfaction guarantee.',
    },
  ]

  // Ensure Commercial appears last
  const orderedServices = [...services].sort((a, b) => {
    const aIsCommercial = a.title.toLowerCase().includes('commercial')
    const bIsCommercial = b.title.toLowerCase().includes('commercial')
    return Number(aIsCommercial) - Number(bIsCommercial)
  })

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-lg min-h-[320px] md:min-h-[460px]">
            {/* Background Image */}
            <Image
              src="/images/termite.jpg"
              alt="Vinaag Pest Control technician performing treatment"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center md:object-[right_center]"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50" />

            <div className="relative z-10 p-6 md:p-10 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Pest Control Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-50">
                Safe, effective, and reliable pest management solutions for your home and business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
                >
                  Book Now
                </Link>
                <Link
                  href="/services"
                  className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors border-2 border-white"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vinaag Pest Control?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in pest management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive pest control solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orderedServices.map((service, index) => (
              <Link
                key={index}
                href={{ pathname: '/booking', query: { service: service.title } }}
                className="block group"
              >
                <div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-600 cursor-pointer group-hover:-translate-y-0.5"
                >
                {service.image ? (
                  <div className="mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-28 object-contain rounded-md bg-gray-100 p-2"
                      priority
                    />
                  </div>
                ) : (
                  <service.icon className="w-12 h-12 text-primary-600 mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Book This Service →
                </span>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Book your pest control service today and enjoy a pest-free environment
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Book Online
            </Link>
            <a
              href="tel:7498571873"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors border-2 border-white"
            >
              Call: 7498571873
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eco-Friendly Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We prioritize the safety of your family, pets, and the environment. Our pest control 
              methods use eco-friendly, government-approved chemicals that are effective against 
              pests while being safe for humans and animals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">100+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">5+ Years</h3>
                <p className="text-gray-600">Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
