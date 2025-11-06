import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/vinaag-logo.svg" 
              alt="Vinaag Pest Control" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Professional pest control services for residential and commercial properties. 
              Safe, effective, and reliable solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Termite Control</li>
              <li>Rodent Control</li>
              <li>Cockroach Control</li>
              <li>Bed Bug Control</li>
              <li>Mosquito Control</li>
              <li>Commercial Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <a href="tel:7498571873" className="text-gray-300 hover:text-primary-400">
                  7498571873
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@vinaag.com" className="text-gray-300 hover:text-primary-400">
                  support@vinaag.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Available across India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Subtle Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Services are fulfilled by Regal Services (Govt. License: LAID10050103). We only facilitate order bookings.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vinaag Pest Control. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
