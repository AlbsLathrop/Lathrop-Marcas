"use client";

import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import AboutFirm from '@/components/AboutFirm'
import Risk from '@/components/Risk'
import CasesReales from '@/components/CasesReales'
import Pricing from '@/components/Pricing'
import Process from '@/components/Process'
import Vigilancia from '@/components/Vigilancia'
import ResultadosGarantia from '@/components/ResultadosGarantia'
import VideoTestimonials from '@/components/VideoTestimonials'
import Reviews from '@/components/Reviews'
import LeadFormSection from '@/components/LeadFormSection'
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
      <CasesReales />
      <AboutFirm />
      <Pricing />
      <ResultadosGarantia />
      <Process />
      <Vigilancia />
      <VideoTestimonials />
      <Reviews />
      <LeadFormSection />
      <FAQ />
      <CTAFinal />
    </>
  )
}
