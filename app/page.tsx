
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

import Link from "next/link";

export default function Home() {
  return (

    <>
   
   <div className="min-h-screen  flex flex-col">

   <Nav/>

 <Hero/>



<div className="h-25 w-full bg-(--primary-color) justify-center items-end py-1.5 flex">
  <Link  href="/Maya" className="px-3 py-2  relative rounded-full text-black  overflow-hidden border-[0.1px] border-black/60">
  <div className="absolute h-full w-full bg-gradient-br from-neutral-700 to-neutral-300 blur-lg rounded-full "></div>
  Next One</Link>
</div>
   </div>
    

 
   

    </>
  
  );
}
