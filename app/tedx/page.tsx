"use client"

import Link from "next/link"
import Image from "next/image"
import { Play, Quote, BookOpen, Award, Target, Globe, ChevronRight, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { useEffect, useState } from "react"

export default function TedxPage() {
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
  }, [])

  const talkHighlights = [
    {
      icon: Target,
      title: "Challenging Narratives",
      description: "Questioning inherited stories and creating space for authentic voices"
    },
    {
      icon: Globe,
      title: "Cultural Borders",
      description: "Navigating the spaces between tradition and personal identity"
    },
    {
      icon: BookOpen,
      title: "Storytelling Power",
      description: "How stories shape our understanding of self and community"
    },
    {
      icon: Award,
      title: "Authentic Expression",
      description: "The courage to speak truth in divided times"
    }
  ]

  const quotes = [
    {
      text: "The most powerful talks challenge us to see the world differently. Ahmed's TEDx talk does exactly that.",
      author: "TEDx Organizer",
      title: "Speaking Review"
    },
    {
      text: "A masterclass in using personal narrative to explore universal themes of identity and belonging.",
      author: "Public Speaking Coach",
      title: "Communication Quarterly"
    },
    {
      text: "Ahmed brings a writer's precision and a filmmaker's vision to the TEDx stage.",
      author: "Audience Member",
      title: "Event Feedback"
    }
  ]

  // Don't render during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F9FAF4]">
        <Header />
        <main className="flex-1"></main>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        h1, h2, h3, h4 {
          font-family: 'Playfair Display', serif;
        }
        
        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Olive leaf pattern background */
        .leaf-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20c-5 0-10 3-13 8-3-5-8-8-13-8-8 0-15 7-15 15 0 10 12 20 25 30 13-10 25-20 25-30 0-8-7-15-15-15-5 0-10 3-13 8-3-5-8-8-13-8z' fill='%23B7C83E' fill-opacity='0.08'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        /* TEDx red dot pattern */
        .tedx-dots {
          background-image: radial-gradient(#e62b1e 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
      
      <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] overflow-hidden">
            {/* Olive leaf pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>
            
            {/* TEDx red dots overlay */}
            <div className="absolute inset-0 opacity-5 tedx-dots"></div>
            
            {/* Fruit image overlay */}
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src="/fruit.jpeg"
                  alt="The Strangest of Fruit"
                  fill
                  className="object-cover opacity-10 mix-blend-multiply"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAF4]/90 via-[#F9FAF4]/70 to-[#F9FAF4]/90"></div>
              </div>
            </div>

            {/* Decorative borders */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e62b1e] via-[#B7C83E] to-[#e62b1e]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e62b1e] via-[#B7C83E] to-[#e62b1e]"></div>

            {/* Animated elements */}
            {isClient && (
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-[#e62b1e] rounded-full animate-float opacity-10"
                    style={{
                      left: `${(i * 15) % 100}%`,
                      top: `${(i * 12) % 100}%`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`olive-${i}`}
                    className="absolute w-2 h-2 bg-[#B7C83E] rounded-full animate-float opacity-20"
                    style={{
                      left: `${(i * 12 + 5) % 100}%`,
                      top: `${(i * 10 + 5) % 100}%`,
                      animationDelay: `${i * 0.3 + 0.5}s`,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
              {/* TEDx Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e62b1e]/20 to-[#B7C83E]/20 backdrop-blur-sm rounded-full border border-[#e62b1e]/40 mb-8">
                <div className="w-2 h-2 bg-[#e62b1e] rounded-full animate-pulse-glow"></div>
                <span className="font-bold text-sm text-[#e62b1e] tracking-widest">TEDx</span>
                <div className="h-px w-4 bg-gradient-to-r from-[#e62b1e] to-[#B7C83E]"></div>
                <span className="font-cormorant text-sm text-[#6F7F1E] tracking-widest">TALK</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#2E2F1F]">Between the Kabah Sharif</span>
                <br />
                <span className="text-[#e62b1e]">and a Hard Place</span>
              </h1>
              
              <div className="w-32 h-1 bg-gradient-to-r from-[#e62b1e] via-[#B7C83E] to-transparent mb-8"></div>
              
              <p className="font-cormorant text-xl text-[#5F6148] leading-relaxed max-w-2xl">
                A TEDx talk exploring identity, faith, and the courage to speak truth at the intersection 
                of tradition and personal authenticity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-12">
                <a
                  href="#watch"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e62b1e] hover:bg-[#c41c1c] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#e62b1e]/30 hover:scale-105 active:scale-95"
                >
                  <Play size={20} />
                  <span>Watch the Talk</span>
                </a>
                <Link
                  href="https://www.ted.com/talks/sharbari_ahmed_between_the_kabah_sharif_and_a_hard_place?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#B7C83E] hover:bg-[#6F7F1E] text-[#2E2F1F] hover:text-[#F9FAF4] font-medium rounded-full border border-[#B7C83E] transition-all duration-300 hover:shadow-lg hover:shadow-[#B7C83E]/30 hover:scale-105 active:scale-95"
                >
                  <span>View on TED.com</span>
                  <ExternalLink size={20} />
                </Link>
              </div>
            </div>

            {/* Scroll indicator */}
            {isClient && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-[#e62b1e] via-[#B7C83E] to-transparent"></div>
              </div>
            )}
          </section>

          {/* Video Section */}
          <SectionContainer id="watch" className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>
            
            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#B7C83E]/40"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#e62b1e]/40"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#e62b1e]"></div>
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">FEATURED TALK</span>
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Watch the Full Talk
                </h2>
                <p className="font-cormorant text-lg text-[#5F6148]">TEDxWilmingtonWomen • November 2023</p>
              </div>

              {/* Video Container */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#e62b1e]/20 via-[#B7C83E]/20 to-[#e62b1e]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/qfyHTmv5JRk?si=mkR2_FeH4GmV_F9d"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Play button overlay for empty state */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#e62b1e] to-[#c41c1c] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                      <Play size={32} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* TED.com Link */}
              <div className="text-center">
                <Link
                  href="https://www.ted.com/talks/sharbari_ahmed_between_the_kabah_sharif_and_a_hard_place?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#e62b1e] to-[#c41c1c] hover:from-[#c41c1c] hover:to-[#a31616] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#e62b1e]/30 hover:scale-105 active:scale-95"
                >
                  <span className="font-bold">TED</span>
                  <span>Watch on TED.com</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="mt-3 text-sm text-[#5F6148]">
                  Full transcript, subtitles, and discussion available on the official TED platform
                </p>
              </div>
            </div>
          </SectionContainer>

          {/* Talk Highlights */}
          <SectionContainer id="highlights" className="bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e62b1e] via-[#B7C83E] to-[#e62b1e]"></div>
            
            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                  <Target size={20} className="text-[#6F7F1E]" />
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">TALK HIGHLIGHTS</span>
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Key Themes Explored
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {talkHighlights.map((highlight, index) => {
                  const Icon = highlight.icon
                  return (
                    <div
                      key={index}
                      className="group relative p-6 bg-[#F9FAF4] border border-[#E3E7C8] rounded-xl hover:border-[#B7C83E] transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B7C83E]/10 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-[#F9FAF4]" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-[#2E2F1F] mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-[#5F6148] leading-relaxed">
                        {highlight.description}
                      </p>
                      
                      {/* Hover accent */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#e62b1e] to-[#B7C83E] group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </SectionContainer>

          {/* Quotes Section */}
          <SectionContainer id="quotes" className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg" style={{ transform: 'rotate(15deg)' }}></div>
            
            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e62b1e] via-[#B7C83E] to-[#e62b1e]"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#e62b1e]"></div>
                  <Quote size={20} className="text-[#6F7F1E]" />
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">AUDIENCE REACTION</span>
                  <div className="h-px w-12 bg-[#e62b1e]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  What People Are Saying
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quotes.map((quote, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-[#D9E6A3] rounded-xl border border-[#E3E7C8] hover:border-[#B7C83E] transition-all duration-500 hover:scale-[1.02] animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Quote mark */}
                    <div className="absolute top-4 left-4 w-8 h-8 text-[#B7C83E]/30">
                      "
                    </div>
                    
                    {/* Quote text */}
                    <blockquote className="text-lg text-[#2E2F1F]/90 leading-relaxed italic mb-6 font-cormorant pl-2">
                      "{quote.text}"
                    </blockquote>
                    
                    {/* Author info */}
                    <div className="border-t border-[#E3E7C8] pt-4">
                      <p className="font-medium text-[#6F7F1E]">{quote.author}</p>
                      <p className="text-sm text-[#5F6148]">{quote.title}</p>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e62b1e]/0 via-[#B7C83E]/5 to-[#e62b1e]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContainer>

          {/* About TEDx Section */}
          <SectionContainer id="about-tedx" className="bg-gradient-to-b from-[#D9E6A3] to-[#F9FAF4] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e62b1e] to-transparent"></div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg" style={{ transform: 'rotate(45deg)' }}></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">ABOUT TEDx</span>
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Ideas Worth Spreading
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* TEDx Info */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#2E2F1F] leading-tight">
                    Independent TED Events
                  </h3>
                  
                  <div className="h-px w-20 bg-gradient-to-r from-[#e62b1e] to-transparent"></div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-[#5F6148] leading-relaxed font-cormorant">
                      TEDx events are independently organized TED-style conferences that bring people together 
                      to share ideas and spark conversation in communities around the world.
                    </p>
                    <p className="text-lg text-[#5F6148] leading-relaxed font-cormorant">
                      This talk was presented at TEDxWilmingtonWomen, part of a global movement to amplify 
                      women's voices and ideas on the TED stage.
                    </p>
                    <p className="text-lg text-[#5F6148] leading-relaxed font-cormorant">
                      Each TEDx event features live speakers and recorded TED Talks that combine to spark 
                      deep discussion and connection.
                    </p>
                  </div>

                  {/* Links */}
                  <div className="pt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-[#6F7F1E] mb-2">Learn more about TEDx</h4>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="https://www.ted.com/about/programs-initiatives/tedx-program"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#B7C83E] hover:bg-[#6F7F1E] text-[#2E2F1F] hover:text-[#F9FAF4] text-sm font-medium rounded-full transition-all duration-300"
                        >
                          <span>TEDx Program</span>
                          <ExternalLink size={14} />
                        </Link>
                        <Link
                          href="https://www.ted.com/tedx/events"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-[#B7C83E] hover:border-[#6F7F1E] text-[#6F7F1E] hover:text-[#2E2F1F] text-sm font-medium rounded-full transition-all duration-300"
                        >
                          <span>Find Events</span>
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEDx Visual */}
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#e62b1e]/20 to-[#B7C83E]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative p-8 bg-gradient-to-br from-[#e62b1e] via-[#c41c1c] to-[#e62b1e] rounded-xl overflow-hidden shadow-2xl">
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center gap-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse-glow"></div>
                        <span className="text-4xl font-bold text-white tracking-tighter">TED</span>
                        <span className="text-3xl font-bold text-white/90">x</span>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white">WilmingtonWomen</h4>
                        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                        <p className="text-white/80 font-cormorant">
                          Ideas worth spreading in local communities worldwide
                        </p>
                      </div>
                      
                      {/* Animated TEDx dots */}
                      <div className="relative h-32">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full animate-float"
                            style={{
                              left: `${(i * 30) % 100}%`,
                              top: `${(i * 10) % 100}%`,
                              animationDelay: `${i * 0.2}s`,
                              opacity: 0.3,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>

          {/* CTA Section */}
          <SectionContainer id="cta" className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Fruit image background */}
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src="/fruit.jpeg"
                  alt="The Strangest of Fruit"
                  fill
                  className="object-cover opacity-5"
                />
              </div>
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAF4]/80 via-[#F9FAF4]/90 to-[#F9FAF4]/80"></div>

            <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto py-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                Want to Hear More?
              </h2>
              
              <p className="font-cormorant text-xl text-[#5F6148] leading-relaxed">
                Explore my other talks, interviews, and literary work that continue these conversations 
                about identity, storytelling, and authentic expression.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Link
                  href="/press"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#B7C83E] hover:bg-[#6F7F1E] text-[#2E2F1F] hover:text-[#F9FAF4] font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#B7C83E]/30 hover:scale-105 active:scale-95"
                >
                  <span>View Press & Reviews</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/books"
                  className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-[#B7C83E] hover:border-[#6F7F1E] text-[#6F7F1E] hover:text-[#2E2F1F] font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <BookOpen size={20} />
                  <span>Explore Literary Work</span>
                </Link>
              </div>
            </div>
          </SectionContainer>
        </main>

        <Footer />
      </div>
    </>
  )
}