"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Book, Film, Users, ChevronUp, Sparkles, Quote, Award, Star, Play, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentPressQuote, setCurrentPressQuote] = useState(0)
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

  // Mouse tracking for parallax effects
  useEffect(() => {
    if (!isClient) return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isClient])

  // Updated book data with correct images
  const BOOKS = [
    {
      id: 1,
      title: "The Strangest of Fruit",
      synopsis: "A luminous collection examining migration, womanhood, love, and the myths we carry across generations.",
      image: "/images/fruit.jpeg"
    },
    {
      id: 2,
      title: "Dust Under Her Feet",
      synopsis: "A novel exploring identity, belonging, and the traces we leave behind through the lens of cultural displacement.",
      image: "/images/dust.jpg"
    },
    {
      id: 3,
      title: "The Ocean of Mrs. Nagai",
      synopsis: "Stories that bridge continents and generations, exploring the immigrant experience and timeless connections.",
      image: "/images/ocean.jpg"
    }
  ]

  const FILMS = [
    {
      id: 1,
      title: "The Third Wife",
      description: "A cinematic exploration of tradition and transformation in colonial Bengal.",
      type: "feature",
      awards: ["Sundance Film Festival Award"],
      image: "/images/film1.jpg"
    },
    {
      id: 2,
      title: "Tales of a City by the Sea",
      description: "An intimate portrait of resilience and community in coastal Bangladesh.",
      type: "documentary",
      awards: ["Dhaka International Film Festival Award"],
      image: "/images/film2.jpg"
    }
  ]

  const TESTIMONIALS = [
    {
      quote: "Working with Sharbari completely transformed the way I think about writing. Real, brilliant, and disarmingly witty… she'll elevate your writing…",
      name: "Alexis Carmichael",
      role: "Manhattanville University MFA student in fiction"
    },
    {
      quote: "Sharbari's mentorship helped me find my authentic voice as a writer. Her insights are invaluable.",
      name: "Sarah Johnson",
      role: "Aspiring novelist"
    },
    {
      quote: "A masterful teacher who understands the intersection of craft and commerce in publishing.",
      name: "Michael Chen",
      role: "Writing workshop participant"
    }
  ]

  const PRESS_QUOTES = [
    "Ahmed writes with a rare combination of lyricism and urgency.",
    "These stories resonate with the quiet power of lived experience.",
    "A vital voice in contemporary literature.",
    "Masterful storytelling that crosses borders and boundaries."
  ]

  // Testimonial slider auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Press quotes auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPressQuote((prev) => (prev + 1) % PRESS_QUOTES.length)
    }, 7000)
    return () => clearInterval(interval)
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

  // Don't render during SSR
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
    <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Lato:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Lora:wght@400;500;600;700&display=swap');
        
        h1, h2, h3 {
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
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin {
          animation: spin 20s linear infinite;
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
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(183, 200, 62, 0.12) !important;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-glow:hover {
          box-shadow: 0 0 40px rgba(183, 200, 62, 0.3) !important;
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        /* Mobile optimizations */
        .text-balance {
          text-wrap: balance;
        }

        .touch-target {
          min-height: 44px;
          min-width: 44px;
        }

        @media (max-width: 768px) {
          html {
            scroll-behavior: smooth;
          }
          
          body {
            overflow-x: hidden;
            max-width: 100vw;
          }
        }
      `}</style>

      <Header />

      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section - Updated Theme */}
        <section 
          ref={heroRef}
          className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
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
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(183, 200, 62, 0.15) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-[#B7C83E]/30 rounded-full animate-spin"></div>
          <div className="absolute bottom-30 right-15 w-32 h-32 border border-[#B7C83E]/15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-4xl px-4 text-center animate-fade-in">
            {/* Logo/Name */}
            <div className="mb-8">
              <div className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#B7C83E] tracking-widest uppercase mb-2">
                Sharbari Zohra Ahmed
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
              Writer • Filmmaker • Speaker
            </h1>
            
            {/* Subtitle */}
            <div className="font-['Lato'] text-xl md:text-2xl font-semibold text-[#E5E7EB] mb-8 tracking-widest uppercase">
              Challenging the stories we inherit
            </div>
            
            {/* Quote */}
            <div className="relative my-12">
              <div className="absolute top-1/2 left-0 w-10 h-px bg-[#B7C83E] transform -translate-y-1/2"></div>
              <p className="font-italic text-xl md:text-2xl text-[#F3F4F6] italic px-8 md:px-12">
                "Challenging the stories we inherit — and who gets to tell them."
              </p>
              <div className="absolute top-1/2 right-0 w-10 h-px bg-[#B7C83E] transform -translate-y-1/2"></div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
              <button
                onClick={() => scrollToSection("work")}
                className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-subheading text-lg font-semibold rounded-full hover:from-[#6F7F1E] hover:to-[#6F7F1E] hover:text-[#F9FAF4] hover:shadow-[0_15px_40px_rgba(183,200,62,0.4)] transition-all duration-300 active:scale-95 touch-target hover-scale"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <Link
                href="/consulting"
                className="group relative w-full md:w-auto px-8 py-4 bg-transparent border-2 border-[#B7C83E] text-[#B7C83E] font-subheading text-lg font-semibold rounded-full hover:bg-[#6F7F1E] hover:border-[#6F7F1E] hover:text-[#F9FAF4] transition-all duration-300 active:scale-95 touch-target hover-scale"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Book a Consultation
                </span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-12">
              <div className="flex flex-col items-center gap-2 opacity-80 animate-float">
                <span className="font-subheading text-sm text-[#9CA3AF] tracking-widest">
                  Scroll
                </span>
                <div className="w-px h-16 bg-gradient-to-b from-[#B7C83E] via-[#6F7F1E] to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Works Section */}
        <section className="relative bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] px-4 py-16 md:py-24 overflow-hidden">
          {/* Dust Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[3%]"
            style={{
              backgroundImage: 'url(/images/dust.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#B7C83E]/10 to-transparent"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
                  <BookOpen size={24} className="text-[#B7C83E]" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Featured <span className="text-gradient">Works</span>
              </h2>
              
              <p className="font-['Lato'] text-lg md:text-xl text-[#5F6148] font-semibold max-w-2xl mx-auto">
                Award-winning books and films exploring identity, migration, and the human experience
              </p>
            </div>

            {/* Books Section */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
                    <BookOpen size={28} className="text-[#B7C83E]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Books
                  </h3>
                </div>
                
                <Link href="/books" className="flex items-center gap-2 text-[#B7C83E] font-subheading font-semibold text-lg hover:gap-3 transition-all">
                  <span>View All Books</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {BOOKS.map((book) => (
                  <div 
                    key={book.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-all group border border-[#E3E7C8]"
                  >
                    {/* Book Cover with actual image */}
                    <div className="relative h-64 md:h-80 bg-[#F3F4F6] overflow-hidden">
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Book Details */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3 line-clamp-2 text-[#2E2F1F]">
                        {book.title}
                      </h4>
                      
                      <p className="text-[#5F6148] text-sm mb-4 line-clamp-3">
                        {book.synopsis}
                      </p>
                      
                      <Link href={`/books/${book.id}`} className="w-full">
                        <button className="w-full p-3 bg-gradient-to-r from-[#B7C83E]/10 to-transparent border border-[#B7C83E]/30 rounded-lg text-[#2E2F1F] font-subheading font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-[#6F7F1E] hover:to-[#6F7F1E] hover:text-[#F9FAF4] hover:border-[#6F7F1E] transition-all">
                          Explore Book
                          <ArrowRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Films Section */}
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
                    <Film size={28} className="text-[#B7C83E]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Films
                  </h3>
                </div>
                
                <Link href="/film" className="flex items-center gap-2 text-[#B7C83E] font-subheading font-semibold text-lg hover:gap-3 transition-all">
                  <span>View All Projects</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Films Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {FILMS.map((film) => (
                  <div 
                    key={film.id}
                    className="bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] rounded-2xl overflow-hidden border border-[#E3E7C8] shadow-xl hover-lift hover-glow transition-all group"
                  >
                    {/* Film Image */}
                    <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/10 to-[#6F7F1E]/10 flex items-center justify-center">
                        <Film size={48} className="text-[#B7C83E]/30" />
                      </div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all group-hover:bg-[#B7C83E] group-hover:scale-110">
                          <Play size={24} className="text-[#2E2F1F]" />
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-[#E3E7C8] rounded-full">
                        <span className="font-subheading text-xs font-semibold text-[#B7C83E] uppercase tracking-wider">
                          {film.type}
                        </span>
                      </div>
                    </div>

                    {/* Film Details */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-3">
                        {film.title}
                      </h4>
                      
                      <p className="text-[#D1D5DB] text-sm mb-4">
                        {film.description}
                      </p>

                      {film.awards && film.awards.length > 0 && (
                        <div className="flex items-center gap-2 mb-4">
                          <Award size={16} className="text-[#B7C83E]" />
                          <span className="font-subheading text-sm text-[#9CA3AF]">
                            {film.awards[0]}
                          </span>
                        </div>
                      )}

                      <Link href={`/film/${film.id}`} className="inline-flex items-center gap-2 text-[#B7C83E] font-subheading font-semibold text-sm hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] px-4 py-16 md:py-24 overflow-hidden">
          {/* Dust Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[3%]"
            style={{
              backgroundImage: 'url(/images/dust.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              mixBlendMode: 'overlay'
            }}
          ></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B7C83E' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
                  <Quote size={24} className="text-[#B7C83E]" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Testimonials
              </h2>
              
              <p className="font-['Lato'] text-lg md:text-xl text-[#D1D5DB] font-semibold max-w-2xl mx-auto">
                Hear from students, collaborators, and readers
              </p>
            </div>

            {/* Testimonial Slider */}
            <div className="bg-[#F9FAF4] rounded-3xl p-8 md:p-12 shadow-2xl border border-[#E3E7C8]">
              {/* Dust Texture Background */}
              <div 
                className="absolute inset-0 opacity-[2%] rounded-3xl"
                style={{
                  backgroundImage: 'url(/images/dust.jpg)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              ></div>
              
              {/* Quote Mark */}
              <div className="absolute top-8 left-8 text-6xl font-['Playfair_Display'] text-[#B7C83E]/10">
                "
              </div>
              
              <div className="relative z-10">
                <p className="font-italic text-lg md:text-xl text-[#2E2F1F] italic mb-6 md:mb-8 leading-relaxed">
                  {TESTIMONIALS[currentTestimonial]?.quote || "Working with Sharbari completely transformed the way I think about writing. Real, brilliant, and disarmingly witty… she'll elevate your writing…"}
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="font-subheading text-base font-semibold text-[#2E2F1F] mb-1">
                      {TESTIMONIALS[currentTestimonial]?.name || "Alexis Carmichael"}
                    </div>
                    <div className="font-subheading text-sm text-[#5F6148]">
                      {TESTIMONIALS[currentTestimonial]?.role || "Manhattanville University MFA student in fiction"}
                    </div>
                  </div>
                  
                  {/* Testimonial Navigation */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCurrentTestimonial((prev) => 
                        prev === 0 ? (TESTIMONIALS.length - 1) : prev - 1
                      )}
                      className="w-10 h-10 bg-[#B7C83E]/10 rounded-full flex items-center justify-center hover:bg-[#B7C83E] hover:text-[#F9FAF4] transition-all border border-[#E3E7C8]"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    <button
                      onClick={() => setCurrentTestimonial((prev) => 
                        (prev + 1) % TESTIMONIALS.length
                      )}
                      className="w-10 h-10 bg-[#B7C83E]/10 rounded-full flex items-center justify-center hover:bg-[#B7C83E] hover:text-[#F9FAF4] transition-all border border-[#E3E7C8]"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-1 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'w-8 bg-[#B7C83E]' 
                        : 'w-2 bg-[#B7C83E]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Press & Praise Section */}
        <section className="relative bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] px-4 py-16 md:py-24 overflow-hidden">
          {/* Dust Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[2%]"
            style={{
              backgroundImage: 'url(/images/dust.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
          
          {/* Background Elements */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#B7C83E]/5 to-transparent rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
                  <Star size={24} className="text-[#B7C83E]" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Press & <span className="text-gradient">Praise</span>
              </h2>
              
              <p className="font-['Lato'] text-lg md:text-xl text-[#5F6148] font-semibold max-w-2xl mx-auto">
                What critics and publications are saying
              </p>
            </div>

            {/* Press Quotes */}
            <div className="max-w-3xl mx-auto mb-12 md:mb-16 relative h-64">
              {PRESS_QUOTES.map((quote, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-800 ease-in-out ${
                    index === currentPressQuote 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#E3E7C8] relative">
                    {/* Dust Texture in Card */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-[1%]"
                      style={{
                        backgroundImage: 'url(/images/dust.jpg)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    ></div>
                    <div className="relative z-10">
                      <p className="font-italic text-lg md:text-xl text-[#2E2F1F] italic text-center mb-6 leading-relaxed">
                        "{quote}"
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-0.5 bg-[#B7C83E]"></div>
                        <div className="w-2 h-2 bg-[#B7C83E] rounded-full"></div>
                        <div className="w-12 h-0.5 bg-[#B7C83E]"></div>
                      </div>
                      
                      <p className="font-subheading text-center text-[#5F6148] italic">
                        On "The Strangest of Fruit"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Publication Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {[
                { name: 'The New York Times', color: '#1F2937' },
                { name: 'The Guardian', color: '#1E40AF' },
                { name: 'LARB', color: '#92400E' },
                { name: 'Publishers Weekly', color: '#065F46' },
              ].map((pub, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#E3E7C8] hover-lift transition-all cursor-pointer group relative"
                >
                  {/* Dust Texture in Card */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-[1%] group-hover:opacity-[2%] transition-opacity"
                    style={{
                      backgroundImage: 'url(/images/dust.jpg)',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B7C83E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                  <div className="relative z-10">
                    <div className="font-bold text-xl md:text-2xl mb-1" style={{ color: pub.color }}>
                      {pub.name.split(' ')[0]}
                    </div>
                    <div className="font-subheading text-sm text-[#5F6148] tracking-wide">
                      {pub.name.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link href="/press" className="inline-block">
                <button className="px-8 py-4 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-subheading font-semibold rounded-full hover:from-[#6F7F1E] hover:to-[#6F7F1E] hover:text-[#F9FAF4] hover:shadow-[0_15px_40px_rgba(183,200,62,0.3)] transition-all duration-300 hover-scale flex items-center gap-3 mx-auto relative group border border-[#E3E7C8]">
                 
                  <span className="relative z-10">Read Full Features</span>
                  <Book size={20} className="relative z-10" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative bg-gradient-to-br from-[#B7C83E]/8 via-[#6F7F1E]/8 to-[#B7C83E]/8 px-4 py-16 md:py-24 overflow-hidden border-t border-[#E3E7C8]">
          
          
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
          
          {/* Background Pattern */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#B7C83E]/5 to-transparent rounded-full blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your <span className="text-gradient">Story?</span>
            </h2>
            
            <p className="font-['Lato'] text-lg md:text-xl text-[#5F6148] font-semibold mb-8 max-w-2xl mx-auto">
              Whether you're seeking mentorship, consultation, or collaboration, let's create something meaningful together.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/consulting" className="w-full md:w-auto">
                <button className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-subheading text-lg font-semibold rounded-full hover:from-[#6F7F1E] hover:to-[#6F7F1E] hover:text-[#F9FAF4] hover:shadow-[0_20px_50px_rgba(183,200,62,0.4)] transition-all duration-300 active:scale-95 touch-target hover-scale relative border border-[#E3E7C8]">
                  
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Start Consultation
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              
              <Link href="/contact" className="w-full md:w-auto">
                <button className="group w-full md:w-auto px-8 py-4 bg-transparent border-2 border-[#2E2F1F] text-[#2E2F1F] font-subheading text-lg font-semibold rounded-full hover:bg-[#2E2F1F] hover:text-[#F9FAF4] hover:border-[#2E2F1F] transition-all duration-300 active:scale-95 touch-target hover-scale relative">
                
                  <span className="relative z-10 flex items-center justify-center">
                    Get In Touch
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      

      {/* Scroll to Top Button */}
      {isClient && showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform touch-target hover-scale relative border border-[#E3E7C8]"
          aria-label="Scroll to top"
        >
          {/* Dust Texture on Button */}
          <div 
            className="absolute inset-0 rounded-full opacity-[10%]"
            style={{
              backgroundImage: 'url(/images/dust.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
          <ChevronUp size={20} className="text-[#2E2F1F] relative z-10" />
        </button>
      )}
      <Footer />
    </div>
  )
}