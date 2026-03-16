"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Film, ExternalLink, Play, Award, Calendar, Globe, Camera, Clapperboard, Star, ChevronUp, Users, ArrowRight, Sparkles, PenTool, Youtube } from "lucide-react"

export default function FilmsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("filmography")
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  

  const realFilms = [
    {
      id: 1,
      title: "Rickshaw Girl",
      type: "Feature Film",
      role: "Screenwriter",
      production: "Sleeperwave Films, 2022 — Dir. Amitabh Reza Choudhury",
      description: "A daring teenage girl disguises herself as a boy and pedals a rickshaw on the gritty streets of Dhaka, Bangladesh to earn extra cash for her struggling family, all while pursuing her dream of becoming an artist.",
      status: "Streaming",
      source: "Wikipedia",
      trailerLink: "https://tv.apple.com/us/clip/rickshaw-girl/umc.cmc.3ighgmeon5sls5va3kcpiyru1?targetId=umc.cmc.2wm6zyigg0vo53o0whw3faymt&targetType=Movie&playableId=tvs.sbd.9001%3A1655009323_APPLE_GENERATED_261423990",
      internalLink: "/film/rickshaw-girl",
      year: "2022",
      color: "from-[#B7C83E] to-[#6F7F1E]",
      featured: true
    },
    {
      id: 2,
      title: "Level 3",
      type: "Short Film",
      role: "Written & Directed by Sharbari",
      production: "West Kelsey Productions, 2026",
      description: "A celebrated literature professor hiding a life overtaken by hoarding must confront lived trauma and the scourge of perfectionism when her estranged daughter, a beautiful, talented ballerina, seeks to reconnect with her after 12 years.",
      status: "In Post-Production",
      source: "",
      posterImage: "/images/level-poster.jpg",
      trailerLink: "#",
      internalLink: "/film/level-3",
      year: "2026",
      color: "from-[#2E2F1F] to-[#5F6148]",
      inProduction: true
    }
  ]

  const tabs = [
    { id: "featured-films", label: "Featured Films" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
        
        .font-subheading {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body {
          font-family: 'Lora', serif;
          overflow-x: hidden;
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
        }
        
        .hover-glow {
          transition: box-shadow 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 10px 30px rgba(183, 200, 62, 0.15);
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
            line-height: 1.2;
          }
          
          h2 {
            font-size: 2rem;
            line-height: 1.3;
          }
          
          .mobile-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .mobile-full-width {
            margin-left: -1rem;
            margin-right: -1rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        .tap-highlight-transparent {
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        {/* Mobile Hero Section */}
        <section className="relative pt-20 pb-12 mobile-full-width"
                 style={{
                   background: 'linear-gradient(135deg, #2E2F1F 0%, #2E2F1F 40%, #B7C83E 100%)',
                 }}>
          {/* Top Olive Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
          
          <div className="mobile-padding">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-[#E3E7C8]">
                  <Film size={14} className="text-[#B7C83E]" />
                  <p className="font-subheading text-xs text-[#B7C83E] tracking-widest">
                    CINEMATIC WORKS
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight">
                Films
                <br />
                <span className="text-[#B7C83E]">Rooted in</span>
                <br />
                Humanity
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg text-white/90 leading-relaxed px-2">
                Sharbari's filmmaking blends poetic visual language with emotionally charged narratives exploring displacement and resilience.
              </p>

              {/* Stats - Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">5+</p>
                  <p className="text-xs text-white/80">Films Produced</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">15+</p>
                  <p className="text-xs text-white/80">Festival Selections</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">5</p>
                  <p className="text-xs text-white/80">Awards Won</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">10+</p>
                  <p className="text-xs text-white/80">Countries Screened</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Preview - Mobile Optimized */}
        <section className="py-8 mobile-padding">
          <div className="relative group rounded-xl overflow-hidden border-2 border-[#E3E7C8] shadow-lg hover-lift">
            <div className="aspect-video bg-gradient-to-br from-[#2E2F1F] to-[#5F6148] flex items-center justify-center">
              <div className="text-center space-y-4 p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D9E6A3] to-[#B7C83E]/20 border-2 border-[#E3E7C8] flex items-center justify-center">
                  <Play className="text-[#B7C83E] ml-1" size={28} />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#B7C83E] tracking-wider">FILM REEL PREVIEW</p>
                  <p className="text-white/70 text-sm">Featured film preview coming soon</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Director's Statement - Mobile Stacked */}
        <section className="py-12 mobile-full-width bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3]">
          <div className="mobile-padding">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                  <Camera size={20} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Director's Statement</h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-[#5F6148] leading-relaxed text-base">
                  I am drawn to stories about the hidden lives people carry beneath the surface—secrets, shame, longing, and the quiet resilience required to confront them. My work often centers women navigating complicated emotional landscapes, where love and betrayal, identity and belonging, exist side by side.
                </p>
                
                <p className="text-[#5F6148] leading-relaxed text-base">
                  As a filmmaker and writer who has lived between cultures, I am deeply interested in characters who inhabit in-between spaces—geographically, emotionally, and morally. These liminal spaces are where truth is often revealed.
                </p>
                
                <p className="text-[#5F6148] leading-relaxed text-base">
                  Whether I'm working in film, television, or fiction, I try to create stories that feel intimate yet universal—stories that ask difficult questions about who we are, what we hide, and what it takes to reclaim ourselves.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-transparent via-[#D9E6A3]/30 to-transparent border-y border-[#E3E7C8]">
                <p className="text-[#5F6148] leading-relaxed text-center font-subheading italic">
                  "These liminal spaces are where truth is often revealed."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Navigation Tabs */}
        <div className="sticky top-16 z-30 bg-[#F9FAF4] border-b border-[#E3E7C8] shadow-sm">
          <div className="overflow-x-auto">
            <div className="flex min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    const element = document.getElementById(tab.id)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 mobile-transition ${
                    activeTab === tab.id
                      ? 'border-[#B7C83E] text-[#2E2F1F]'
                      : 'border-transparent text-[#5F6148] hover:text-[#2E2F1F]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Films Section */}
        <section id="featured-films" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <Star size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Featured Films</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-6">
              {realFilms.map((film) => (
                <div 
                  key={film.id}
                  className="bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] rounded-2xl overflow-hidden border border-[#E3E7C8] shadow-xl hover-lift hover-glow transition-all group"
                >
                  {/* Film Image */}
                  <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] overflow-hidden">
                    {film.posterImage ? (
                      // Display actual poster image if available
                      <img 
                        src={film.posterImage} 
                        alt={`${film.title} poster`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // Fallback gradient with icon
                      <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/10 to-[#6F7F1E]/10 flex items-center justify-center">
                        {film.type === "Short Film" ? (
                          <PenTool size={48} className="text-[#B7C83E]/30" />
                        ) : (
                          <Film size={48} className="text-[#B7C83E]/30" />
                        )}
                      </div>
                    )}
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                      <a 
                        href={film.trailerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-[#B7C83E] hover:scale-110"
                      >
                        <Play size={24} className="text-[#2E2F1F]" />
                      </a>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-[#E3E7C8] rounded-full">
                      <span className="font-subheading text-xs font-semibold text-[#B7C83E] uppercase tracking-wider">
                        {film.type}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-[#E3E7C8] rounded-full">
                      <span className={`text-xs font-semibold ${
                        film.status === 'Streaming' ? 'text-[#B7C83E]' : 
                        film.status === 'In Post-Production' ? 'text-[#D9E6A3]' : 
                        'text-[#9CA3AF]'
                      }`}>
                        {film.status}
                      </span>
                    </div>
                  </div>

                  {/* Film Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {film.title}
                      </h4>
                      <p className="text-[#B7C83E] font-subheading text-sm">
                        {film.role}
                      </p>
                      <p className="text-[#9CA3AF] text-sm mt-1">
                        {film.production}
                      </p>
                    </div>
                    
                    <p className="text-[#D1D5DB] text-sm mb-4 leading-relaxed">
                      {film.description}
                    </p>

                    {film.source && (
                      <div className="flex items-start gap-2 mb-4 text-xs text-[#9CA3AF]">
                        <span className="text-[#B7C83E]">Source:</span>
                        <span>{film.source}</span>
                      </div>
                    )}

                    {film.inProduction && (
                      <div className="mb-4 p-3 bg-[#B7C83E]/10 border border-[#E3E7C8] rounded-lg">
                        <p className="text-xs text-[#B7C83E]">
                          🎬 Currently in post-production. More details coming soon.
                        </p>
                      </div>
                    )}

                    {/* YouTube Channel Link */}
                    <div className="mt-4 pt-4 border-t border-[#E3E7C8]/20">
                      <a 
                        href="https://youtube.com/@westkelseyproductions?si=G_AD0uwFV2v5tLWc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#B7C83E] hover:text-white transition-colors"
                      >
                        <Youtube size={18} />
                        <span>Watch more on our YouTube channel</span>
                        <ExternalLink size={14} className="opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Collaborations - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] border-t border-[#E3E7C8]">
          <div className="mobile-padding">
            <div className="text-center space-y-8">
              <div className="p-5 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <Award size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2E2F1F]">Tribeca All Access Program</h3>
                  <p className="text-[#5F6148] text-sm">
                    Tribeca Film Festival – 2008<br />
                    (Raisins Not Virgins)
                  </p>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl hover-lift">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <Film size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2E2F1F]">Get in Touch</h3>
                  <p className="text-[#5F6148] text-sm">
                    Interested in collaboration, festival submissions, or licensing inquiries?
                  </p>
                  <Link
                    href="/contact?subject=Film%20Collaboration"
                    className="inline-flex items-center gap-1 text-[#6F7F1E] hover:text-[#B7C83E] font-medium text-sm"
                  >
                    Start a Conversation
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact?subject=Film%20Assets"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-gradient-to-r hover:from-[#B7C83E] hover:to-[#6F7F1E] hover:text-[#2E2F1F] mobile-transition text-sm font-medium border border-[#E3E7C8] hover-lift"
                >
                  Request Film Assets
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center shadow-lg tap-highlight-transparent border border-[#E3E7C8]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#2E2F1F]" />
        </button>
      )}

      {/* Mobile Bottom Spacer */}
      <div className="h-4 lg:hidden bg-transparent"></div>
    </div>
  )
}