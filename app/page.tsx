"use client";

import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import AboutFirm from '@/components/AboutFirm'
import Risk from '@/components/Risk'
import VideoTestimonials from '@/components/VideoTestimonials'
import Reviews from '@/components/Reviews'
import LeadFormSection from '@/components/LeadFormSection'
import Process from '@/components/Process'
import ResultadosGarantia from '@/components/ResultadosGarantia'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import FAQSchemaClient from '@/components/FAQSchemaClient'

export default function Home() {
  return (
    <>
      <FAQSchemaClient />
      <Hero />
      <ClientLogos />
      <Risk />
      <AboutFirm />
      <VideoTestimonials />
      <Reviews />
      <LeadFormSection />
      <Process />
      <ResultadosGarantia />
      <Pricing />
      <FAQ />
      <CTAFinal />
    </>
  )
}
