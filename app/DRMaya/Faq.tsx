"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';


interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What should I expect in our first session?",
    answer: "Our first session is an opportunity for us to get to know each other. We'll discuss what brought you to therapy, your history, and what you hope to achieve. There's no pressure to share everything at once—we'll move at a pace that feels comfortable for you. I'll also explain how I work and answer any questions you have about the process."
  },
  {
    question: "How long does therapy typically last?",
    answer: "The duration of therapy varies based on individual needs and goals. Some clients find significant relief in 12-16 sessions, while others prefer ongoing support over a longer period. We'll regularly check in about your progress and adjust our approach as needed. My focus is on helping you develop lasting tools, not creating dependency."
  },
  {
    question: "Do you offer telehealth sessions?",
    answer: "Yes, I offer secure telehealth sessions for clients located anywhere in California. Many clients appreciate the flexibility of virtual sessions, and research shows they can be just as effective as in-person work for many concerns. I use a HIPAA-compliant platform to ensure your privacy and confidentiality."
  },
  {
    question: "What is EMDR and how do you use it?",
    answer: "EMDR (Eye Movement Desensitization and Reprocessing) is a structured therapy approach that helps process traumatic memories and reduce their emotional impact. During EMDR sessions, we use bilateral stimulation—such as guided eye movements or tapping—to help your brain reprocess distressing experiences. I integrate EMDR carefully, ensuring you have grounding skills in place first."
  },
  {
    question: "How do I know if you're the right therapist for me?",
    answer: "The therapeutic relationship is one of the most important factors in successful therapy. I offer a free 15-minute consultation so we can get a sense of each other. Trust your instincts—do you feel heard? Do my approach and values resonate with you? It's important to find someone you feel safe with, even if that isn't me."
  },
  {
    question: "What are your fees and do you take insurance?",
    answer: "My standard session fee is $250 for a 50-minute session. I am not in-network with insurance panels, which allows me to maintain a small, focused practice and protect your privacy. I can provide superbills for potential out-of-network reimbursement, and I reserve a limited number of sliding-scale spots for those with financial need."
  }
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#efece8]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <FadeIn>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#1a1714]" />
                <span className="text-sm uppercase tracking-widest text-[#1a1714]/60">
                  Common Questions
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-[#1a1714]">
                What to <span className="italic text-[#1a1714]/60">Expect</span>
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-7 flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-lg text-[#1a1714]/70 leading-relaxed max-w-lg">
                Starting therapy is a significant step. Here are answers to questions 
                I frequently hear from new clients. If you don't see your question here, 
                please reach out directly.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <motion.div
                className="bg-[#f9f7f3] rounded-2xl overflow-hidden"
                initial={false}
                animate={{
                  boxShadow: openIndex === index 
                    ? "0 20px 40px -15px rgba(26, 23, 20, 0.15)" 
                    : "0 4px 6px -1px rgba(26, 23, 20, 0.05)"
                }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-serif text-xl md:text-2xl text-[#1a1714] pr-8 group-hover:text-[#1a1714]/70 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#1a1714] text-[#f9f7f3] flex items-center justify-center shrink-0"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8">
                        <div className="h-px bg-[#1a1714]/10 mb-6" />
                        <p className="text-[#1a1714]/70 leading-relaxed text-lg max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Card */}
        <FadeIn delay={0.6}>
          <div className="mt-16 bg-[#1a1714] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#f9f7f3]/10 flex items-center justify-center">
                <MessageCircle size={28} className="text-[#f9f7f3]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#f9f7f3] mb-2">
                  Still have questions?
                </h3>
                <p className="text-[#f9f7f3]/60">
                  I'm happy to discuss any concerns during a free consultation.
                </p>
              </div>
            </div>
            <button className="px-8 py-4 bg-[#f9f7f3] text-[#1a1714] rounded-full font-medium hover:bg-[#f9f7f3]/90 transition-colors whitespace-nowrap">
              Schedule a Call
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};