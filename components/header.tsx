"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Book, Film, MessageSquare, User, ChevronDown, Home, ArrowRight, PenTool, Sparkles, Moon, Sun } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true) // Always dark theme

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { 
      label: "About", 
      href: "/about",
      icon: User,
      description: "The Author's Journey"
    },
    { 
      label: "Books", 
      href: "/books",
      icon: Book,
      description: "Literary Works"
    },
    { 
      label: "Films", 
      href: "/films",
      icon: Film,
      description: "Cinematic Adaptations"
    },
    { 
      label: "Consulting", 
      href: "/consulting",
      icon: MessageSquare,
      description: "Literary Guidance"
    },
  
    { 
      label: "Blogs", 
      href: "/blog",
      icon: PenTool,
      description: "Thoughts & Musings"
    },
    { 
      label: "Contact", 
      href: "/contact",
      icon: MessageSquare,
      description: "Get in Touch"
    },
  ]

  const quickLinks = [
    { label: "Featured Publications", href: "/#works", icon: Book },
    { label: "Literary Services", href: "/#services", icon: PenTool },
    { label: "Substack Letters", href: "https://sharbariahmed.substack.com", external: true, icon: Sparkles },
    { label: "Upcoming Events", href: "/events", icon: Home },
  ]

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-[#D4AF37]/20 h-16 md:h-20">
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-between items-center h-full">
              <div className="relative flex items-center h-full">
                {/* Logo placeholder */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent flex items-center justify-center relative">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#7A1F26] to-[#9D2935] rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)] bg-[length:250%_250%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10"></div>
            </div>
          </nav>
        </header>
        <div className="h-16 md:h-20"></div>
      </>
    )
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 mobile-transition h-20 md:h-20 ${
          isScrolled 
            ? 'bg-[#1A1A1A]/95 backdrop-blur-xl shadow-2xl border-b border-[#D4AF37]/30' 
            : 'bg-[#1A1A1A]/90 backdrop-blur-md border-b border-[#D4AF37]/20'
        }`}
      >
        {/* Mughal Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
        
        {/* Gold Overlay on Scroll */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none"></div>
        )}

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div
              className="group relative flex items-center"
              onMouseEnter={() => setActiveDropdown('home')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/" className="relative">
                <div className="relative flex items-center gap-3 cursor-pointer group">
                  {/* Logo with Gold Border */}
                 
                  
                  {/* Name with Gold Accent */}
                  
                    <div className="relative">
                      <img className="w-40 pt-2 " src="/images/logo.png" alt="" />
                      {/* Gold underline */}
                      <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500"></div>
                    </div>
                    
                  </div>
                
              </Link>

              {/* Home Dropdown - Mughal Inspired */}
              {activeDropdown === 'home' && (
                <div 
                  className="absolute top-full left-0 mt-3 w-64 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg shadow-2xl py-2 backdrop-blur-xl z-50 overflow-hidden"
                  onMouseEnter={() => setActiveDropdown('home')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 bg-[url('/images/mughal-pattern.png')] opacity-5 pointer-events-none"></div>
                  
                  {/* Gold border top */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                  
                  <div className="relative px-4 py-3 border-b border-[#D4AF37]/20">
                    <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-cormorant">Quick Access</p>
                  </div>
                  {quickLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="relative flex items-center gap-3 px-4 py-3 text-[#FFF9EB]/80 hover:text-[#D4AF37] group mobile-transition hover:bg-gradient-to-r hover:from-[#D4AF37]/5 hover:to-transparent"
                        onClick={() => setIsOpen(false)}
                      >
                        {/* Gold line indicator */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-[#D4AF37] group-hover:h-4 transition-all duration-300"></div>
                        
                        <Icon size={14} className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
                        <span className="text-sm font-cormorant">{link.label}</span>
                        {link.external && (
                          <span className="ml-auto text-xs text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">↗</span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Desktop Navigation - Elegant Dark Theme */}
            <div className="hidden md:flex gap-2 items-center">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <div 
                    key={item.href} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      data-active={activeDropdown === item.label}
                      className="relative flex items-center gap-2 px-4 py-2.5 mobile-transition text-[#FFF9EB]/90 hover:text-[#D4AF37] group"
                    >
                      {/* Hover background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      
                      <Icon 
                        size={16} 
                        className="text-[#D4AF37]/70 group-hover:text-[#D4AF37] z-10 transition-colors" 
                      />
                      <span className="text-sm font-medium font-cormorant z-10">{item.label}</span>
                      <ChevronDown 
                        size={14}
                        className="mobile-transition text-[#D4AF37]/50 group-hover:text-[#D4AF37] group-hover:rotate-180 z-10" 
                      />
                      
                      {/* Gold underline animation */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] group-hover:w-3/4 transition-all duration-500"></div>
                    </Link>

                    {/* Dropdown Menu - Literary Style */}
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[240px] bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg shadow-2xl py-3 backdrop-blur-xl z-50 overflow-hidden"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {/* Decorative pattern */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1F26] via-[#D4AF37] to-[#7A1F26]"></div>
                        <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
                        
                        <div className="relative px-4 py-3 border-b border-[#D4AF37]/20">
                          <p className="text-xs text-[#FFF9EB] uppercase tracking-widest font-cormorant">{item.label}</p>
                          <p className="text-xs text-[#D4AF37]/60 mt-1">{item.description}</p>
                        </div>
                        
                        {/* Dropdown content would go here */}
                        <div className="relative px-4 py-3">
                          <p className="text-sm text-[#FFF9EB]/70 text-center font-cormorant italic">
                            Explore the journey
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* CTA Button - Gold Elegance */}
              <Link
                href="/contact"
                className="ml-4 relative px-6 py-2.5 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-[#FFF9EB] font-bold text-sm rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 mobile-transition border border-[#D4AF37]/40 group overflow-hidden"
              >
                {/* Gold shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Gold border animation */}
                <div className="absolute inset-0 rounded-lg p-px bg-gradient-to-r from-[#D4AF37] via-[#F4C430] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg bg-[#1A1A1A]"></div>
                </div>
                
                <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#F4C430] to-[#D4AF37] bg-clip-text text-transparent">
                  Begin Conversation
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - Gold Accented */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border border-[#D4AF37]/40 rounded-lg flex items-center justify-center hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] mobile-transition tap-highlight-transparent group overflow-hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {/* Gold shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {isOpen ? (
                <>
                  <X size={20} className="text-[#D4AF37] relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7A1F26]/20 to-[#D4AF37]/10"></div>
                </>
              ) : (
                <>
                  <Menu size={20} className="text-[#D4AF37] relative z-10" />
                  {/* Animated gold dots */}
                  <span className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></span>
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse delay-150"></span>
                  <span className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse delay-300"></span>
                  <span className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse delay-450"></span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Navigation - Dark Literary Theme */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] border-t border-[#D4AF37]/30 space-y-1 animate-slide-down py-4 px-4 shadow-2xl z-40 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
              
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              
              {/* Navigation Items */}
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative flex items-center gap-4 px-4 py-3.5 text-[#FFF9EB]/90 hover:text-[#D4AF37] mobile-transition rounded-lg overflow-hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Gold accent line */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-gradient-to-b from-[#D4AF37] to-[#F4C430] group-hover:h-6 transition-all duration-300"></div>
                    
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <Icon size={18} className="text-[#D4AF37]/70 group-hover:text-[#D4AF37] relative z-10 transition-colors" />
                    <div className="flex-1 relative z-10">
                      <span className="font-cormorant font-medium">{item.label}</span>
                      <p className="text-xs text-[#D4AF37]/40 mt-0.5">{item.description}</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 mobile-transition text-[#D4AF37]" />
                  </Link>
                )
              })}

              {/* Quick Links Section */}
              <div className="pt-4 mt-2 border-t border-[#D4AF37]/20">
                <p className="px-4 text-xs text-[#D4AF37] uppercase tracking-widest font-cormorant mb-3">Quick Links</p>
                {quickLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between px-4 py-3 text-[#FFF9EB]/70 hover:text-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37]/5 hover:to-transparent rounded-lg mobile-transition group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={14} className="text-[#D4AF37]/50 group-hover:text-[#D4AF37]" />
                        <span className="font-cormorant">{link.label}</span>
                      </div>
                      {link.external ? (
                        <span className="text-xs text-[#D4AF37]/50 group-hover:text-[#D4AF37]">↗</span>
                      ) : (
                        <ArrowRight size={12} className="text-[#D4AF37]/30 group-hover:text-[#D4AF37]" />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4 mt-3">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-[#FFF9EB] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] mobile-transition active:scale-95 border border-[#D4AF37]/40 relative overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Gold shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <span className="relative bg-gradient-to-r from-[#D4AF37] via-[#F4C430] to-[#D4AF37] bg-clip-text text-transparent">
                    Begin Conversation
                  </span>
                </Link>
              </div>

              {/* Decorative elements for mobile menu */}
              <div className="pt-6 flex justify-center gap-3">
                <div className="w-1 h-1 bg-gradient-to-r from-[#7A1F26] to-[#D4AF37] rounded-full"></div>
                <div className="w-1 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] rounded-full"></div>
                <div className="w-1 h-1 bg-gradient-to-r from-[#F4C430] to-[#7A1F26] rounded-full"></div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Add space for fixed header */}
      <div className="h-16 md:h-20"></div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap');

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.95);
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

        .animate-slide-down {
          animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .tap-highlight-transparent {
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-transition {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1A1A1A;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #7A1F26, #D4AF37);
          border-radius: 5px;
          border: 2px solid #1A1A1A;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9D2935, #F4C430);
        }

        /* Gold text gradient */
        .gold-gradient {
          background: linear-gradient(135deg, #D4AF37 0%, #F4C430 50%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  )
}