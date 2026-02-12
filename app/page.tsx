"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Book, Film, Users, ChevronUp, Sparkles, Quote, Award, Star, Play, BookOpen, ChevronLeft, ChevronRight, Trophy, Calendar, PenTool } from "lucide-react"
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
      synopsis: "Sharbari’s debut novel follows Yasmine Khan, a savvy, independent woman running a nightclub in 1940’s Calcutta during WW2 catering to American military personnel. Set against the twilight of the British Raj, as empire frays and tensions simmer in the streets, the story lives inside the nightclub that feels like the last safe harbor for Yasmine’s chosen family of waifs, singers and dancers, the forgotten people who built a home inside the walls of the Bombay Duck.",
      image: "/images/dust.jpg"
    },
    {
      id: 3,
      title: "The Ocean of Mrs. Nagai",
      synopsis: "Stories that bridge continents and generations, exploring the immigrant experience and timeless connections.",
      image: "/images/ocean.jpg"
    }
  ]

 

  const TESTIMONIALS = [
  {
    quote: "Working with Sharbari completely transformed the way I think about writing. Real, brilliant, and disarmingly witty… she'll elevate your writing…",
    name: "Alexis Carmichael",
    role: "Manhattanville University MFA student in fiction"
  },
  
  
  // New testimonials added
  {
    quote: "When I began working with Sharbari, I had no idea how to write a screenplay. But over the course of a few months of working with her, I gradually became a better and more confident writer thanks to her. For new screenwriters, you never know where to start and Sharbari created a safe environment to ask those questions and learn. Her patience, knowledge, and passion for the art and craft of screenwriting is what I needed to know that I could be a writer too.",
    name: "Alexander Serrano",
    role: "MFA 2026 in Dramatic Writing, Fairfield University"
  },
  {
    quote: "Having Sharbari as a professor at Manhattanville changed the course of my life. She was the first screenwriting professor who saw something in me and told me I could do this for a living if I wanted to. She guided me in the beginning stages of my writing journey and helped nurture my voice and understanding of story structure. With her help I ended up at one of the best film programs in the country and am pursuing my dream of screenwriting and directing.",
    name: "Sarah Shankman",
    role: "USC MFA and Filmmaker"
  },
  {
    quote: "I took Sharbari's Screenplay Adaptations class and it has completely changed the course of my fiction and nonfiction writing. Having no prior experience in screenwriting, I felt like a fish out of water, but those fears quickly dissipated. Sharbari facilitates her workshops to be both encouraging and intense. I walked away with my eyes opened to the ways in which screenplays enhance and inform good writing; how one can improve upon the other, and how we use our emotions to connect physically with our readers. She pulls no punches in the best possible way.",
    name: "Julie Gorski",
    role: "MFA candidate in Creative Nonfiction, Manhattanville University"
  }
]

 const PRESS_QUOTES = [
  "Edwidge Danticat: A lyrical, compelling collection exploring migration, grief, and moments of joy.",
  "V. V. Ganeshananthan: Fearless voices name emotions with piercing honesty and linger long after the final page.",
  "Avni Doshi: A beautifully woven collection capturing terror, humor, and beauty across the full range of human experience.",
  "Susan Muaddi Darraj: Vivid, intimate stories rich in imagery and language, creating worlds that feel both familiar and awakening.",
  "Chaitali Sen: Innovative, haunting, and joyful stories examining identity and pain with remarkable artistry."
];


 // ... existing code before awards section ...

  // Updated awards data with new award
  const AWARDS = [
    {
      id: 1,
      title: "Winner: Best Unproduced Feature Screenplay",
      organization: "Istanbul Women Films Awards",
      year: "2026",
      description: "Recognized for outstanding screenplay writing in the unproduced feature category.",
      image: "/images/istanbul.png",
      category: "screenplay",
      featured: true
    },
    {
      id: 2,
      title: "Best Pilot Script",
      organization: "Season October - December 2025",
      year: "2025",
      description: "Awarded for 'Bombay Duck' - an exceptional television pilot script.",
      image: "/images/pilot.png",
      category: "television",
      scriptName: "Bombay Duck"
    },
    {
      id: 3,
      title: "Award for Short Story",
      organization: "First Words South Asian Literary Awards",
      year: "2025",
      description: "Winner for the short story 'Raisins Not Virgins'.",
      image: "/images/award-trophy.png", // You can add this image later
      category: "literary",
      storyTitle: "Raisins Not Virgins",
      featured: false
    },
    {
      id: 4,
      title: "Nominated",
      organization: "Jaipur International Film Festival (JIFF)",
      year: "2026",
      description: "Official selection and nomination at one of India's premier film festivals.",
      image: "/images/jiff.png",
      category: "film festival"
    }
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
            <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold text-white mb-4 leading-tight">
             • Writer • Filmmaker • Speaker
            </h1>
            {/* Subtitle */}
            <p className="font-['Cormorant_Garamond'] text-lg md:text-xl text-[#E3E7C8] font-semibold max-w-3xl mx-auto">
              "Challenging the stories we inherit — and who gets to tell them."

            </p>  
            
          
            
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
        <section id="work" className="relative bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] px-4 py-16 md:py-24 overflow-hidden">
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
    
    <Link href="/films" className="flex items-center gap-2 text-[#B7C83E] font-subheading font-semibold text-lg hover:gap-3 transition-all">
      <span>View All Projects</span>
      <ArrowRight size={18} />
    </Link>
  </div>

  {/* Films Grid */}
  <div className="space-y-6 md:space-y-8">
    {/* Rickshaw Girl */}
    <div className="bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] rounded-2xl overflow-hidden border border-[#E3E7C8] shadow-xl hover-lift hover-glow transition-all group">
      {/* Film Image */}
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/10 to-[#6F7F1E]/10 flex items-center justify-center">
          <Film size={48} className="text-[#B7C83E]/30" />
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
          <a 
            href="https://tv.apple.com/us/clip/rickshaw-girl/umc.cmc.3ighgmeon5sls5va3kcpiyru1?targetId=umc.cmc.2wm6zyigg0vo53o0whw3faymt&targetType=Movie&playableId=tvs.sbd.9001%3A1655009323_APPLE_GENERATED_261423990"
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
            Feature Film
          </span>
        </div>
      </div>

      {/* Film Details */}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-white mb-2">
            Rickshaw Girl
          </h4>
          <p className="text-[#B7C83E] font-subheading text-sm">
            Screenwriter
          </p>
          <p className="text-[#9CA3AF] text-sm mt-1">
            Sleeperwave Films, 2022 — Dir. Amitabh Reza Choudhury
          </p>
        </div>
        
        <p className="text-[#D1D5DB] text-sm mb-4 leading-relaxed">
          A daring teenage girl disguises herself as a boy and pedals a rickshaw on the gritty streets of Dhaka, Bangladesh to earn extra cash for her struggling family, all while pursuing her dream of becoming an artist.
        </p>

        <div className="flex items-start gap-2 mb-4 text-xs text-[#9CA3AF]">
          <span className="text-[#B7C83E]">Source:</span>
          <span>Wikipedia</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="https://tv.apple.com/us/clip/rickshaw-girl/umc.cmc.3ighgmeon5sls5va3kcpiyru1?targetId=umc.cmc.2wm6zyigg0vo53o0whw3faymt&targetType=Movie&playableId=tvs.sbd.9001%3A1655009323_APPLE_GENERATED_261423990"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#B7C83E] text-[#2E2F1F] font-medium rounded-lg hover:bg-[#9CAF3E] transition-all border border-[#E3E7C8] text-sm"
          >
            <Play size={16} />
            <span>Watch Trailer</span>
          </a>
          
        
        </div>
      </div>
    </div>

    {/* Level 3 */}
    <div className="bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] rounded-2xl overflow-hidden border border-[#E3E7C8] shadow-xl hover-lift hover-glow transition-all group">
      {/* Film Image */}
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/10 to-[#6F7F1E]/10 flex items-center justify-center">
          <PenTool size={48} className="text-[#B7C83E]/30" />
        </div>

        {/* In Production Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-[#E3E7C8] rounded-full">
          <span className="font-subheading text-xs font-semibold text-[#B7C83E] uppercase tracking-wider">
            In Post-Production
          </span>
        </div>
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#B7C83E]/20 backdrop-blur-sm border border-[#E3E7C8] rounded-full">
          <span className="font-subheading text-xs font-semibold text-[#B7C83E]">
            2026
          </span>
        </div>
      </div>

      {/* Film Details */}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-white mb-2">
            "Level 3"
          </h4>
          <p className="text-[#B7C83E] font-subheading text-sm">
            Written & Directed by Sharbari
          </p>
          <p className="text-[#9CA3AF] text-sm mt-1">
            West Kelsey Productions, 2026
          </p>
        </div>
        
        <p className="text-[#D1D5DB] text-sm mb-4 leading-relaxed">
          A celebrated literature professor hiding a life overtaken by hoarding must confront lived trauma and the scourge of perfectionism when her estranged daughter, a beautiful, talented ballerina, seeks to reconnect with her after 12 years.
        </p>

        <div className="mb-4 p-3 bg-[#B7C83E]/10 border border-[#E3E7C8] rounded-lg">
          <p className="text-xs text-[#B7C83E]">
            🎬 Currently in post-production. More details coming soon.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E3E7C8] to-transparent"></div>
          <span className="text-xs text-[#9CA3AF] font-subheading">Short Film</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E3E7C8] to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </section>

        {/* New Awards Section */}
        {/* <section className="relative bg-gradient-to-b from-[#2E2F1F] to-[#1F2937] px-4 py-16 md:py-24 overflow-hidden">
          
          <div 
            className="absolute inset-0 opacity-[2%]"
            style={{
              backgroundImage: 'url(/images/dust.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              mixBlendMode: 'overlay'
            }}
          ></div>
          
        
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B7C83E' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          
         
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#B7C83E]/20 rounded-full animate-spin"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#B7C83E]/10 rounded-full animate-float"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
                  <Trophy size={24} className="text-[#B7C83E]" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Awards & <span className="text-gradient">Recognition</span>
              </h2>
              
              <p className="font-['Lato'] text-lg md:text-xl text-[#D1D5DB] font-semibold max-w-2xl mx-auto">
                Recent accolades and recognition for screenwriting excellence
              </p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {AWARDS.map((award) => (
                <div 
                  key={award.id}
                  className="bg-[#F9FAF4] rounded-2xl overflow-hidden shadow-xl hover-lift transition-all group border border-[#E3E7C8]"
                >
            
                  <div className="relative h-48 bg-gradient-to-br from-[#2E2F1F] to-[#1F2937] overflow-hidden">
                    <Image
                      src={award.image}
                      alt={`${award.title} - ${award.organization}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
               
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                   
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1.5 rounded-full backdrop-blur-sm border ${
                        award.featured 
                          ? 'bg-[#B7C83E]/20 border-[#B7C83E]' 
                          : 'bg-black/40 border-[#E3E7C8]'
                      }`}>
                        <span className={`font-subheading text-xs font-semibold uppercase tracking-wider ${
                          award.featured ? 'text-[#B7C83E]' : 'text-white'
                        }`}>
                          {award.featured ? 'Winner' : award.title.includes('Nominated') ? 'Nominee' : 'Award'}
                        </span>
                      </div>
                    </div>
                    
                   
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-[#B7C83E] rounded-full flex items-center justify-center border border-white shadow-lg">
                        <span className="font-bold text-white text-sm">{award.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-[#2E2F1F] mb-1">
                          {award.title}
                        </h4>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
                            <Award size={12} className="text-[#B7C83E]" />
                          </div>
                          <span className="font-subheading text-sm font-semibold text-[#B7C83E]">
                            {award.organization}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[#5F6148] text-sm mb-4">
                      {award.description}
                    </p>
                    
                    {award.scriptName && (
                      <div className="mt-4 pt-4 border-t border-[#E3E7C8]">
                        <div className="font-subheading text-sm font-semibold text-[#2E2F1F] mb-1">
                          Script:
                        </div>
                        <div className="text-[#B7C83E] font-subheading font-semibold text-sm">
                          "{award.scriptName}"
                        </div>
                      </div>
                    )}
                    
                   
                    <div className="mt-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
                        award.category === 'screenplay' 
                          ? 'bg-[#B7C83E]/10 text-[#6F7F1E]' 
                          : award.category === 'television'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          {award.category === 'screenplay' ? 'Screenplay' : 
                           award.category === 'television' ? 'Television' : 'Film Festival'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            
          </div>
        </section> */}

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

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-12 md:mb-16">
      <div className="inline-flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
          <Quote size={24} className="text-[#B7C83E]" />
        </div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Testimonials & Events
      </h2>
      
      <p className="font-['Lato'] text-lg md:text-xl text-[#D1D5DB] font-semibold max-w-2xl mx-auto">
        Hear from students, collaborators, and literary conversations
      </p>
    </div>

    {/* Testimonial Grid - Updated with Video and Event */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Video Testimonial */}
      <div className="lg:col-span-2 bg-[#F9FAF4] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E3E7C8] overflow-hidden">
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
        
        <div className="relative z-10">
          {/* Video Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E]/20 to-transparent rounded-full flex items-center justify-center border border-[#E3E7C8]">
              <Play size={18} className="text-[#B7C83E]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#2E2F1F]">Video Testimonial</h3>
              <p className="text-sm text-[#5F6148]">Hear directly from students</p>
            </div>
          </div>
          
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#2E2F1F] to-[#1F2937]">
            {/* Video */}
            <video 
              className="w-full h-64 md:h-80 object-cover"
              autoPlay
              muted
              playsInline
              loop
              controls
              poster="/images/video-thumbnail.jpg"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            >
              <source src="/videos/amanda.mp4" type="video/mp4" />
              <source src="/videos/amanda.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Status Indicator */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-[#E3E7C8]">
              <span className="font-subheading text-xs font-semibold text-[#B7C83E] uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 bg-[#B7C83E] rounded-full animate-pulse"></span>
                Auto-playing
              </span>
            </div>
          </div>
          
          {/* Video Details */}
          <div>
            <div className="font-subheading text-base font-semibold text-[#2E2F1F] mb-1">
              Amanda Cabral
            </div>
            <div className="font-subheading text-sm text-[#5F6148] mb-3">
              MFA graduate, Sacred Heart University
            </div>
            <p className="text-[#5F6148] text-sm italic">
              "Sharbari's guidance was instrumental in shaping my thesis and finding my authentic voice as a writer."
            </p>
          </div>
        </div>
      </div>

      {/* Literary Event Card */}
      <div className="bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E3E7C8] overflow-hidden hover-lift transition-all group">
        {/* Dust Texture Background */}
        <div 
          className="absolute inset-0 opacity-[5%] rounded-3xl"
          style={{
            backgroundImage: 'url(/images/dust.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0h15v15H15V0zM0 15h15v15H0V15z' fill='%232E2F1F' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Event Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <Book size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Literary Conversation</h3>
              <p className="text-sm text-white/80">Featured Event</p>
            </div>
          </div>
          
          {/* Event Content */}
          <div className="flex-1">
            <div className="mb-4">
              <h4 className="text-xl font-bold text-white mb-2">
                Sharbari Ahmed + Nalini Jones
              </h4>
              <p className="text-white/90 text-sm font-italic italic mb-3">
                In Conversation On <span className="font-bold">THE STRANGEST OF FRUIT</span>
              </p>
              <p className="text-white/80 text-sm">
                A literary dialogue exploring migration, womanhood, and the myths we carry across generations.
              </p>
            </div>
            
            {/* Event Details */}
            <div className="space-y-3 mt-6 pt-6 border-t border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar size={12} className="text-white" />
                </div>
                <span className="text-white/90 text-sm font-subheading">Bookstore Event</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <Users size={12} className="text-white" />
                </div>
                <span className="text-white/90 text-sm font-subheading">Author Conversation</span>
              </div>
            </div>
          </div>
          
          {/* Event CTA */}
          <Link 
            href="https://www.barrettbookstore.com/event/sharbari-ahmed-nalini-jones-conversation-strangest-fruit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            <button className="w-full py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white font-subheading font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-[#2E2F1F] transition-all duration-300 group-hover:scale-[1.02]">
              <span>View Event Details</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>

      {/* Text Testimonials Slider */}
      <div className="lg:col-span-3 bg-[#F9FAF4] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E3E7C8] relative">
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
        <div className="absolute top-6 left-6 text-5xl font-['Playfair_Display'] text-[#B7C83E]/10">
          "
        </div>
        
        <div className="relative z-10">
          <div className="min-h-[200px] flex flex-col justify-between">
            <p className="font-italic text-lg md:text-xl text-[#2E2F1F] italic mb-6 leading-relaxed">
              {TESTIMONIALS[currentTestimonial]?.quote || "Working with Sharbari completely transformed the way I think about writing. Real, brilliant, and disarmingly witty… she'll elevate your writing…"}
            </p>
            
            <div>
              <div className="font-subheading text-base font-semibold text-[#2E2F1F] mb-1">
                {TESTIMONIALS[currentTestimonial]?.name || "Alexis Carmichael"}
              </div>
              <div className="font-subheading text-sm text-[#5F6148]">
                {TESTIMONIALS[currentTestimonial]?.role || "Manhattanville University MFA student in fiction"}
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E3E7C8]">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'w-6 bg-[#B7C83E]' 
                      : 'w-2 bg-[#B7C83E]/30 hover:bg-[#B7C83E]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentTestimonial((prev) => 
                  prev === 0 ? (TESTIMONIALS.length - 1) : prev - 1
                )}
                className="w-9 h-9 bg-[#B7C83E]/10 rounded-full flex items-center justify-center hover:bg-[#B7C83E] hover:text-[#F9FAF4] transition-all border border-[#E3E7C8]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => 
                  (prev + 1) % TESTIMONIALS.length
                )}
                className="w-9 h-9 bg-[#B7C83E]/10 rounded-full flex items-center justify-center hover:bg-[#B7C83E] hover:text-[#F9FAF4] transition-all border border-[#E3E7C8]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
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
  {PRESS_QUOTES.map((quote, index) => {
    // Split quote & author
    const [author, text] = quote.split(": ");
    return (
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
          <div className="relative z-10 text-center">
            {/* Quote */}
            <p className="font-italic text-lg md:text-xl text-[#2E2F1F] italic mb-4 leading-relaxed">
              "{text}"
            </p>

            {/* Author */}
            <p className="font-bold text-[#5F6148] text-base md:text-lg">
              — {author}
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-12 h-0.5 bg-[#B7C83E]"></div>
              <div className="w-2 h-2 bg-[#B7C83E] rounded-full"></div>
              <div className="w-12 h-0.5 bg-[#B7C83E]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>


            {/* Publication Logos - Updated with NBC News Interview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
              {[
                { 
                  name: 'NBC News', 
                  color: '#E1AD01', 
                  link: 'https://www.nbcnews.com/news/asian-america/quantico-writer-sharbari-ahmed-perseverance-identity-life-writers-room-n491216',
                  subtitle: 'Interview: On Perseverance & Identity',
                  featured: true 
                },
              ].map((pub, index) => (
                <Link 
                  href={pub.link || '#'} 
                  key={index}
                  target={pub.link ? "_blank" : "_self"}
                  rel={pub.link ? "noopener noreferrer" : ""}
                  className={`block ${pub.link ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#E3E7C8] hover-lift transition-all group relative h-full">
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
                    
                    {/* Special highlight for featured interview */}
                    {pub.featured && (
                      <div className="absolute -top-2 -right-2">
                        <div className="w-6 h-6 bg-[#B7C83E] rounded-full flex items-center justify-center border border-white shadow-sm">
                          <Star size={12} className="text-white" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B7C83E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    
                    <div className="relative z-10">
                      {/* Publication Name */}
                      <div className="font-bold text-xl md:text-2xl mb-1" style={{ color: pub.color }}>
                        {pub.name.split(' ')[0]}
                      </div>
                      <div className="font-subheading text-sm text-[#5F6148] tracking-wide">
                        {pub.name.split(' ').slice(1).join(' ')}
                      </div>
                      
                      {/* Interview subtitle for NBC News */}
                      {pub.subtitle && (
                        <div className="mt-3 pt-3 border-t border-[#E3E7C8]">
                          <div className="font-subheading text-xs text-[#B7C83E] font-semibold uppercase tracking-wider">
                            {pub.subtitle}
                          </div>
                          <div className="text-xs text-[#5F6148] mt-1">
                            'Quantico' writer on perseverance & identity
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
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