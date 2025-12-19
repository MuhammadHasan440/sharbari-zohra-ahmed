"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Book, Film, MessageSquare, User, ChevronDown, Home, ArrowRight, PenTool, Sparkles, Mic } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

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
      label: "TEDx", 
      href: "/tedx",
      icon: Mic,
      description: "Speaking Engagements",
      highlight: true
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
    { label: "TEDx Talk", href: "/tedx", icon: Mic },
    { label: "Literary Services", href: "/#services", icon: PenTool },
    { label: "Substack Letters", href: "https://sharbariahmed.substack.com", external: true, icon: Sparkles },
    { label: "Upcoming Events", href: "/events", icon: Home },
  ]

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2F1F]/90 backdrop-blur-md border-b border-[#E3E7C8]/20 h-16 md:h-20">
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-between items-center h-full">
              <div className="relative flex items-center h-full">
                {/* Logo placeholder */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent flex items-center justify-center relative">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(111,127,30,0.1)_50%,transparent_75%)] bg-[length:250%_250%]"></div>
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
            ? 'bg-[#2E2F1F]/95 backdrop-blur-xl shadow-2xl border-b border-[#E3E7C8]/30' 
            : 'bg-[#2E2F1F]/90 backdrop-blur-md border-b border-[#E3E7C8]/20'
        }`}
      >
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
        
        {/* Olive Overlay on Scroll */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#B7C83E]/5 via-transparent to-transparent pointer-events-none"></div>
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
                  {/* Name with Olive Accent */}
                  <div className="relative">
                    <img className="w-40 pt-2" src="/images/logo.png" alt="Sharbari Zohra Ahmed" />
                    {/* Olive underline */}
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </Link>

              {/* Home Dropdown - Olive Inspired */}
              {activeDropdown === 'home' && (
                <div 
                  className="absolute top-full left-0 mt-3 w-64 bg-[#F9FAF4] border border-[#E3E7C8] rounded-lg shadow-2xl py-2 backdrop-blur-xl z-50 overflow-hidden"
                  onMouseEnter={() => setActiveDropdown('home')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
                  
                  {/* Olive border top */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                  
                  <div className="relative px-4 py-3 border-b border-[#E3E7C8]">
                    <p className="text-xs text-[#5F6148] uppercase tracking-widest font-cormorant">Quick Access</p>
                  </div>
                  {quickLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="relative flex items-center gap-3 px-4 py-3 text-[#5F6148] hover:text-[#2E2F1F] group mobile-transition hover:bg-gradient-to-r hover:from-[#D9E6A3]/30 hover:to-transparent"
                        onClick={() => setIsOpen(false)}
                      >
                        {/* Olive line indicator */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-[#B7C83E] group-hover:h-4 transition-all duration-300"></div>
                        
                        <Icon size={14} className="text-[#B7C83E]/60 group-hover:text-[#B7C83E] transition-colors" />
                        <span className="text-sm font-cormorant">{link.label}</span>
                        {link.external && (
                          <span className="ml-auto text-xs text-[#B7C83E]/60 group-hover:text-[#B7C83E] transition-colors">↗</span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Desktop Navigation - Olive Theme */}
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
                      className={`relative flex items-center gap-2 px-4 py-2.5 mobile-transition text-[#2E2F1F] hover:text-[#B7C83E] group ${
                        item.highlight ? 'bg-gradient-to-r from-[#B7C83E]/10 to-[#e62b1e]/5 border border-[#e62b1e]/20' : ''
                      }`}
                    >
                      {/* Hover background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B7C83E]/0 via-[#D9E6A3]/10 to-[#B7C83E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      
                      {/* TEDx red dot indicator */}
                      {item.highlight && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#e62b1e] rounded-full animate-pulse z-20"></div>
                      )}
                      
                      <Icon 
                        size={16} 
                        className={`text-[#B7C83E]/70 group-hover:text-[#B7C83E] z-10 transition-colors ${
                          item.highlight ? 'text-[#e62b1e]/80 group-hover:text-[#e62b1e]' : ''
                        }`}
                      />
                      <span className="text-sm font-medium font-cormorant z-10">{item.label}</span>
                      {!item.highlight && (
                        <ChevronDown 
                          size={14}
                          className="mobile-transition text-[#B7C83E]/50 group-hover:text-[#B7C83E] group-hover:rotate-180 z-10" 
                        />
                      )}
                      
                      {/* Olive underline animation */}
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] group-hover:w-3/4 transition-all duration-500 ${
                        item.highlight ? 'from-[#e62b1e] via-[#B7C83E] to-[#e62b1e]' : ''
                      }`}></div>
                    </Link>

                    {/* Dropdown Menu - Olive Style */}
                    {activeDropdown === item.label && !item.highlight && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[240px] bg-[#F9FAF4] border border-[#E3E7C8] rounded-lg shadow-2xl py-3 backdrop-blur-xl z-50 overflow-hidden"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {/* Decorative pattern */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B7C83E] via-[#6F7F1E] to-[#B7C83E]"></div>
                        <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
                        
                        <div className="relative px-4 py-3 border-b border-[#E3E7C8]">
                          <p className="text-xs text-[#2E2F1F] uppercase tracking-widest font-cormorant">{item.label}</p>
                          <p className="text-xs text-[#5F6148] mt-1">{item.description}</p>
                        </div>
                        
                        {/* Dropdown content would go here */}
                        <div className="relative px-4 py-3">
                          <p className="text-sm text-[#5F6148] text-center font-cormorant italic">
                            Explore the journey
                          </p>
                        </div>
                      </div>
                    )}

                    {/* TEDx Dropdown - Special Styling */}
                    {activeDropdown === item.label && item.highlight && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[280px] bg-[#F9FAF4] border border-[#E3E7C8] rounded-lg shadow-2xl py-3 backdrop-blur-xl z-50 overflow-hidden"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {/* TEDx red-olive gradient border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e62b1e] via-[#B7C83E] to-[#e62b1e]"></div>
                        <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
                        
                        <div className="relative px-4 py-3 border-b border-[#E3E7C8]">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#e62b1e] rounded-full animate-pulse"></div>
                            <p className="text-xs text-[#2E2F1F] uppercase tracking-widest font-cormorant">TEDx Talk</p>
                          </div>
                          <p className="text-xs text-[#5F6148] mt-1">{item.description}</p>
                        </div>
                        
                        {/* TEDx dropdown content */}
                        <div className="space-y-1 px-2">
                          <Link
                            href="/tedx"
                            className="flex items-center gap-3 px-3 py-3 text-[#5F6148] hover:text-[#2E2F1F] hover:bg-gradient-to-r hover:from-[#D9E6A3]/30 hover:to-transparent rounded-lg transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <PlayCircle size={14} className="text-[#e62b1e]/70 group-hover:text-[#e62b1e]" />
                            <div>
                              <p className="text-sm font-cormorant">Watch Full Talk</p>
                              <p className="text-xs text-[#5F6148]/70">"Between the Kabah Sharif and a Hard Place"</p>
                            </div>
                          </Link>
                          <Link
                            href="https://www.ted.com/talks/sharbari_ahmed_between_the_kabah_sharif_and_a_hard_place"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-3 py-3 text-[#5F6148] hover:text-[#2E2F1F] hover:bg-gradient-to-r hover:from-[#D9E6A3]/30 hover:to-transparent rounded-lg transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <ExternalLink size={14} className="text-[#B7C83E]/70 group-hover:text-[#B7C83E]" />
                            <div>
                              <p className="text-sm font-cormorant">View on TED.com</p>
                              <p className="text-xs text-[#5F6148]/70">With transcript & discussion</p>
                            </div>
                          </Link>
                          <Link
                            href="/press"
                            className="flex items-center gap-3 px-3 py-3 text-[#5F6148] hover:text-[#2E2F1F] hover:bg-gradient-to-r hover:from-[#D9E6A3]/30 hover:to-transparent rounded-lg transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <Newspaper size={14} className="text-[#6F7F1E]/70 group-hover:text-[#6F7F1E]" />
                            <div>
                              <p className="text-sm font-cormorant">Press Coverage</p>
                              <p className="text-xs text-[#5F6148]/70">Reviews & recognition</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* CTA Button - Olive Elegance */}
              <Link
                href="/contact"
                className="ml-4 relative px-6 py-2.5 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-bold text-sm rounded-lg hover:shadow-[0_0_30px_rgba(183,200,62,0.4)] hover:scale-105 mobile-transition border border-[#E3E7C8] group overflow-hidden"
              >
                {/* Olive shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D9E6A3]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Olive border animation */}
                <div className="absolute inset-0 rounded-lg p-px bg-gradient-to-r from-[#B7C83E] via-[#6F7F1E] to-[#B7C83E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg bg-[#F9FAF4]"></div>
                </div>
                
                <span className="relative z-10 font-semibold">
                  Begin Conversation
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - Olive Accented */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 bg-gradient-to-br from-[#F9FAF4] to-[#D9E6A3] border border-[#E3E7C8] rounded-lg flex items-center justify-center hover:border-[#B7C83E] hover:shadow-[0_0_20px_rgba(183,200,62,0.4)] mobile-transition tap-highlight-transparent group overflow-hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {/* Olive shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D9E6A3]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {isOpen ? (
                <>
                  <X size={20} className="text-[#2E2F1F] relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/20 to-[#6F7F1E]/10"></div>
                </>
              ) : (
                <>
                  <Menu size={20} className="text-[#2E2F1F] relative z-10" />
                  {/* Animated olive dots */}
                  <span className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#B7C83E] rounded-full animate-pulse"></span>
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#B7C83E] rounded-full animate-pulse delay-150"></span>
                  <span className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#B7C83E] rounded-full animate-pulse delay-300"></span>
                  <span className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#B7C83E] rounded-full animate-pulse delay-450"></span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Navigation - Olive Theme */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] border-t border-[#E3E7C8] space-y-1 animate-slide-down py-4 px-4 shadow-2xl z-40 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-5 pointer-events-none"></div>
              
              {/* Olive top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
              
              {/* Navigation Items */}
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center gap-4 px-4 py-3.5 text-[#2E2F1F] hover:text-[#6F7F1E] mobile-transition rounded-lg overflow-hidden ${
                      item.highlight ? 'bg-gradient-to-r from-[#e62b1e]/5 to-[#B7C83E]/5 border border-[#e62b1e]/20' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {/* TEDx red dot indicator */}
                    {item.highlight && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#e62b1e] rounded-full animate-pulse z-20"></div>
                    )}
                    
                    {/* Olive accent line */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-gradient-to-b from-[#B7C83E] to-[#6F7F1E] group-hover:h-6 transition-all duration-300"></div>
                    
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B7C83E]/0 via-[#D9E6A3]/20 to-[#B7C83E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <Icon size={18} className={`text-[#B7C83E]/70 group-hover:text-[#B7C83E] relative z-10 transition-colors ${
                      item.highlight ? 'text-[#e62b1e] group-hover:text-[#e62b1e]' : ''
                    }`} />
                    <div className="flex-1 relative z-10">
                      <span className="font-cormorant font-medium">{item.label}</span>
                      <p className="text-xs text-[#5F6148] mt-0.5">{item.description}</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 mobile-transition text-[#B7C83E]" />
                  </Link>
                )
              })}

              {/* Quick Links Section */}
              <div className="pt-4 mt-2 border-t border-[#E3E7C8]">
                <p className="px-4 text-xs text-[#5F6148] uppercase tracking-widest font-cormorant mb-3">Quick Links</p>
                {quickLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between px-4 py-3 text-[#5F6148] hover:text-[#2E2F1F] hover:bg-gradient-to-r hover:from-[#D9E6A3]/30 hover:to-transparent rounded-lg mobile-transition group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={14} className="text-[#B7C83E]/50 group-hover:text-[#B7C83E]" />
                        <span className="font-cormorant">{link.label}</span>
                      </div>
                      {link.external ? (
                        <span className="text-xs text-[#B7C83E]/50 group-hover:text-[#B7C83E]">↗</span>
                      ) : (
                        <ArrowRight size={12} className="text-[#B7C83E]/30 group-hover:text-[#B7C83E]" />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4 mt-3">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(183,200,62,0.4)] mobile-transition active:scale-95 border border-[#E3E7C8] relative overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Olive shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D9E6A3]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <span className="relative font-semibold">
                    Begin Conversation
                  </span>
                </Link>
              </div>

              {/* Decorative elements for mobile menu */}
              <div className="pt-6 flex justify-center gap-3">
                <div className="w-1 h-1 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] rounded-full"></div>
                <div className="w-1 h-1 bg-gradient-to-r from-[#6F7F1E] to-[#5F6148] rounded-full"></div>
                <div className="w-1 h-1 bg-gradient-to-r from-[#5F6148] to-[#B7C83E] rounded-full"></div>
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

        /* Custom scrollbar for olive theme */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #F9FAF4;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #B7C83E, #6F7F1E);
          border-radius: 5px;
          border: 2px solid #F9FAF4;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #6F7F1E, #5F6148);
        }

        /* Olive text gradient */
        .olive-gradient {
          background: linear-gradient(135deg, #B7C83E 0%, #6F7F1E 50%, #B7C83E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* TEDx red pulse animation */
        @keyframes tedx-pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(230, 43, 30, 0.7);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 0 4px rgba(230, 43, 30, 0);
          }
        }

        .tedx-pulse {
          animation: tedx-pulse 2s infinite;
        }
      `}</style>
    </>
  )
}

// Import additional icons needed for TEDx dropdown
import { PlayCircle, ExternalLink, Newspaper } from 'lucide-react'