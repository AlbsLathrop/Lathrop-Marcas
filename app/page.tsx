"use client";

import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import AboutFirm from '@/components/AboutFirm'
import CommonMistake from '@/components/CommonMistake'
import Risk from '@/components/Risk'
import VideoTestimonials from '@/components/VideoTestimonials'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import Process from '@/components/Process'
import ResultadosGarantia from '@/components/ResultadosGarantia'
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <AboutFirm />
      <CommonMistake />
      <Risk />
      <VideoTestimonials />
      <Reviews />
      <Services />
      <Process />
      <ResultadosGarantia />
      <Pricing />
      <WhyUs />
      <FAQ />
      <CTAFinal />
    </>
  )
}
