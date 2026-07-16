"use client";

import Hero from '@/components/Hero'
import AboutFirm from '@/components/AboutFirm'
import CommonMistake from '@/components/CommonMistake'
import Risk from '@/components/Risk'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import VideoTestimonials from '@/components/VideoTestimonials'
import Reviews from '@/components/Reviews'
import ClientLogos from '@/components/ClientLogos'
import WhyUs from '@/components/WhyUs'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutFirm />
      <CommonMistake />
      <Risk />
      <Services />
      <Process />
      <Pricing />
      <VideoTestimonials />
      <Reviews />
      <ClientLogos />
      <WhyUs />
      <FAQ />
      <CTAFinal />
    </>
  )
}
