"use client"

import { useState } from "react"
import Link from "next/link"

export default function Partners() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceArea: "",
    company: "",
    experience: "",
    message: "",
  })
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          serviceArea: "",
          company: "",
          experience: "",
          message: "",
        })
      } else {
        alert("Submission failed. Please call 7498571873")
      }
    } catch {
      alert("Submission failed. Please call 7498571873")
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="animate-fade-in">
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Application Received</h1>
            <p className="text-primary-50 max-w-2xl mx-auto">
              Thank you for applying to partner with Vinaag. We will review and contact you for approval.
            </p>
            <div className="mt-8">
              <Link href="/" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50">
                Go to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>
            <p className="text-xl text-primary-50">
              Join as a verified pest control partner. Get bookings from our website and earn commission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Area *</label>
                  <input name="serviceArea" value={formData.serviceArea} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <input name="experience" value={formData.experience} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
              </div>

              <button type="submit" disabled={sending} className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:bg-gray-400">
                {sending ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
