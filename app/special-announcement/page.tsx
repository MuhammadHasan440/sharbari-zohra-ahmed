"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Quote, BookOpen, Award, Newspaper, ChevronRight, Globe, Calendar, Sparkles, Heart, Flame } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { useEffect, useState } from "react"

export default function AnnouncementPage() {
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
  }, [])

  const themes = [
    {
      title: "Belonging & Erasure",
      description: "A profound exploration of identity in a world that demands assimilation.",
      icon: Heart
    },
    {
      title: "Power & Silence",
      description: "Who gets to speak? Who is silenced? A reckoning with colonial legacy.",
      icon: Flame
    },
    {
      title: "Nation in Transition",
      description: "The intimate story of a woman navigating the tumultuous tides of history.",
      icon: Globe
    }
  ]

  const earlyPraise = [
    {
      text: "A remarkable reimagining. Yasmine's story burns brighter than ever in this new incarnation.",
      author: "Literary Review",
      publication: "Forthcoming"
    },
    {
      text: "Ahmed gives voice to the voiceless with prose that cuts like glass and heals like poetry.",
      author: "Book Page",
      publication: "Advance Praise"
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
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
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
      `}</style>
      
      <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
        <Header />

        <main className="flex-1">
          {/* Hero Section with New Book Image */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] overflow-hidden">
            {/* Olive leaf pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>
            
            {/* New Book image overlay */}
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src="/images/new-book.jpg"
                  alt="Yasmine and the Americans"
                  fill
                  className="object-cover opacity-10 mix-blend-multiply"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAF4]/90 via-[#F9FAF4]/70 to-[#F9FAF4]/90"></div>
              </div>
            </div>

            {/* Olive decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>

            {/* Animated elements */}
            {isClient && (
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#B7C83E] rounded-full animate-float opacity-20"
                    style={{
                      left: `${(i * 10) % 100}%`,
                      top: `${(i * 8) % 100}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
              {/* Special Announcement Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B7C83E]/20 backdrop-blur-sm rounded-full border border-[#B7C83E]/40 mb-8 animate-pulse-glow">
                <Sparkles size={16} className="text-[#6F7F1E]" />
                <span className="font-cormorant text-sm text-[#6F7F1E] tracking-widest">SPECIAL ANNOUNCEMENT</span>
                <Sparkles size={16} className="text-[#6F7F1E]" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="text-[#2E2F1F]">A Novel</span>
                <br />
                <span className="text-[#6F7F1E]">Reborn</span>
              </h1>
              
              <div className="w-32 h-1 bg-gradient-to-r from-[#B7C83E] to-transparent mb-8"></div>
              
              <p className="font-cormorant text-2xl text-[#5F6148] leading-relaxed max-w-2xl mb-4">
                This March, a powerful story returns to the world in a bold new form.
              </p>
              
              <p className="text-lg text-[#5F6148]/90 mb-6">
                Formerly published as <span className="italic">Dust Under Her Feet</span>, the novel is now released under a new title:
              </p>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F] mb-3">
                Yasmine and the Americans
              </h2>
              
              <p className="text-[#6F7F1E] text-xl mb-8 font-cormorant">
                Published by Cheek Press
              </p>

              {/* CTA Button */}
              <div className="mt-12">
                <Link
                  href="#details"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#B7C83E] hover:bg-[#6F7F1E] text-[#2E2F1F] hover:text-[#F9FAF4] font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#B7C83E]/30 hover:scale-105 active:scale-95"
                >
                  <span>Discover the Story</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Scroll indicator */}
            {isClient && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-[#B7C83E] via-[#6F7F1E] to-transparent"></div>
              </div>
            )}
          </section>

          {/* Book Details Section */}
          <SectionContainer id="details" className="bg-[#F9FAF4] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 leaf-bg" style={{ transform: 'rotate(15deg)' }}></div>
            
            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#B7C83E]/40"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#B7C83E]/40"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Book Cover */}
                <div className="relative group">
                  {/* Olive frame effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-[#6F7F1E] via-[#B7C83E] to-[#D9E6A3] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                    {/* New Book cover image */}
                    <div className="absolute inset-0">
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/new-book.jpg"
                          alt="Yasmine and the Americans Cover"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Overlay gradient for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Title overlay on image (optional - can be removed if cover already has text) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/80 text-sm font-cormorant">A novel by</p>
                      <p className="text-white text-xl font-bold">Sharbari Zohra Ahmed</p>
                    </div>
                    
                    {/* Olive shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D9E6A3]/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Book Description */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-4">
                      <div className="h-px w-12 bg-[#B7C83E]"></div>
                      <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">THE STORY</span>
                    </div>
                    
                    <p className="text-lg text-[#5F6148] leading-relaxed font-cormorant">
                      Set against the charged backdrop of war, colonial power, and cultural collision, 
                      <span className="font-bold text-[#2E2F1F]"> Yasmine and the Americans</span> follows the unforgettable journey of Yasmine — 
                      a young woman navigating identity, desire, and survival in a world shaped by forces far larger than herself.
                    </p>
                    
                    <div className="space-y-4 pl-4 border-l-2 border-[#B7C83E]">
                      <p className="text-lg text-[#5F6148] italic font-cormorant">
                        This is more than a story of one woman.
                      </p>
                      <p className="text-lg text-[#5F6148] font-cormorant">
                        It is a story about belonging and erasure.<br />
                        About power and silence.<br />
                        About who gets to define a nation in transition — and who is written out of it.
                      </p>
                    </div>
                    
                    <p className="text-lg text-[#5F6148] leading-relaxed font-cormorant">
                      Through intimate storytelling and sharp historical insight, the novel explores what it means 
                      to live between worlds — and what it costs to claim your voice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>

          {/* Themes Section */}
          <SectionContainer className="bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B7C83E] via-[#6F7F1E] to-[#B7C83E]"></div>
            
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">CENTRAL THEMES</span>
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  A Story That Resonates
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {themes.map((theme, index) => {
                  const Icon = theme.icon
                  return (
                    <div
                      key={index}
                      className="group relative p-8 bg-white rounded-xl border border-[#E3E7C8] hover:border-[#B7C83E] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#B7C83E]/20 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Icon size={48} className="text-[#6F7F1E]" />
                      </div>
                      
                      <Icon size={32} className="text-[#B7C83E] mb-4" />
                      
                      <h3 className="text-xl font-bold text-[#2E2F1F] mb-3 group-hover:text-[#6F7F1E] transition-colors">
                        {theme.title}
                      </h3>
                      
                      <p className="text-[#5F6148] leading-relaxed font-cormorant">
                        {theme.description}
                      </p>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/0 via-[#B7C83E]/10 to-[#B7C83E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </SectionContainer>

          {/* Early Praise Section */}
          <SectionContainer className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">EARLY PRAISE</span>
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  What Readers Are Saying
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {earlyPraise.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-8 bg-white rounded-xl border border-[#E3E7C8] hover:border-[#B7C83E] transition-all duration-500 animate-slide-up"
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-[#B7C83E]/30" />
                    
                    <blockquote className="text-lg text-[#2E2F1F]/90 leading-relaxed italic mb-6 font-cormorant pl-2">
                      "{item.text}"
                    </blockquote>
                    
                    <div className="border-t border-[#E3E7C8] pt-4">
                      <p className="font-medium text-[#6F7F1E]">{item.author}</p>
                      <p className="text-sm text-[#5F6148]">{item.publication}</p>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/0 via-[#B7C83E]/10 to-[#B7C83E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContainer>

          {/* Release Information Section */}
          <SectionContainer className="bg-gradient-to-b from-[#D9E6A3] to-[#F9FAF4] relative overflow-hidden">
            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B7C83E] via-[#6F7F1E] to-[#B7C83E]"></div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>

            <div className="relative z-10 text-center space-y-12 max-w-3xl mx-auto">
              <div className="space-y-6">
                <Calendar className="w-16 h-16 text-[#B7C83E] mx-auto animate-float" />
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Available March 2026
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#B7C83E] to-transparent mx-auto"></div>
                
                <p className="text-xl text-[#5F6148] font-cormorant leading-relaxed">
                  Stay tuned for release updates and availability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B7C83E] hover:bg-[#6F7F1E] text-[#2E2F1F] hover:text-[#F9FAF4] font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#B7C83E]/30 hover:scale-105 active:scale-95"
                  >
                    <span>Get Release Updates</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/press"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#B7C83E] text-[#2E2F1F] hover:bg-[#B7C83E] font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    <span>Read Press for Other Works</span>
                  </Link>
                </div>
              </div>

              {/* Publisher info */}
              <div className="pt-12 border-t border-[#E3E7C8]">
                <p className="text-[#5F6148] font-cormorant">
                  Published by{" "}
                  <Link
                    href="https://www.cheek.press/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6F7F1E] hover:text-[#B7C83E] underline transition-colors"
                  >
                    Cheek Press
                  </Link>
                </p>
              </div>
            </div>
          </SectionContainer>

          {/* Related Works Section */}
          <SectionContainer className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Also by Sharbari Zohra Ahmed
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* The Strangest of Fruit */}
                <div className="group relative p-8 bg-white border border-[#E3E7C8] rounded-xl hover:border-[#B7C83E] transition-all duration-500 hover:transform hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center">
                        <BookOpen size={24} className="text-[#F9FAF4]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E] transition-colors">
                        The Strangest of Fruit
                      </h3>
                    </div>
                    <p className="text-[#5F6148] leading-relaxed font-cormorant">
                      Collected stories exploring borders, identity, and belonging.
                    </p>
                    <Link
                      href="/press"
                      className="inline-flex items-center gap-2 text-[#6F7F1E] hover:text-[#B7C83E] transition-colors font-medium group/link mt-4"
                    >
                      <span>Read Reviews</span>
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Ocean & Mrs. Nagai */}
                <div className="group relative p-8 bg-white border border-[#E3E7C8] rounded-xl hover:border-[#B7C83E] transition-all duration-500 hover:transform hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6F7F1E] to-[#B7C83E] rounded-lg flex items-center justify-center">
                        <Award size={24} className="text-[#F9FAF4]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E] transition-colors">
                        Ocean & Mrs. Nagai
                      </h3>
                    </div>
                    <p className="text-[#5F6148] leading-relaxed font-cormorant">
                      Stories exploring relationships, cultural memory, and the ocean as metaphor.
                    </p>
                    <Link
                      href="https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#6F7F1E] hover:text-[#B7C83E] transition-colors font-medium group/link mt-4"
                    >
                      <span>Learn More</span>
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </main>

        <Footer />
      </div>
    </>
  )
}