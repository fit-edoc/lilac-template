
"use client"

import Head from "next/head";

import { AboutSection } from "./DRMaya/About";
import { Contact } from "./DRMaya/Contact";
import { MayaHero } from "./DRMaya/MayaHero";
import {Navigation} from "./DRMaya/Navigation";
import { Philosophy } from "./DRMaya/Philosophy";
import { Services } from "./DRMaya/Services";
import Hero from "./home/Hero";
import Nav from "./components/Nav";
import { Office } from "./DRMaya/Office";
import Landing from "./home/Landing";

export default function Home() {
  return (

    <>
   
   <div className="min-h-screen  flex flex-col">

   <Nav/>

 <Hero/>

<Landing/>/
   </div>
    

 
   

    </>
  
  );
}
