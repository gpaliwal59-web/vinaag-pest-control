"use client"

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function AdminPartners() {
  useEffect(() => {
    redirect('/')
  }, [])
  return null
}
