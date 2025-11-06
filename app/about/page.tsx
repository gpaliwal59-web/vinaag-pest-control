import Link from 'next/link'
import { Award, Users, Target, Heart, Shield, CheckCircle } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety of your family, pets, and the environment in all our treatments.',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Delivering exceptional pest control services with guaranteed results.',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your satisfaction is our top priority. We go above and beyond for every client.',
    },
    {
      icon: Target,
      title: 'Effective Solutions',
      description: 'Using proven methods and advanced technology for lasting pest control.',
    },
  ]

  const achievements = [
    '100+ Happy Customers',
    '5+ Years of Experience',
    'Certified Professionals',
    '24/7 Customer Support',
    'Eco-Friendly Solutions',
    '100% Satisfaction Guarantee',
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Vinaag Pest Control
            </h1>
            <p className="text-xl text-primary-50">
              Your trusted partner in professional pest management solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Vinaag Pest Control is a leading provider of professional pest management services, 
                  dedicated to creating safe and healthy environments for homes and businesses. With 
                  years of experience in the industry, we have built a reputation for excellence, 
                  reliability, and customer satisfaction.
                </p>
                <p>
                  Our team of certified professionals uses the latest technology and eco-friendly 
                  methods to deliver effective pest control solutions. We understand that every pest 
                  problem is unique, which is why we offer customized treatment plans tailored to 
                  your specific needs.
                </p>
                <p>
                  At Vinaag Pest Control, we believe in building long-term relationships with our 
                  clients through transparent communication, quality service, and guaranteed results. 
                  Your peace of mind is our success.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To provide safe, effective, and environmentally responsible pest control solutions 
                that protect the health and well-being of our clients and their properties. We are 
                committed to excellence in service delivery and continuous improvement in our methods 
                and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <value.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team consists of highly trained and certified pest control professionals who are 
              passionate about delivering exceptional service. Each team member undergoes rigorous 
              training and stays updated with the latest industry standards and best practices.
            </p>
            <p className="text-lg text-gray-700">
              We take pride in our work and are committed to providing you with the highest level 
              of professionalism, expertise, and customer care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Vinaag Difference
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Join hundreds of satisfied customers who trust us for their pest control needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
