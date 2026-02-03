import Head from 'next/head'
import React from 'react'
import { Navigation } from '../DRMaya/Navigation'
import { MayaHero } from '../DRMaya/MayaHero'
import { Office } from '../DRMaya/Office'
import { Philosophy } from '../DRMaya/Philosophy'
import { Services } from '../DRMaya/Services'
import { AboutSection } from '../DRMaya/About'
import { Contact } from '../DRMaya/Contact'
import { FAQs } from '../DRMaya/Faq'

const Landing = () => {
  return (
     <div className="bg-[#f9f7f3] rel min-h-screen selection:bg-[#1a1714] selection:text-[#f9f7f3]">
      <Head>
        <title>Dr. Maya Reynolds, PsyD | Clinical Psychologist</title>
        <meta name="description" content="Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, and burnout." />
      </Head>

      
      <Navigation/>
      <main>
        <MayaHero />
        <Office/>
        <Philosophy />
        <Services />
        <AboutSection/>
        <FAQs/>
        <Contact />
      </main>
    </div>
  )
}

export default Landing
