import AuthoreCard from "@/components/AuthoreCard"
import Feature from "@/components/Feature"
import Mega from "@/components/Mega"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Mega />
      <AuthoreCard />
     <Footer />
    </div>
  )
}
