"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Book, Film, Users, ChevronUp, Sparkles, Quote, Menu } from "lucide-react"

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    if (!isClient) return
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      })
    }
  }

  // Book links data - simplified for mobile
  const bookLinks = [
    {
      store: "Amazon",
      url: "https://www.amazon.com/Strangest-Fruit-Collected-Stories/dp/B0FRW1688Q",
      color: "from-[#D4AF37] to-[#F4C430]"
    },
    {
      store: "Barnes & Noble",
      url: "https://www.barnesandnoble.com/w/the-strangest-of-fruit-sharbari-ahmed/1148333148",
      color: "from-[#7A1F26] to-[#9D2935]"
    },
    {
      store: "ThriftBooks",
      url: "https://www.thriftbooks.com/w/the-strangest-of-fruit-collected-stories/56953199/",
      color: "from-[#D4AF37] to-[#F4C430]"
    }
  ]

  // Don't render scroll indicator during SSR
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFF9EB]">
        <Header />
        <main className="flex-1"></main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EB] text-[#1A1A1A]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500&family=Lora:wght@400;500&display=swap');
        
        h1, h2, h3 {
          font-family: 'Playfair Display', serif;
        }
        
        .font-subheading {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body {
          font-family: 'Lora', serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Prevent text overflow on mobile */
        .text-balance {
          text-wrap: balance;
        }

        /* Improve touch targets */
        .touch-target {
          min-height: 44px;
          min-width: 44px;
        }

        /* Mobile-optimized scroll behavior */
        @media (max-width: 768px) {
          html {
            scroll-behavior: smooth;
          }
          
          /* Prevent horizontal scroll */
          body {
            overflow-x: hidden;
            max-width: 100vw;
          }
        }
      `}</style>

      <Header />

      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section - Mobile Optimized */}
        <section 
          ref={heroRef}
          className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(122, 31, 38, 0.9), rgba(26, 26, 26, 0.95)), url('https://images.unsplash.com/photo-1603372982970-6d2ab6728d81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'scroll' // Fixed parallax can be janky on mobile
          }}
        >
          {/* Simplified pattern for mobile */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Mobile-optimized decorative borders */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

          {/* Reduced number of particles for mobile */}
          {isClient && (
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-float"
                  style={{
                    left: `${(i * 15) % 100}%`,
                    top: `${(i * 20) % 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.4,
                  }}
                />
              ))}
            </div>
          )}

          {/* Mobile-optimized Hero Content */}
          <div className="relative z-10 w-full max-w-lg px-4 text-center animate-fade-in">
            {/* Mobile Badge */}
             <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
            <div className="inline-block mb-6 touch-target">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFF9EB]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/20">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <p className="font-subheading text-sm text-[#D4AF37] tracking-wide">
                  WRITER • FILMMAKER • SPEAKER
                </p>
              </div>
            </div>

            {/* Responsive typography */}
            <div className="d-flex align-item-center">
            <img className="w-60 h-60" src="/images/logo.png" alt="" />
              </div>
            {/* Mobile-friendly separator */}
            <div className="relative my-8">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-[#D4AF37] rotate-45 bg-[#FFF9EB]"></div>
            </div>

            {/* Mobile-optimized text with proper line breaks */}
            <p className="font-subheading text-lg text-[#FFF9EB]/90 mb-6 font-light leading-relaxed px-2 text-balance">
              Where <span className="text-[#D4AF37] font-medium">literary fiction</span> meets{" "}
              <span className="text-[#D4AF37] font-medium">historical narrative</span>—stories that transcend borders.
            </p>

            <p className="text-base text-[#FFF9EB]/80 mb-8 font-light italic px-2">
              "The pen writes what the heart remembers."
            </p>

            {/* Stacked CTAs for mobile */}
            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <button
                onClick={() => scrollToSection("work")}
                className="group relative w-full max-w-sm px-6 py-4 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] font-subheading text-base rounded-lg hover:shadow-[0_0_20px_rgba(122,31,38,0.4)] transition-all duration-300 active:scale-95 touch-target"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <Link
                href="/books"
                className="group relative w-full max-w-sm px-6 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-subheading text-base rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300 active:scale-95 touch-target"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Browse Books
                  <Book size={18} />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile scroll indicator */}
          {isClient && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#D4AF37] via-[#F4C430] to-transparent"></div>
            </div>
          )}
        </section>

        {/* Introduction Section - Mobile Optimized */}
        <section id="about-intro" className="relative bg-[#FFF9EB] px-4 py-12 overflow-hidden">
          {/* Simplified pattern for mobile performance */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(45deg, #7A1F26 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
          
          {/* Smaller corner accents for mobile */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#D4AF37]"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#D4AF37]"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#D4AF37]"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#D4AF37]"></div>

          <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <div className="h-0.5 w-6 bg-[#D4AF37]"></div>
                <span className="font-subheading text-[#D4AF37] tracking-wide text-xs">THE AUTHOR</span>
                <div className="h-0.5 w-6 bg-[#D4AF37]"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-balance">
                Literary Voice,
                <br />
                <span className="text-[#7A1F26]">Timeless Stories</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-6 h-6 text-[#D4AF37]/20 rotate-180" />
                <p className="text-lg text-[#1A1A1A]/90 leading-relaxed font-light px-4 text-balance">
                  Sharbari Ahmed is a{" "}
                  <span className="text-[#7A1F26] font-medium">Bangladeshi-American writer</span> whose work explores identity, memory, and history.
                </p>
                <Quote className="absolute -bottom-4 -right-4 w-6 h-6 text-[#D4AF37]/20" />
              </div>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
              
              <p className="text-base text-[#1A1A1A]/70 leading-relaxed px-2 text-balance">
                Her fiction and screenwriting blend{" "}
                <span className="text-[#7A1F26] font-medium">historical depth</span> with{" "}
                <span className="text-[#7A1F26] font-medium">emotional precision</span>.
              </p>
            </div>

            {/* Mobile-optimized stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: "15+", label: "Years" },
                { number: "3", label: "Books" },
                { number: "∞", label: "Stories" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#7A1F26] mb-1">
                    {stat.number}
                  </div>
                  <div className="font-subheading text-xs text-[#1A1A1A]/70 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Book Section - Mobile Optimized */}
        <section id="work" className="relative bg-gradient-to-b from-[#FFF9EB] to-[#F8F0E3] px-4 py-12 overflow-hidden">
          {/* Mobile border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1F26] via-[#D4AF37] to-[#7A1F26]"></div>
          
          <div className="space-y-8 relative z-10">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-[#7A1F26]/10 rounded-full">
                <p className="font-subheading text-sm text-[#7A1F26] tracking-wide">LATEST RELEASE</p>
              </div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] text-balance">
                The Strangest of Fruit
              </h2>
              <p className="font-subheading text-lg text-[#D4AF37] italic">A Collection of Stories</p>
            </div>

            <div className="space-y-8">
              {/* Mobile-optimized book cover */}
              <div className="relative group max-w-xs mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37] to-[#7A1F26] rounded-lg blur opacity-20"></div>
                
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#7A1F26] via-[#9D2935] to-[#1A1A1A] rounded-lg overflow-hidden shadow-lg active:scale-95 transition-transform">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-[#D4AF37] text-xs tracking-widest mb-2">SHORT STORIES</div>
                      <h3 className="text-2xl font-bold text-[#FFF9EB] mb-1 leading-tight">The Strangest<br/>of Fruit</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="text-[#D4AF37] text-sm">★</div>
                        ))}
                      </div>
                      <p className="text-[#FFF9EB]/80 text-xs italic">
                        "A haunting exploration of borders."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile-optimized book details */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] leading-tight text-balance">
                    Stories That
                    <br />
                    <span className="text-[#7A1F26]">Cross Borders</span>
                  </h3>
                  
                  <div className="h-0.5 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                  
                  <p className="text-base text-[#1A1A1A]/80 leading-relaxed text-balance">
                    A luminous collection examining migration, womanhood, love, and the myths we carry across generations.
                  </p>
                </div>

                {/* Mobile purchase links */}
                <div className="space-y-4">
                  <p className="font-subheading text-base text-[#7A1F26]">Available from:</p>
                  <div className="space-y-3">
                    {bookLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block p-3 bg-gradient-to-r ${link.color} border border-[#D4AF37]/20 rounded-lg active:scale-95 transition-transform touch-target`}
                      >
                        <span className="flex items-center justify-between text-[#FFF9EB] font-medium text-sm">
                          {link.store}
                          <ArrowRight size={14} className="group-active:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/books" 
                  className="inline-flex items-center gap-2 text-[#7A1F26] hover:text-[#9D2935] text-base font-semibold touch-target py-2"
                >
                  View All Publications
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Offerings - Mobile Optimized */}
        <section id="offerings" className="relative bg-[#1A1A1A] text-[#FFF9EB] px-4 py-12 overflow-hidden">
          <div className="space-y-8 relative z-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2">
                <div className="h-0.5 w-8 bg-[#D4AF37]"></div>
                <span className="font-subheading text-sm text-[#D4AF37] tracking-wide">CREATIVE DOMAINS</span>
                <div className="h-0.5 w-8 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-3xl font-bold text-balance">
                My Creative
                <br />
                <span className="text-[#D4AF37]">Universe</span>
              </h2>
            </div>

            <div className="space-y-4">
              {/* Mobile card with touch optimization */}
              {[
                {
                  icon: Book,
                  title: "Literary Fiction",
                  description: "Novels and stories exploring cultural identity and historical memory.",
                  link: "/books",
                  linkText: "Read Now"
                },
                {
                  icon: Film,
                  title: "Cinema",
                  description: "Award-winning films and screenplays bringing stories to visual life.",
                  link: "/films",
                  linkText: "Watch Films"
                },
                {
                  icon: Users,
                  title: "Mentorship",
                  description: "Story consulting and writing mentorship for writers.",
                  link: "/consulting",
                  linkText: "Learn More"
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div 
                    key={index} 
                    className="group relative p-6 rounded-lg bg-gradient-to-br from-[#7A1F26]/20 to-[#1A1A1A] border border-[#7A1F26]/30 active:border-[#D4AF37] active:scale-95 transition-all touch-target"
                  >
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center">
                      <Icon className="text-[#1A1A1A]" size={18} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 pr-12">{item.title}</h3>
                    <p className="text-[#FFF9EB]/70 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <Link 
                      href={item.link} 
                      className="inline-flex items-center gap-1 text-[#D4AF37] font-medium text-sm active:text-[#F4C430] touch-target py-1"
                    >
                      {item.linkText}
                      <ArrowRight size={14} className="group-active:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA - Mobile Optimized */}
        <section className="relative bg-gradient-to-br from-[#FFF9EB] via-[#F8F0E3] to-[#FFF9EB] px-4 py-8 overflow-hidden">
          {/* Simple border for mobile */}
          <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-lg"></div>

          <div className="text-center space-y-6 py-8 relative z-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1A1A1A] text-balance">
                Join the
                <br />
                <span className="text-[#7A1F26]">Literary Journey</span>
              </h2>
              <p className="text-base text-[#1A1A1A]/70 max-w-sm mx-auto text-balance">
                Exclusive writings, behind-the-scenes insights, and announcements.
              </p>
            </div>

            <Link
              href="https://sharbariahmed.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] font-subheading text-base rounded-lg active:scale-95 transition-transform touch-target"
            >
              <span>Visit Substack</span>
              <ArrowRight size={18} className="group-active:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile-optimized Scroll to Top Button */}
      {isClient && showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform touch-target"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#1A1A1A]" />
        </button>
      )}

      {/* Mobile Navigation Helper (optional) */}
      {isClient && window.innerWidth < 768 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#FFF9EB] to-transparent h-16 pointer-events-none"></div>
      )}
    </div>
  )
}