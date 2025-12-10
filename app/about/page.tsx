"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, ChevronUp, BookOpen, Film, GraduationCap, Globe, Heart, Sparkles, Quote, PenTool, Menu, X } from "lucide-react"

// Import your author image
import authorImage from "@/public/images/author.jpeg"

export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("who-i-am")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
      
      // Update active section based on scroll position
      const sections = ['who-i-am', 'literary-cinematic-life', 'education-mentorship', 'tedx']
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

  // Mobile menu sections
  const sections = [
    { id: "who-i-am", label: "Who I Am", icon: <Globe size={16} /> },
    { id: "literary-cinematic-life", label: "Literary Life", icon: <Film size={16} /> },
    { id: "education-mentorship", label: "Mentorship", icon: <GraduationCap size={16} /> },
    { id: "tedx", label: "TEDx Talk", icon: <Sparkles size={16} /> },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFF9EB]">
        <Header />
        <main className="flex-1">
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4C430] animate-pulse"></div>
              <p className="mt-4 text-[#1A1A1A]/70 text-sm">Loading...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EB] text-[#1A1A1A]">
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
          font-size: 16px;
          line-height: 1.6;
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
          <div className="absolute bottom-full mb-2 left-0 right-0 bg-[#FFF9EB] border border-[#D4AF37]/30 rounded-xl shadow-lg overflow-hidden mobile-transition"
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
                    className={`w-full text-left px-4 py-3 rounded-lg mobile-transition flex items-center gap-3 ${activeSection === section.id ? 'bg-[#7A1F26]/10 text-[#7A1F26]' : 'text-[#1A1A1A]/70 hover:bg-[#7A1F26]/5'}`}
                  >
                    <span className={`${activeSection === section.id ? 'text-[#D4AF37]' : 'text-[#1A1A1A]/40'}`}>
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
            className="w-full bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 tap-highlight-transparent"
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
        {/* Mobile Hero Section */}
        <section 
          className="relative pt-16 pb-12 mobile-full-width"
          style={{
            backgroundImage: `linear-gradient(rgba(122, 31, 38, 0.95), rgba(26, 26, 26, 0.98)), url('https://images.unsplash.com/photo-1544931170-3ca13322c4a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top Gold Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
           <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
          <div className="mobile-padding">
            {/* Author Image - Mobile Optimized */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37] via-[#F4C430] to-[#7A1F26] rounded-2xl blur opacity-20"></div>
              
              <div className="relative aspect-square w-64 mx-auto rounded-xl overflow-hidden border-4 border-[#FFF9EB] shadow-xl">
                <Image
                  src={authorImage}
                  alt="Sharbari Ahmed - Literary Author"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F26]/40 via-transparent to-transparent"></div>
              </div>

              {/* Author Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-5 py-2 bg-[#FFF9EB] border border-[#D4AF37] rounded-full shadow-md">
                <p className="text-[#7A1F26] font-subheading text-sm font-bold tracking-wide">Sharbari Ahmed</p>
              </div>
            </div>

            {/* Hero Content - Mobile Stacked */}
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFF9EB]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/30">
                  <Sparkles size={14} className="text-[#D4AF37]" />
                  <p className="font-subheading text-xs text-[#D4AF37] tracking-widest">
                    AUTHOR • STORYTELLER
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-[#FFF9EB] leading-tight">
                The Story
                <br />
                <span className="text-[#D4AF37]">Behind</span>
                <br />
                The Stories
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#D4AF37] rotate-45 bg-[#FFF9EB]"></div>
              </div>

              <p className="font-subheading text-lg text-[#FFF9EB]/90 leading-relaxed px-4">
                A journey through literary landscapes, cultural crossroads, and the art of storytelling.
              </p>

              {/* Quick Stats - Horizontal Scroll on Mobile */}
              <div className="overflow-x-auto pb-2 pt-4 -mx-4 px-4">
                <div className="flex gap-3 min-w-max">
                  {[
                    { number: "15+", label: "Years" },
                    { number: "2", label: "Books" },
                    { number: "25+", label: "Works" },
                    { number: "50+", label: "Mentored" }
                  ].map((stat, index) => (
                    <div key={index} className="flex-shrink-0 w-20 p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg backdrop-blur-sm">
                      <p className="text-2xl font-bold text-[#D4AF37]">{stat.number}</p>
                      <p className="text-xs text-[#FFF9EB]/80 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - Mobile Optimized */}
        <section className="py-12 mobile-padding bg-[#FFF9EB]">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              <span className="font-subheading text-sm text-[#7A1F26] tracking-widest">THE ARTIST'S JOURNEY</span>
              <div className="h-px w-8 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              About
              <br />
              <span className="text-[#7A1F26]">Sharbari Ahmed</span>
            </h2>

            <div className="space-y-6">
              <div className="relative p-6 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/20 rounded-xl">
                <Quote className="absolute top-3 left-3 w-5 h-5 text-[#D4AF37]/30" />
                <p className="text-lg text-[#1A1A1A]/90 leading-relaxed italic">
                  "I am a writer, filmmaker, and educator shaped by the legacies and contradictions of migration."
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-[#7A1F26]/10 to-transparent border border-[#7A1F26]/20 rounded-xl">
                <h3 className="text-xl font-bold text-[#7A1F26] mb-3 flex items-center gap-2">
                  <PenTool size={18} className="text-[#D4AF37]" />
                  Creative Vision
                </h3>
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  Born in Bangladesh and raised across multiple worlds, my creative work sits at the intersection of South Asian history, diasporic identity, and storytelling traditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections - Mobile Stacked */}
        <div className="space-y-12 mobile-padding">
          {/* Who I Am */}
          <section id="who-i-am" className="pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7A1F26] to-[#9D2935] rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe size={20} className="text-[#FFF9EB]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Who I Am</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-[#1A1A1A]/80 leading-relaxed bg-gradient-to-r from-transparent via-[#7A1F26]/5 to-transparent p-5 rounded-xl border-l-3 border-[#D4AF37]">
                I am a writer, filmmaker, and educator shaped by the legacies and contradictions of migration. Born in Bangladesh and raised across multiple worlds.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-lg">
                  <h4 className="font-bold text-[#7A1F26] mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                    Creative Philosophy
                  </h4>
                  <p className="text-sm text-[#1A1A1A]/70">
                    I believe in the power of narrative as a radical act—an act of reclaiming, reframing, and resisting.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-lg">
                  <h4 className="font-bold text-[#7A1F26] mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                    Mission
                  </h4>
                  <p className="text-sm text-[#1A1A1A]/70">
                    To illuminate the spaces between cultures, histories, and identities through authentic storytelling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Literary & Cinematic Life */}
          <section id="literary-cinematic-life" className="pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center flex-shrink-0">
                <Film size={20} className="text-[#1A1A1A]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Literary & Cinematic Life</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#7A1F26] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-[#1A1A1A]/80 leading-relaxed">
                My short story collection <span className="text-[#7A1F26] font-semibold">The Strangest of Fruit</span> has been praised for its emotional intelligence and engagement with history.
              </p>

              <div className="p-5 bg-gradient-to-r from-[#FFF9EB] via-[#F8F0E3] to-[#FFF9EB] border border-[#D4AF37]/30 rounded-lg">
                <h4 className="text-lg font-bold text-[#7A1F26] mb-3">Television & Film</h4>
                <p className="text-sm text-[#1A1A1A]/70">
                  As a TV writer and filmmaker, I've contributed to projects that value complexity, representation, and character-driven storytelling.
                </p>
              </div>
            </div>
          </section>

          {/* Educator, Mentor, Guide */}
          <section id="education-mentorship" className="pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7A1F26] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap size={20} className="text-[#FFF9EB]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Educator & Mentor</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-[#1A1A1A]/80 leading-relaxed bg-gradient-to-r from-transparent via-[#7A1F26]/5 to-transparent p-5 rounded-xl">
                For years, I've mentored emerging writers—helping them shape their stories with clarity, structure, and emotional depth.
              </p>

              <div className="p-6 bg-gradient-to-br from-[#7A1F26]/10 to-transparent border border-[#7A1F26]/20 rounded-lg">
                <Quote className="w-8 h-8 text-[#D4AF37]/20 mx-auto mb-3" />
                <blockquote className="text-xl font-subheading italic text-center text-[#1A1A1A]">
                  "I teach not just craft, but courage."
                </blockquote>
                <div className="w-12 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-3"></div>
              </div>
            </div>
          </section>

          {/* TEDx Talk Section - Mobile Optimized */}
          <section id="tedx" className="py-8 mobile-full-width bg-[#1A1A1A]">
            <div className="mobile-padding space-y-8">
              <div className="text-center space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] rounded-full">
                  <p className="text-sm font-bold text-[#1A1A1A]">TEDx TALK</p>
                </div>
                <h2 className="text-2xl font-bold text-[#FFF9EB]">
                  Between the Kabah Sharif and a Hard Place
                </h2>
                <p className="text-[#FFF9EB]/70 font-subheading text-sm">
                  Exploring identity, spirituality, and inherited stories
                </p>
              </div>

              {/* YouTube Embed - Mobile Responsive */}
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden border-2 border-[#D4AF37]/30">
                  <iframe
                    src="https://www.youtube.com/embed/qfyHTmv5JRk?si=Sfu6FeOUqzSLez_s"
                    title="TEDx Talk - Between the Kabah Sharif and a Hard Place"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                <div className="absolute top-2 left-2 px-2 py-1 bg-[#D4AF37] rounded-md">
                  <p className="text-xs font-bold text-[#1A1A1A]">TEDx</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-[#FFF9EB]/80 leading-relaxed text-sm">
                  In this deeply personal talk, I explore the spaces between faith and doubt, tradition and modernity.
                </p>
                <Link
                  href="https://www.ted.com/talks/sharbari_ahmed_between_the_kabah_sharif_and_a_hard_place"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4C430] transition-colors font-medium text-sm"
                >
                  Watch full talk
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action - Mobile Optimized */}
          <section className="py-12 mobile-padding">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">
                  Let's Connect
                  <br />
                  <span className="text-[#7A1F26]">Through Stories</span>
                </h2>
                <p className="text-[#1A1A1A]/70 font-subheading">
                  Interested in consulting, collaboration, or learning more about my work?
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] font-medium rounded-lg active:scale-95 mobile-transition text-center"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/books"
                  className="block w-full py-4 px-6 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-medium rounded-lg active:scale-95 mobile-transition text-center"
                >
                  Explore My Books
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Mobile Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center shadow-lg tap-highlight-transparent"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#1A1A1A]" />
        </button>
      )}

      {/* Mobile Status Bar Spacer */}
      <div className="h-4 lg:hidden bg-transparent"></div>
    </div>
  )
}