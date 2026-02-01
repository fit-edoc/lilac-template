
"use client"

import Head from "next/head";
import Nav from "./components/Nav";
import { AboutSection } from "./DRMaya/About";
import { Contact } from "./DRMaya/Contact";
import { MayaHero } from "./DRMaya/MayaHero";
import {Navigation} from "./DRMaya/Navigation";
import { Philosophy } from "./DRMaya/Philosophy";
import { Services } from "./DRMaya/Services";
import Hero from "./home/Hero";

export default function Home() {
  return (

    <>
    {/* <Nav/>
    <Hero/> */}

     <div className="bg-[#f9f7f3] min-h-screen selection:bg-[#1a1714] selection:text-[#f9f7f3]">
      <Head>
        <title>Dr. Maya Reynolds, PsyD | Clinical Psychologist</title>
        <meta name="description" content="Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, and burnout." />
      </Head>

      <Navigation />
      
      <main>
        <MayaHero />
        <Philosophy />
        <Services />
        <AboutSection />
        <Contact />
      </main>
    </div>
    </>
  
  );
}
