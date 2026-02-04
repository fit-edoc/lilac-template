
"use client"

import React, { useState } from 'react'
import MoveRight from '../icons/MoveRight'

import PlayCard from '../icons/PlayCard';
import Close from '../icons/Close';
import { motion } from 'framer-motion'

const Hero = () => {


 const [bg, setBg] = useState("#fbf6f1");
const [textColor, setTextColor] = useState("#223614");


const [isopen,setIsopen]= useState(false)

const handleToggle = ()=>{

  setIsopen((prev)=>!prev)
}

interface ColorProps {
  id: number;
  bg: string;
  textColor: string;
}

const colorPalette: ColorProps[] = [
  {
    id: 1,
    bg: "#EBD3F8",
    textColor: "#2E073F",
  },
  {
    id: 2,
    bg: "#EBF4DD",
    textColor: "#90AB8B",
  },
  {
    id: 3,
    bg: "#A18D6D",
    textColor: "#E1D0B3",
  },
];

const handleChange = (bg: string, textColor: string) => {
  setBg(bg);
  setTextColor(textColor);
};



  return (

    <>
    
   
    <div className='min-h-[120vh] relative  w-full bg-(--primary-color) flex  flex-col sm:flex-row md:flex-row' style={{backgroundColor:bg}}>
   
   <div className="capsule absolute right-3.5 z-50 top-[20%] bg-[#bababa]   flex justify-center flex-col items-center min-h-8 px-2.5 rounded-full md:top-[20%]" >


    <div className="flex justify-center items-center" onClick={handleToggle}>
{isopen ?<Close/>:<PlayCard/>

}
    </div>



{isopen  && (

  <div className="flex flex-col  gap-5 relative min-h-3 py-3">

    {colorPalette.map((item:any)=>(

      <div className="flex mt-2.5" key={item.id}  onClick={()=>handleChange(item.bg,item.textColor)}>
        <div className="h-6 w-6 rounded-l-full" style={{backgroundColor:item.bg}}></div>
         <div className="h-6 w-6 rounded-r-full" style={{backgroundColor:item.textColor}}></div>
      </div>
    ))}
    
  </div>
)}

   
   </div>
      <div className={`h-[70vh] w-screen  flex justify-center items-end pb-2.5 sm:w-[50vw] sm:h-screen sm:items-center lg:items-end`}>
        <motion.img  initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,ease:"linear"}} src="/newback.png"   alt='hero' className='h-[50vh] sm:h-[60vh] w-full object-contain sm:h-[80vh] md:h-[60vh] lg:h-[80vh] md:w-[50vw]' />
      </div>
     <div className="h-[50vh] w-screen  flex flex-col  items-center py-6  sm:w-[50vw]  sm:h-screen sm:justify-center lg:justify-end lg:pr-34 lg:pb-30">
      <motion.h1 initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,ease:"linear"}} className='text-4xl    font-gopher text-(--text-color) max-w-[300px] md:text-[5vw]  md:max-w-[330px]   lg:max-w-[600px] lg:text-[5.5vw]' style={{color:textColor}}>
        Live your life <br /> in full  bloom
      </motion.h1>

   <motion.h3  className='text-center text-lg font-light text-(--text-color) max-w-[200px] pt-5 md:max-w-[330px]'>Therapy for Adults in Minneapolis, MN.</motion.h3>

   <motion.button  initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.2,ease:"linear"}} className='py-2 px-6 bg-transparent border-[0.1px] border-black text-black mt-5 font-medium  items-center gap-1.5 capitalize flex hover:bg-(--text-color) hover:text-white duration-700 transition-all'>
    connect with me  <MoveRight  />
   </motion.button>
     </div>
       
    </div>
     </>
  )
}

export default Hero