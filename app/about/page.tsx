"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, ChevronUp, BookOpen, Film, GraduationCap, Globe, Heart, Sparkles, Quote, PenTool, Award, Users, Map, Dog, Camera, Book, Mail, ExternalLink, Menu, X, Play } from "lucide-react"

// Import author image
import authorImage from "@/public/images/authorImage.jpeg"

export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("biography")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
      
      // Update active section based on scroll position
      const sections = ['biography', 'literary-works', 'film-television', 'mentorship', 'personal-life']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  // Navigation sections
  const sections = [
    { id: "biography", label: "Biography", icon: <Globe size={16} /> },
    { id: "literary-works", label: "Literary Works", icon: <Book size={16} /> },
    { id: "film-television", label: "Film & TV", icon: <Film size={16} /> },
    { id: "mentorship", label: "Mentorship", icon: <Users size={16} /> },
    { id: "personal-life", label: "Personal Life", icon: <Heart size={16} /> },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F9FAF4]">
        <Header />
        <main className="flex-1">
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] animate-pulse"></div>
              <p className="mt-4 text-[#5F6148] text-sm">Loading...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Lato:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Lora:wght@400;500;600;700&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
        
        .font-subheading {
          font-family: 'Inter', sans-serif;
        }
        
        .font-italic {
          font-family: 'EB Garamond', serif;
        }
        
        body {
          font-family: 'Lora', serif;
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* Text gradient */
        .text-gradient {
          background: linear-gradient(135deg, #B7C83E 0%, #6F7F1E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Hover effects */
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(183, 200, 62, 0.1) !important;
        }

        .hover-scale:hover {
          transform: scale(1.02);
        }

        /* Improve touch targets */
        button, a {
          min-height: 44px;
          min-width: 44px;
        }

        .tap-highlight-transparent {
          -webkit-tap-highlight-color: transparent;
        }

        /* Smooth transitions */
        .mobile-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
          
          p {
            font-size: 1rem;
            line-height: 1.6;
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
      `}</style>

      <Header />

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="relative">
          <div className="absolute bottom-full mb-2 left-0 right-0 bg-white border border-[#E3E7C8] rounded-xl shadow-lg overflow-hidden mobile-transition"
               style={{
                 maxHeight: isMenuOpen ? '400px' : '0',
                 opacity: isMenuOpen ? '1' : '0',
                 transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)'
               }}>
            <div className="p-4">
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg mobile-transition flex items-center gap-3 ${activeSection === section.id ? 'bg-[#D9E6A3]/50 text-[#2E2F1F]' : 'text-[#5F6148] hover:bg-[#D9E6A3]/30'}`}
                  >
                    <span className={`${activeSection === section.id ? 'text-[#B7C83E]' : 'text-[#5F6148]'}`}>
                      {section.icon}
                    </span>
                    <span className="font-medium">{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 tap-highlight-transparent hover-scale border border-[#E3E7C8]"
          >
            {isMenuOpen ? (
              <>
                <X size={20} />
                <span className="font-medium">Close Menu</span>
              </>
            ) : (
              <>
                <Menu size={20} />
                <span className="font-medium">Quick Navigation</span>
              </>
            )}
          </button>
        </div>
      </div>

      <main className="flex-1 pb-24 lg:pb-0">
        {/* Hero Section with Author Image */}
        <section 
          className="relative pt-16 pb-12 mobile-full-width"
          style={{
            background: 'linear-gradient(135deg, #2E2F1F 0%, #2E2F1F 40%, #B7C83E 100%)',
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'url(/images/pattern.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}></div>
          
          <div className="mobile-padding">
            {/* Author Image */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#B7C83E] via-[#6F7F1E] to-[#2E2F1F] rounded-2xl blur opacity-20"></div>
              
              <div className="relative aspect-square w-64 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={authorImage}
                  alt="Sharbari Zohra Ahmed - Award-winning writer, screenwriter, and filmmaker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2F1F]/40 via-transparent to-transparent"></div>
              </div>

              {/* Author Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#F9FAF4] border border-[#E3E7C8] rounded-full shadow-lg">
                <p className="text-[#5F6148] font-subheading text-sm font-bold tracking-wide uppercase">Sharbari Zohra Ahmed</p>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-[#E3E7C8]">
                  <Award size={14} className="text-[#B7C83E]" />
                  <p className="font-subheading text-xs text-[#B7C83E] tracking-widest">
                    AWARD-WINNING WRITER • SCREENWRITER • FILMMAKER • SPEAKER
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight">
                The Story
                <br />
                <span className="text-gradient">Behind</span>
                <br />
                The Stories
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-italic text-lg text-white/90 leading-relaxed px-4">
                Exploring identity, migration, faith, superstition and the complicated ways people love—and fail—each other.
              </p>

              {/* Quick Stats */}
              <div className="overflow-x-auto pb-2 pt-4 -mx-4 px-4">
                <div className="flex gap-3 min-w-max">
                  {[
                    { number: "3", label: "Books" },
                    { number: "4", label: "Screenplays" },
                    { number: "10+", label: "Awards" },
                    { number: "50+", label: "Mentored" }
                  ].map((stat, index) => (
                    <div key={index} className="flex-shrink-0 w-20 p-3 bg-[#B7C83E]/20 border border-[#E3E7C8] rounded-lg backdrop-blur-sm">
                      <p className="text-2xl font-bold text-[#B7C83E]">{stat.number}</p>
                      <p className="text-xs text-white/80 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section id="biography" className="py-12 mobile-padding bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-[#B7C83E] to-transparent"></div>
                <span className="font-subheading text-sm text-[#5F6148] tracking-widest uppercase">THE JOURNEY</span>
                <div className="h-px w-8 bg-gradient-to-l from-[#B7C83E] to-transparent"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-[#2E2F1F]">
                Full Biography
              </h2>
            </div>

            {/* Olive Accent Box */}
            <div className="p-6 bg-gradient-to-r from-[#D9E6A3]/30 to-transparent border-l-4 border-[#B7C83E] rounded-r-lg">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D9E6A3] to-transparent rounded-lg flex items-center justify-center border border-[#E3E7C8] flex-shrink-0">
                  <Globe size={20} className="text-[#5F6148]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2E2F1F] mb-2">Global Perspective</h3>
                  <p className="text-[#5F6148]">
                    Born in Dhaka, Bangladesh and raised between Connecticut, Ethiopia, and New York, she brings a distinctly global, diasporic lens to everything she creates.
                  </p>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="space-y-6">
              <p className="text-lg text-[#5F6148] leading-relaxed">
                <span className="font-bold text-[#2E2F1F]">Sharbari Zohra Ahmed</span> is an award-winning writer, screenwriter, and filmmaker whose work explores identity, migration, faith, superstition and the complicated ways people love—and fail—each other.
              </p>

              <p className="text-[#5F6148] leading-relaxed">
                That cross-continental upbringing deeply informs her storytelling, infusing it with humor, political awareness, and emotional nuance.
              </p>

              {/* Quote Box */}
              <div className="relative p-6 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl">
                <Quote className="absolute top-3 left-3 w-5 h-5 text-[#B7C83E]/30" />
                <p className="font-italic text-lg text-[#2E2F1F] italic leading-relaxed">
                  "My work centers women who are caught between cultures, histories, and expectations, while still insisting on their own desires and agency."
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-[#B7C83E] to-transparent mt-4"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Literary Works Section */}
        <section id="literary-works" className="py-12 mobile-full-width bg-gradient-to-b from-white to-[#F9FAF4]">
          <div className="mobile-padding max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D9E6A3] to-transparent rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <BookOpen size={24} className="text-[#5F6148]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Literary Works</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            {/* Book Cards */}
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl border border-[#E3E7C8] shadow-sm hover-lift transition-all">
                <h3 className="text-xl font-bold text-[#2E2F1F] mb-3">Dust Under Her Feet</h3>
                <p className="text-[#5F6148] mb-4">
                  A novel exploring the immigrant experience through the lens of cultural displacement and personal transformation.
                </p>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-gradient-to-r from-[#D9E6A3]/50 to-transparent border border-[#E3E7C8] rounded-full">
                    <span className="text-xs font-semibold text-[#5F6148]">Adapted for Television</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-[#E3E7C8] shadow-sm hover-lift transition-all">
                <h3 className="text-xl font-bold text-[#2E2F1F] mb-3">The Ocean of Mrs. Nagai</h3>
                <p className="text-[#5F6148] mb-4">
                  A short story collection that bridges continents and generations, exploring timeless connections and the immigrant experience.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-[#E3E7C8] shadow-sm hover-lift transition-all">
                <h3 className="text-xl font-bold text-[#2E2F1F] mb-3">The Strangest of Fruit</h3>
                <p className="text-[#5F6148] mb-4">
                  A luminous collection examining migration, womanhood, love, and the myths we carry across generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Film & Television Section */}
        <section id="film-television" className="py-12 mobile-padding bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D9E6A3] to-transparent rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <Film size={24} className="text-[#5F6148]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Film & Television</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            {/* Film Projects */}
            <div className="space-y-8">
              {/* Quantico Card */}
              <div className="p-6 bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] rounded-xl border border-[#E3E7C8] text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quantico (ABC Series)</h3>
                    <div className="px-3 py-1 bg-gradient-to-r from-[#B7C83E]/20 to-transparent border border-[#E3E7C8] rounded-full inline-block">
                      <span className="text-xs font-semibold text-[#B7C83E]">HISTORY MAKER</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <Award size={20} className="text-white" />
                  </div>
                </div>
                <p className="text-[#D1D5DB] mb-4">
                  Made history as part of the writing team for the hit ABC series, the first prime time network drama to feature a South Asian woman as its lead.
                </p>
                <p className="text-sm text-[#9CA3AF] italic">
                  Helped expand representations of South Asian and Muslim characters on mainstream American television.
                </p>
              </div>

              {/* Screenplays */}
              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-[#D9E6A3]/30 to-transparent border border-[#E3E7C8] rounded-lg">
                  <h4 className="text-lg font-bold text-[#2E2F1F] mb-2">Raisins Not Virgins</h4>
                  <p className="text-[#5F6148] mb-3">
                    A sharp, funny, and subversive screenplay that follows a young Bangladeshi American Muslim woman navigating love, faith, and family in a post-9/11 world.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-gradient-to-r from-[#D9E6A3]/50 to-transparent border border-[#E3E7C8] rounded">
                      <span className="text-xs font-semibold text-[#5F6148]">Pre-Production</span>
                    </div>
                    <span className="text-xs text-[#5F6148]">Arpita Mukherjee attached to direct</span>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-r from-[#D9E6A3]/30 to-transparent border border-[#E3E7C8] rounded-lg">
                  <h4 className="text-lg font-bold text-[#2E2F1F] mb-2">Rickshaw Girl</h4>
                  <p className="text-[#5F6148] mb-3">
                    Co-wrote the screenplay for the feature adaptation of the beloved middle grade novel, praised for its vivid depiction of Bangladeshi culture.
                  </p>
                  <p className="text-sm text-[#5F6148]">
                    Centers on a Bangladeshi girl who disguises herself as a boy to support her family by driving a rickshaw.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section id="mentorship" className="py-12 mobile-full-width bg-gradient-to-b from-white to-[#F9FAF4]">
          <div className="mobile-padding max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D9E6A3] to-transparent rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <Users size={24} className="text-[#5F6148]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Mentorship & Education</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-[#5F6148] leading-relaxed">
                For years, Ahmed has mentored emerging writers—helping them shape their stories with clarity, structure, and emotional depth.
              </p>

              <div className="p-6 bg-white rounded-xl border border-[#E3E7C8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8] flex-shrink-0">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2E2F1F] mb-2">Teaching Philosophy</h3>
                    <p className="text-[#5F6148]">
                      In the classroom and one-on-one, she is known for her candor, rigor, and generosity, as well as her ability to balance tough love with deep encouragement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="relative p-8 bg-gradient-to-br from-[#D9E6A3]/50 to-transparent border border-[#E3E7C8] rounded-xl text-center">
                <Quote className="absolute top-4 left-4 w-6 h-6 text-[#B7C83E]/30 rotate-180" />
                <blockquote className="text-2xl font-italic italic text-[#2E2F1F] mb-4">
                  "I teach not just craft, but courage."
                </blockquote>
                <Quote className="absolute bottom-4 right-4 w-6 h-6 text-[#B7C83E]/30" />
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent mx-auto"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Life Section */}
        <section id="personal-life" className="py-12 mobile-padding bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D9E6A3] to-transparent rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <Heart size={24} className="text-[#5F6148]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Personal Life</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Travel */}
                <div className="p-4 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D9E6A3] to-transparent rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                      <Map size={16} className="text-[#5F6148]" />
                    </div>
                    <h4 className="font-bold text-[#2E2F1F]">Traveler</h4>
                  </div>
                  <p className="text-sm text-[#5F6148]">
                    An avid traveler whose curiosity about the world continues to pull her across continents.
                  </p>
                </div>

                {/* Animal Lover */}
                <div className="p-4 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D9E6A3] to-transparent rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                      <Dog size={16} className="text-[#5F6148]" />
                    </div>
                    <h4 className="font-bold text-[#2E2F1F]">Animal Lover</h4>
                  </div>
                  <p className="text-sm text-[#5F6148]">
                    Devoted animal lover who shares her life with two rescue dogs in Connecticut.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-[#D9E6A3]/30 to-transparent border-l-4 border-[#B7C83E] rounded-r-lg">
                <p className="text-[#5F6148] leading-relaxed">
                  At home in Connecticut, she shares her life with two rescue dogs, who are both her companions and, often, her unofficial editors—keeping her grounded, entertained, and moving forward, one page at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#B7C83E]/8 via-[#6F7F1E]/8 to-[#B7C83E]/8 border-t border-[#E3E7C8]">
          <div className="mobile-padding max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">
                Let's Connect
                <br />
                <span className="text-gradient">Through Stories</span>
              </h2>
              <p className="text-[#5F6148] font-subheading">
                Interested in consulting, collaboration, or learning more about my work?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-subheading font-semibold rounded-full hover:from-[#6F7F1E] hover:to-[#6F7F1E] hover:text-[#F9FAF4] hover:shadow-[0_15px_40px_rgba(183,200,62,0.4)] transition-all duration-300 active:scale-95 touch-target hover-scale border border-[#E3E7C8]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get in Touch
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/books"
                className="group w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#2E2F1F] text-[#2E2F1F] font-subheading font-semibold rounded-full hover:bg-[#2E2F1F] hover:text-[#F9FAF4] hover:border-[#2E2F1F] transition-all duration-300 active:scale-95 touch-target hover-scale border border-[#E3E7C8]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Books
                  <Book size={20} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center shadow-lg tap-highlight-transparent hover-scale border border-[#E3E7C8]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#2E2F1F]" />
        </button>
      )}

      {/* Mobile Status Bar Spacer */}
      <div className="h-4 lg:hidden bg-transparent"></div>
    </div>
  )
}