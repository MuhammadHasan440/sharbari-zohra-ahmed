"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Film, ExternalLink, Play, Award, Calendar, Globe, Camera, Clapperboard, Star, ChevronUp, Users, ArrowRight, Sparkles } from "lucide-react"

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

  const filmography = [
    {
      title: "Short Film",
      type: "Short Film",
      description: "Stills, synopsis, festival notes.",
      status: "In Production",
      link: "#",
      platform: "Available for Festival",
      year: "2024",
      color: "from-[#D4AF37] to-[#F4C430]",
      featured: true
    },
    {
      title: "Feature Adaptation",
      year: "2024",
      type: "Feature Film",
      description: "A film adaptation written by Sharbari, now streaming on Amazon. A powerful narrative exploring displacement, resilience, and the human spirit.",
      status: "Streaming",
      link: "https://www.amazon.com/",
      platform: "Amazon Prime Video",
      color: "from-[#7A1F26] to-[#9D2935]"
    },
    {
      title: "Literary Adaptation",
      year: "2023",
      type: "Feature",
      description: "Available on Amazon Prime Video and select streaming platforms. A feature-length adaptation bringing literary fiction to the screen.",
      status: "Streaming",
      link: "https://www.amazon.com/",
      platform: "Amazon Prime Video",
      color: "from-[#D4AF37] to-[#F4C430]"
    },
    {
      title: "Documentary Series",
      year: "2023",
      type: "Series (3 Episodes)",
      description: "An intimate documentary series exploring storytelling, cultural heritage, and the creative process. Behind-the-scenes and personal narrative.",
      status: "In Festival Circuit",
      link: "#",
      platform: "Festival Submissions",
      color: "from-[#7A1F26] to-[#9D2935]"
    },
    {
      title: "Short Film",
      year: "2022",
      type: "Short (12 min)",
      description: "An experimental narrative exploring memory and diaspora through visual metaphor. Selected for multiple international film festivals.",
      status: "Festival Award Winner",
      link: "#",
      platform: "Festival Circuit",
      color: "from-[#D4AF37] to-[#F4C430]"
    },
  ]

  const festivals = [
    { name: "International Film Festival", year: "2023", location: "Cannes, FR" },
    { name: "Documentary Festival Selection", year: "2023", location: "Sundance, US" },
    { name: "Asian American Film Festival", year: "2022", location: "Los Angeles, US" },
    { name: "Emerging Filmmakers Program", year: "2022", location: "Toronto, CA" },
  ]

  const awards = [
    { name: "Best Short Film", festival: "Festival X", year: "2023" },
    { name: "Director's Award", festival: "Festival Y", year: "2022" },
    { name: "Audience Choice", festival: "Documentary Festival", year: "2023" },
    { name: "Emerging Artist Fellowship", festival: "Arts Council", year: "2022" },
  ]

  const tabs = [
    { id: "filmography", label: "Filmography" },
    { id: "festivals", label: "Festivals" },
    { id: "awards", label: "Awards" },
  ]

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
                   backgroundImage: `linear-gradient(rgba(122, 31, 38, 0.95), rgba(26, 26, 26, 0.98)), url('https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}>
          {/* Top Gold Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
           <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
          <div className="mobile-padding">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFF9EB]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/30">
                  <Film size={14} className="text-[#D4AF37]" />
                  <p className="font-subheading text-xs text-[#D4AF37] tracking-widest">
                    CINEMATIC WORKS
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-[#FFF9EB] leading-tight">
                Films
                <br />
                <span className="text-[#D4AF37]">Rooted in</span>
                <br />
                Humanity
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#D4AF37] rotate-45 bg-[#FFF9EB]"></div>
              </div>

              <p className="font-subheading text-lg text-[#FFF9EB]/90 leading-relaxed px-2">
                Sharbari's filmmaking blends poetic visual language with emotionally charged narratives exploring displacement and resilience.
              </p>

              {/* Stats - Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">5+</p>
                  <p className="text-xs text-[#FFF9EB]/80">Films Produced</p>
                </div>
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">15+</p>
                  <p className="text-xs text-[#FFF9EB]/80">Festival Selections</p>
                </div>
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">4</p>
                  <p className="text-xs text-[#FFF9EB]/80">Awards Won</p>
                </div>
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">10+</p>
                  <p className="text-xs text-[#FFF9EB]/80">Countries Screened</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Preview - Mobile Optimized */}
        <section className="py-8 mobile-padding">
          <div className="relative group rounded-xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-[#7A1F26] to-[#1A1A1A] flex items-center justify-center">
              <div className="text-center space-y-4 p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/20 border-2 border-[#D4AF37]/30 flex items-center justify-center">
                  <Play className="text-[#D4AF37] ml-1" size={28} />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#D4AF37] tracking-wider">FILM REEL PREVIEW</p>
                  <p className="text-[#FFF9EB]/70 text-sm">Featured film preview coming soon</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Director's Statement - Mobile Stacked */}
        <section className="py-12 mobile-full-width bg-gradient-to-b from-[#FFF9EB] to-[#F8F0E3]">
          <div className="mobile-padding">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                  <Camera size={20} className="text-[#FFF9EB]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Director's Statement</h2>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/20 rounded-xl">
                  <h3 className="text-lg font-bold text-[#7A1F26] flex items-center gap-2">
                    <Sparkles size={14} className="text-[#D4AF37]" />
                    Visual Authenticity
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm mt-2">
                    As a director and filmmaker, I'm committed to bringing literary narratives and original stories to the screen with visual authenticity and emotional depth.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/20 rounded-xl">
                  <h3 className="text-lg font-bold text-[#7A1F26] flex items-center gap-2">
                    <Globe size={14} className="text-[#D4AF37]" />
                    Cultural Memory
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm mt-2">
                    My work explores the intersection of personal identity, cultural memory, and the universal human experience.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/20 rounded-xl">
                  <h3 className="text-lg font-bold text-[#7A1F26] flex items-center gap-2">
                    <Users size={14} className="text-[#D4AF37]" />
                    Marginalized Voices
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm mt-2">
                    I believe cinema is a powerful medium for challenging stereotypes and centering marginalized voices.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-transparent via-[#7A1F26]/5 to-transparent border-y border-[#D4AF37]/20">
                <p className="text-[#1A1A1A]/80 leading-relaxed text-center font-subheading">
                  Whether adapting existing stories or developing original screenplays, my approach prioritizes nuance, representation, and emotional truth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Navigation Tabs */}
        <div className="sticky top-16 z-30 bg-[#FFF9EB] border-b border-[#D4AF37]/20 shadow-sm">
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
                      ? 'border-[#7A1F26] text-[#7A1F26]'
                      : 'border-transparent text-[#1A1A1A]/70 hover:text-[#7A1F26]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filmography Section */}
        <section id="filmography" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                <Clapperboard size={20} className="text-[#FFF9EB]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Filmography</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#7A1F26] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-4">
              {filmography.map((film, index) => (
                <div
                  key={index}
                  className={`relative p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border rounded-xl mobile-transition ${
                    hoveredFilm === index 
                      ? 'border-[#D4AF37] shadow-lg' 
                      : 'border-[#D4AF37]/30'
                  }`}
                  onMouseEnter={() => setHoveredFilm(index)}
                  onMouseLeave={() => setHoveredFilm(null)}
                >
                  {/* Featured Badge */}
                  {film.featured && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] rounded-full">
                      <p className="text-xs font-bold text-[#1A1A1A]">FEATURED</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#1A1A1A]">{film.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 bg-[#7A1F26]/10 text-[#7A1F26] text-xs rounded-full">
                            {film.type}
                          </span>
                          <span className="px-2 py-0.5 bg-[#D4AF37]/10 text-[#7A1F26] text-xs rounded-full">
                            {film.year}
                          </span>
                        </div>
                      </div>
                      <span className={`text-sm font-medium ${
                        film.status === 'Streaming' ? 'text-[#7A1F26]' : 
                        film.status === 'In Production' ? 'text-[#D4AF37]' : 
                        'text-[#1A1A1A]'
                      }`}>
                        {film.status}
                      </span>
                    </div>

                    <p className="text-[#1A1A1A]/70 text-sm">
                      {film.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-[#1A1A1A]/60 text-xs">
                        <Globe size={12} />
                        <span>{film.platform}</span>
                      </div>
                      {film.link !== "#" && (
                        <Link
                          href={film.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#7A1F26] hover:text-[#D4AF37] text-sm font-medium"
                        >
                          <Play size={14} />
                          <span>Watch</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Festivals & Awards Sections */}
        <div className="space-y-12 mobile-full-width">
          {/* Festivals Section */}
          <section id="festivals" className="py-12 bg-gradient-to-b from-[#FFF9EB] to-[#F8F0E3]">
            <div className="mobile-padding">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                    <Calendar size={20} className="text-[#FFF9EB]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Festival Selections</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#7A1F26] to-transparent mt-1"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {festivals.map((festival, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-[#FFF9EB] border border-[#D4AF37]/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="text-[#7A1F26] font-bold">{festival.name}</h4>
                          <p className="text-[#1A1A1A]/60 text-xs">{festival.location}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-[#D4AF37] font-bold">{festival.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Awards Section */}
          <section id="awards" className="py-12 bg-gradient-to-b from-[#F8F0E3] to-[#FFF9EB]">
            <div className="mobile-padding">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-[#FFF9EB]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Awards & Honors</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent mt-1"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-[#FFF9EB] border border-[#D4AF37]/20 rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <Star className="text-[#D4AF37] flex-shrink-0 mt-1" size={16} />
                        <div className="flex-1">
                          <h4 className="text-[#7A1F26] font-bold">{award.name}</h4>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-[#1A1A1A]/60 text-xs">{award.festival}</p>
                            <span className="text-[#D4AF37] font-bold">{award.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Creative Collaborations - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#FFF9EB] via-[#F8F0E3] to-[#FFF9EB]">
          <div className="mobile-padding">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">
                  Creative
                  <br />
                  <span className="text-[#7A1F26]">Collaborations</span>
                </h2>
                <p className="text-[#1A1A1A]/70 font-subheading">
                  Working with talented cinematographers, producers, sound designers, and editors to bring stories to life.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-xl">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-[#FFF9EB]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Services Available</h3>
                    <ul className="space-y-1 text-[#1A1A1A]/70 text-sm text-center">
                      <li>• Film production consultation</li>
                      <li>• Story development for screen</li>
                      <li>• Directing and cinematography</li>
                      <li>• Post-production collaboration</li>
                    </ul>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-xl">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                      <Film size={20} className="text-[#FFF9EB]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Get in Touch</h3>
                    <p className="text-[#1A1A1A]/70 text-sm">
                      Interested in collaboration, festival submissions, or licensing inquiries?
                    </p>
                    <Link
                      href="/contact?subject=Film%20Collaboration"
                      className="inline-flex items-center gap-1 text-[#7A1F26] hover:text-[#D4AF37] font-medium text-sm"
                    >
                      Start a Conversation
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact?subject=Film%20Assets"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#1A1A1A] mobile-transition text-sm font-medium"
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
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center shadow-lg tap-highlight-transparent"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#1A1A1A]" />
        </button>
      )}

      {/* Mobile Bottom Spacer */}
      <div className="h-4 lg:hidden bg-transparent"></div>
    </div>
  )
}