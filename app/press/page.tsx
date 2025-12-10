"use client"

import Link from "next/link"
import { Star, Quote, BookOpen, Award, Newspaper, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { useEffect, useState } from "react"

export default function PressPage() {
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
  }, [])

  const praise = [
    {
      text: "A stunning exploration of identity and belonging. Ahmed's stories challenge what we think we know about culture and heritage.",
      author: "Acclaimed Author",
      title: "Literary Review",
      rating: 5
    },
    {
      text: "The Strangest of Fruit is a masterwork of contemporary fiction. Raw, honest, and profoundly moving.",
      author: "Book Critic",
      title: "The Literary Magazine",
      rating: 5
    },
    {
      text: "Sharbari Ahmed has crafted stories that linger long after you finish reading them. Essential work.",
      author: "Independent Reviewer",
      title: "Cultural Perspectives",
      rating: 5
    },
    {
      text: "These stories refuse to be contained by category or expectation. They are bold, beautiful, and necessary.",
      author: "Press Mention",
      title: "Contemporary Fiction Review",
      rating: 5
    },
  ]

  const pressItems = [
    {
      title: "The Strangest of Fruit Featured in National Literary Coverage",
      publication: "Literary Journal",
      date: "2024",
      excerpt: "New collection brings fresh voices to American fiction...",
      link: "#",
      icon: Newspaper
    },
    {
      title: "Filmmaker & Writer Sharbari Ahmed Discusses Storytelling & Culture",
      publication: "Arts Magazine",
      date: "2024",
      excerpt: "Ahmed discusses her approach to challenging narratives through both page and screen...",
      link: "#",
      icon: BookOpen
    },
    {
      title: "Behind the Scenes: From Television to Independent Filmmaking",
      publication: "Variety",
      date: "2023",
      excerpt: "An exclusive interview about creative independence and authentic representation...",
      link: "#",
      icon: Award
    },
    {
      title: "Emerging Voices in Contemporary Literary Fiction",
      publication: "Publishers Weekly",
      date: "2023",
      excerpt: "Ahmed joins a roster of authors reshaping the literary landscape...",
      link: "#",
      icon: Newspaper
    },
    {
      title: "TEDx Speaker Challenges Inherited Narratives",
      publication: "Speaking Circuit News",
      date: "2023",
      excerpt: "A powerful talk about identity, storytelling, and authoring new narratives...",
      link: "#",
      icon: Award
    },
  ]

  const bookLinks = [
    { 
      title: "Amazon", 
      url: "https://www.amazon.com/Strangest-Fruit-Collected-Stories/dp/B0FRW1688Q",
      color: "from-[#D4AF37] to-[#F4C430]"
    },
    {
      title: "Barnes & Noble",
      url: "https://www.barnesandnoble.com/w/the-strangest-of-fruit-sharbari-ahmed/1148333148",
      color: "from-[#7A1F26] to-[#9D2935]"
    },
    { 
      title: "ThriftBooks", 
      url: "https://www.thriftbooks.com/w/the-strangest-of-fruit-collected-stories/56953199/",
      color: "from-[#D4AF37] to-[#F4C430]"
    },
    { 
      title: "Amazon eBook", 
      url: "https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW",
      color: "from-[#7A1F26] to-[#9D2935]"
    },
  ]

  // Don't render during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
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

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Mughal pattern background */
        .mandala-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
          background-size: 300px;
        }
      `}</style>
      
      <div className="min-h-screen flex flex-col bg-[#1A1A1A] text-[#FFF9EB]">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] overflow-hidden">
            {/* Mughal Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 mandala-bg"></div>
            
            {/* Gold decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

            {/* Animated gold particles */}
            {isClient && (
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-float"
                    style={{
                      left: `${(i * 10) % 100}%`,
                      top: `${(i * 8) % 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      opacity: 0.5,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/30 mb-8">
                <Award size={16} className="text-[#D4AF37]" />
                <span className="font-cormorant text-sm text-[#D4AF37] tracking-widest">PRESS & RECOGNITION</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#FFF9EB]">Critical</span>
                <br />
                <span className="text-[#D4AF37]">Acclaim</span>
              </h1>
              
              <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
              
              <p className="font-cormorant text-xl text-[#FFF9EB]/80 leading-relaxed max-w-2xl">
                Reviews, press coverage, and praise for my literary work and filmmaking.
              </p>
            </div>

            {/* Scroll indicator */}
            {isClient && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] via-[#F4C430] to-transparent"></div>
              </div>
            )}
          </section>

          {/* Praise Section */}
          <SectionContainer id="praise" className="bg-[#1A1A1A] relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 mandala-bg" style={{ transform: 'rotate(15deg)' }}></div>
            
            {/* Gold corner accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#D4AF37]/30"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#D4AF37]/30"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D4AF37]"></div>
                  <span className="font-cormorant text-[#D4AF37] tracking-widest text-sm">READER & CRITIC PRAISE</span>
                  <div className="h-px w-12 bg-[#D4AF37]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#FFF9EB]">
                  What They Say
                </h2>
                <p className="font-cormorant text-lg text-[#FFF9EB]/60">About "The Strangest of Fruit" & My Work</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {praise.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl border border-[#7A1F26]/30 hover:border-[#D4AF37] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#D4AF37]/10 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gold quote mark */}
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-[#D4AF37]/20" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 ml-10">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>
                    
                    {/* Quote text */}
                    <blockquote className="text-lg text-[#FFF9EB]/90 leading-relaxed italic mb-6 font-cormorant pl-2">
                      "{item.text}"
                    </blockquote>
                    
                    {/* Author info */}
                    <div className="border-t border-[#7A1F26]/30 pt-4">
                      <p className="font-medium text-[#D4AF37]">{item.author}</p>
                      <p className="text-sm text-[#FFF9EB]/60">{item.title}</p>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContainer>

          {/* Press Coverage Section */}
          <SectionContainer id="press" className="bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1F26] via-[#D4AF37] to-[#7A1F26]"></div>
            
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-[#D4AF37]"></div>
                  <Newspaper size={20} className="text-[#D4AF37]" />
                  <span className="font-cormorant text-[#D4AF37] tracking-widest text-sm">PRESS COVERAGE</span>
                  <div className="h-px w-8 bg-[#D4AF37]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#FFF9EB]">
                  Featured in the Press
                </h2>
              </div>

              <div className="space-y-4">
                {pressItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={index}
                      href={item.link}
                      className="group relative block p-6 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] border border-[#7A1F26]/20 rounded-xl hover:border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#7A1F26]/10 hover:to-[#1A1A1A] transition-all duration-500 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Gold accent line */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#D4AF37] to-[#F4C430] group-hover:h-12 transition-all duration-300 rounded-full"></div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 rounded-lg flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                            <Icon size={20} className="text-[#D4AF37]" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <p className="text-sm text-[#D4AF37] font-medium uppercase tracking-wider">
                                {item.publication}
                              </p>
                              <span className="text-sm text-[#FFF9EB]/40">•</span>
                              <p className="text-sm text-[#FFF9EB]/60">{item.date}</p>
                            </div>
                            <h3 className="text-xl font-bold text-[#FFF9EB] group-hover:text-[#D4AF37] transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-[#FFF9EB]/70 leading-relaxed">
                            {item.excerpt}
                          </p>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 border border-[#D4AF37]/30 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all">
                            <ChevronRight size={16} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </SectionContainer>

          {/* Book Information Section */}
          <SectionContainer id="book" className="bg-[#1A1A1A] relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 mandala-bg"></div>
            
            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1F26] via-[#D4AF37] to-[#7A1F26]"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FFF9EB]">
                  The Strangest of Fruit
                </h2>
                <p className="font-cormorant text-xl text-[#D4AF37] italic">Collected Stories</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Book Cover */}
                <div className="relative group">
                  {/* Ornate frame effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37] to-[#7A1F26] rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
                  
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-[#7A1F26] via-[#9D2935] to-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-[#D4AF37] text-sm tracking-widest mb-4">COLLECTED STORIES</div>
                        <h3 className="text-3xl font-bold text-[#FFF9EB] mb-2 leading-tight">The Strangest<br/>of Fruit</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="text-[#D4AF37]">★</div>
                          ))}
                        </div>
                        <p className="text-[#FFF9EB]/80 text-sm italic">
                          "A luminous exploration of borders—geographic, emotional, and historical."
                        </p>
                      </div>
                    </div>
                    
                    {/* Gold shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#FFF9EB] leading-tight">
                      Stories That Cross Borders
                    </h3>
                    
                    <div className="h-px w-20 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                    
                    <p className="text-lg text-[#FFF9EB]/80 leading-relaxed font-cormorant">
                      A collection of interconnected stories exploring identity, belonging, and the narratives we inherit.
                      Ahmed's prose is lyrical and unflinching, presenting characters at the intersection of cultures,
                      religions, and personal truth.
                    </p>
                    <p className="text-lg text-[#FFF9EB]/80 leading-relaxed font-cormorant">
                      Published by Cheek Press, these stories challenge stereotypes and center voices often marginalized
                      in literary fiction.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-[#D4AF37] mb-3">Published by</h4>
                      <Link
                        href="https://www.cheek.press/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#FFF9EB] hover:text-[#D4AF37] transition-colors font-medium group"
                      >
                        <span>Cheek Press</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#D4AF37] mb-4">Available from</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookLinks.map((link, index) => (
                          <Link
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative p-3 bg-gradient-to-r ${link.color} border border-[#D4AF37]/20 rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden`}
                          >
                            <span className="relative z-10 flex items-center justify-between text-[#FFF9EB] font-medium text-sm">
                              {link.title}
                              <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>

          {/* Other Works Section */}
          <SectionContainer id="other-works" className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 mandala-bg" style={{ transform: 'rotate(45deg)' }}></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D4AF37]"></div>
                  <span className="font-cormorant text-[#D4AF37] tracking-widest text-sm">OTHER WORKS</span>
                  <div className="h-px w-12 bg-[#D4AF37]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#FFF9EB]">
                  Explore More Works
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ocean & Mrs. Nagai */}
                <div className="group relative p-8 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border border-[#7A1F26]/30 rounded-xl hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                        <BookOpen size={24} className="text-[#1A1A1A]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#FFF9EB] group-hover:text-[#D4AF37] transition-colors">
                        Ocean & Mrs. Nagai
                      </h3>
                    </div>
                    <p className="text-[#FFF9EB]/70 leading-relaxed font-cormorant">
                      A collection of stories exploring relationships, cultural memory, and the ocean as metaphor.
                    </p>
                    <Link
                      href="https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4C430] transition-colors font-medium group/link mt-4"
                    >
                      <span>Read on Amazon</span>
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>

                {/* Filmography */}
                <div className="group relative p-8 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border border-[#7A1F26]/30 rounded-xl hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#7A1F26] to-[#9D2935] rounded-lg flex items-center justify-center">
                        <Award size={24} className="text-[#FFF9EB]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#FFF9EB] group-hover:text-[#D4AF37] transition-colors">
                        Filmography & Adaptations
                      </h3>
                    </div>
                    <p className="text-[#FFF9EB]/70 leading-relaxed font-cormorant">
                      My work has been adapted for screen, including projects available on major streaming platforms.
                    </p>
                    <Link
                      href="/films"
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4C430] transition-colors font-medium group/link mt-4"
                    >
                      <span>View Filmography</span>
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
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