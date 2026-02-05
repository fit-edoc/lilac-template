
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
import { useEffect, useState } from "react";
import { LockIcon } from "lucide-react";

export default function Home() {

  //  const CORRECT_PASSWORD = "lilac"; 
  // const [password, setPassword] = useState("");
  // const [unlocked, setUnlocked] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const isUnlocked = sessionStorage.getItem("isUnlocked");
  //   if (isUnlocked === "true") {
  //     setUnlocked(true);
  //   }
  // }, []);


  //   const handleSubmit = () => {
  //   if (password === CORRECT_PASSWORD) {
  //      sessionStorage.setItem("isUnlocked", "true");
  //     setUnlocked(true);
  //     setError("");
  //   } else {
  //     setError("Incorrect password");
  //   }
  // };
  // if (!unlocked) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center gap-2.5 bg-(--primary-color)">
  //       <div className="bg-white p-6 flex flex-col justify-center items-center rounded-2xl shadow-md w-full max-w-sm">
  //         <div className="flex justify-center py-6  ">
  //           <LockIcon className="rounded-full text-white  bg-(--text-color) px-1.5" size={30}/>
  //         </div>

  //         <input
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           className="w-full border px-3 py-2 rounded mb-3 text-black accent-orange-500"
  //           placeholder="Password"
  //         />

  //         {error && (
  //           <p className="text-red-500 text-sm mb-2">{error}</p>
  //         )}

  //         <button
  //           onClick={handleSubmit}
  //           className="w-full bg-(--text-color) text-white px-2.5 py-2.5  rounded-full hover:opacity-90"
  //         >
  //           Unlock
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
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
