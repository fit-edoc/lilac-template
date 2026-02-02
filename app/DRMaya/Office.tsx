import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';


export const Office = () => {
  return (
    <section id="office" className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f7f3] relative overflow-hidden">
      {/* Background Texture Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#efece8]/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Grid Side */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Main Large Image */}
                <motion.div 
                  className="col-span-2 aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/office1.jpeg" 
                    alt="Therapy office with natural light" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Secondary Images */}
                <motion.div 
                  className="aspect-square rounded-[2rem] overflow-hidden shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src="office2.jpeg" 
                    alt="Comfortable therapy seating" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="aspect-square rounded-[2rem] overflow-hidden shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src="/office2.jpeg" 
                    alt="Natural light detail" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <span className="text-sm uppercase tracking-widest text-[#1a1714]/40 block mb-4">
                The Space
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-[#1a1714] mb-8">
                A Quiet Refuge in <span className="italic text-[#1a1714]/60">Santa Monica</span>
              </h2>
              
              <div className="space-y-6 text-[#1a1714]/70 text-lg leading-relaxed mb-10">
                <p>
                  My office is a quiet, private space designed to feel calm and grounding. 
                  With natural light, comfortable furnishings, and an uncluttered environment, 
                  clients often share that the space itself helps them feel more at ease when they arrive.
                </p>
                <p>
                  Located just blocks from the ocean, the setting offers a moment of pause 
                  away from the bustle of the city.
                </p>
              </div>

              <div className="space-y-4 bg-[#efece8] p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a1714] text-[#f9f7f3] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1714] mb-1">Address</h4>
                    <p className="text-[#1a1714]/60 text-sm leading-relaxed">
                      123th Street 45 W<br/>
                      Santa Monica, CA 90401
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a1714]/10 text-[#1a1714] flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1714] mb-1">Availability</h4>
                    <p className="text-[#1a1714]/60 text-sm leading-relaxed">
                      In-person sessions: Tue – Thu<br/>
                      Telehealth: Flexible scheduling
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-[#1a1714] text-[#f9f7f3] rounded-full text-sm font-medium hover:bg-[#463f3a] transition-colors flex items-center gap-2">
                  <Calendar size={16} />
                  Book a Visit
                </button>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#1a1714]/20 rounded-full text-sm font-medium text-[#1a1714] hover:bg-[#1a1714]/5 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};