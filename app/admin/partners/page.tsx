"use client"

import { useEffect, useState } from "react"

type Partner = {
  id: string
  name: string
  phone: string
  email?: string
  city: string
  serviceArea: string
  company?: string
  experience?: string
  message?: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
  updatedAt: string
}

export default function AdminPartners() {
  const [list, setList] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/partners', { cache: 'no-store' })
      const data = await res.json()
      if (data.success) setList(data.data as Partner[])
      else setError('Failed to load')
    } catch (e) {
      setError('Failed to load')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const updateStatus = async (id: string, status: Partner['status']) => {
    setUpdating(id)
    setError(null)
    try {
      const res = await fetch('/api/partners', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      const data = await res.json()
      if (!data.success) throw new Error('Update failed')
      setList((prev) => prev.map((p) => (p.id === id ? data.data : p)))
    } catch (e) {
      setError('Update failed')
    } finally {
      setUpdating(null)
    }
  }

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner Applications</h1>
            <p className="text-primary-50">Review and approve partner requests.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg overflow-x-auto">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : list.length === 0 ? (
              <p>No applications yet.</p>
            ) : (
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-3 pr-4">Name</th>
                    <th className="py-3 pr-4">Phone</th>
                    <th className="py-3 pr-4">City</th>
                    <th className="py-3 pr-4">Service Area</th>
                    <th className="py-3 pr-4">Company</th>
                    <th className="py-3 pr-4">Experience</th>
                    <th className="py-3 pr-4">Status</th>
                    <th className="py-3 pr-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((p) => (
                    <tr key={p.id} className="border-b last:border-0">
                      <td className="py-3 pr-4 font-medium">{p.name}</td>
                      <td className="py-3 pr-4">{p.phone}</td>
                      <td className="py-3 pr-4">{p.city}</td>
                      <td className="py-3 pr-4">{p.serviceArea}</td>
                      <td className="py-3 pr-4">{p.company || '-'}</td>
                      <td className="py-3 pr-4">{p.experience || '-'}</td>
                      <td className="py-3 pr-4">
                        <span className={`px-2 py-1 rounded text-xs ${p.status === 'approved' ? 'bg-green-100 text-green-700' : p.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-800'}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex gap-2">
                          <button
                            className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400"
                            disabled={updating === p.id || p.status === 'approved'}
                            onClick={() => updateStatus(p.id, 'approved')}
                          >
                            {updating === p.id ? '...' : 'Approve'}
                          </button>
                          <button
                            className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400"
                            disabled={updating === p.id || p.status === 'rejected'}
                            onClick={() => updateStatus(p.id, 'rejected')}
                          >
                            {updating === p.id ? '...' : 'Reject'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
