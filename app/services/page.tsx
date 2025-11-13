import Link from 'next/link'
import Image from 'next/image'
import { Bug, Home as HomeIcon, Building2, Shield, Zap, Leaf, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Bug,
      title: 'Termite Control',
      description: 'Comprehensive termite treatment and prevention services to protect your property from wood-destroying insects.',
      features: [
        'Pre and post-construction treatment',
        'Annual maintenance contracts',
        'Advanced baiting systems',
        'Soil treatment and wood treatment',
      ],
      image: '/images/termite.jpg',
    },
    {
      icon: HomeIcon,
      title: 'Rodent Control',
      description: 'Effective rodent control solutions for homes and businesses using safe and humane methods.',
      features: [
        'Rat and mouse control',
        'Entry point identification',
        'Trapping and removal',
        'Prevention and exclusion services',
      ],
      image: '/Rodent%20Control.jpg',
    },
    {
      icon: Bug,
      title: 'Cockroach Control',
      description: 'Complete cockroach elimination using advanced gel baits and spray treatments.',
      features: [
        'German and American cockroach control',
        'Gel bait application',
        'Residual spray treatment',
        'Follow-up services included',
      ],
    },
    {
      icon: Bug,
      title: 'Bed Bug Control',
      description: 'Specialized bed bug treatment with guaranteed results using heat and chemical methods.',
      features: [
        'Inspection and identification',
        'Heat treatment available',
        'Chemical treatment options',
        'Multiple visit packages',
      ],
    },
    {
      icon: Bug,
      title: 'Mosquito Control',
      description: 'Reduce mosquito populations around your property with our targeted treatment programs.',
      features: [
        'Fogging and misting services',
        'Larvicide treatment',
        'Breeding site elimination',
        'Seasonal protection plans',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial Pest Control',
      description: 'Customized pest management solutions for businesses, restaurants, hotels, and offices.',
      features: [
        'Regular inspection schedules',
        'Documentation and reporting',
        'Compliance with health regulations',
        'Discreet and professional service',
      ],
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-primary-50">
              Comprehensive pest control solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-600"
              >
                {service.image ? (
                  <div className="mb-4 -mt-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={500}
                      className="w-full h-48 object-cover rounded-md"
                      priority
                    />
                  </div>
                ) : (
                  <service.icon className="w-16 h-16 text-primary-600 mb-4" />
                )}
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Guarantee
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe & Certified</h3>
              <p className="text-gray-600">
                All our treatments use government-approved, eco-friendly chemicals
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Same-day service available for emergency pest control needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Leaf className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Environmentally responsible pest control methods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Get a free consultation and quote today
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
    </div>
  )
}
