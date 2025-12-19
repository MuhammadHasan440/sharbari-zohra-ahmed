"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ExternalLink, Mail, Twitter, Instagram, Linkedin, BookOpen, Film, MessageSquare, ArrowRight, PenTool, Heart, Sparkles, Quote } from "lucide-react"

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const exploreLinks = [
    { label: "About", href: "/about", icon: null },
    { label: "Books", href: "/books", icon: BookOpen },
    { label: "Films", href: "/films", icon: Film },
    { label: "Consulting", href: "/consulting", icon: MessageSquare },
    { label: "Blog", href: "/blog", icon: PenTool },
    { label: "Contact", href: "/contact", icon: Mail },
  ]

  const socialLinks = [
    { label: "Substack", href: "https://sharbariahmed.substack.com", icon: BookOpen },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ]

  const quickLinks = [
    { label: "TEDx Talk", href: "/about#tedx" },
    { label: "Press Features", href: "/press" },
    { label: "Awards", href: "/films#awards" },
    { label: "Events", href: "/about#events" },
  ]

  return (
    <>
      <footer className="relative bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] border-t border-[#E3E7C8]">
        {/* Top Olive Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23B7C83E' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Branding */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <Quote size={20} className="text-[#F9FAF4]" />
                  </div>
                  <div>
                    <p className="font-subheading text-lg text-[#2E2F1F] font-bold">Sharbari Ahmed</p>
                    <p className="text-sm text-[#5F6148]">Writer • Filmmaker • Educator</p>
                  </div>
                </div>
                <p className="text-[#5F6148] text-sm leading-relaxed">
                  Challenging inherited narratives through storytelling that crosses borders and illuminates identity.
                </p>
              </div>
              
              {/* Newsletter CTA */}
              <div className="pt-4">
                <a
                  href="https://sharbariahmed.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#6F7F1E] hover:text-[#B7C83E] mobile-transition text-sm font-medium"
                >
                  <BookOpen size={14} />
                  Subscribe to Newsletter
                  <ArrowRight size={12} className="group-hover:translate-x-1 mobile-transition" />
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div className="space-y-6">
              <h4 className="font-subheading text-lg font-bold text-[#2E2F1F] flex items-center gap-2">
                <Sparkles size={16} className="text-[#B7C83E]" />
                Explore
              </h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-3 text-[#5F6148] hover:text-[#2E2F1F] mobile-transition"
                        onMouseEnter={() => setHoveredLink(link.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {Icon && (
                          <Icon size={14} className="text-[#B7C83E] group-hover:text-[#6F7F1E] mobile-transition" />
                        )}
                        <span className="relative">
                          {link.label}
                          <span 
                            className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] mobile-transition ${
                              hoveredLink === link.href ? 'w-full' : 'w-0'
                            }`}
                          ></span>
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-subheading text-lg font-bold text-[#2E2F1F]">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-[#5F6148] hover:text-[#2E2F1F] mobile-transition"
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 mobile-transition text-[#B7C83E]" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Email Contact */}
              <div className="pt-4">
                <a
                  href="mailto:hello@example.com"
                  className="group inline-flex items-center gap-2 text-[#5F6148] hover:text-[#2E2F1F] mobile-transition"
                >
                  <Mail size={14} className="text-[#B7C83E]" />
                  <span>hello@example.com</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 mobile-transition" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="font-subheading text-lg font-bold text-[#2E2F1F]">Connect</h4>
              <p className="text-[#5F6148] text-sm">
                Follow for updates, essays, and behind-the-scenes storytelling.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      aria-label={link.label}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mobile-transition border border-[#E3E7C8] ${
                        hoveredLink === link.href
                          ? 'bg-[#2E2F1F] shadow-lg scale-110'
                          : 'bg-gradient-to-br from-[#B7C83E]/20 to-[#6F7F1E]/20'
                      }`}>
                        <Icon 
                          size={18} 
                          className={`mobile-transition ${
                            hoveredLink === link.href 
                              ? 'text-[#F9FAF4]' 
                              : 'text-[#5F6148]'
                          }`}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredLink === link.href && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#2E2F1F] border border-[#E3E7C8] rounded text-xs text-[#F9FAF4] whitespace-nowrap shadow-lg">
                          {link.label}
                        </div>
                      )}
                    </a>
                  )
                })}
              </div>
              
              {/* Back to Top */}
              <div className="pt-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 text-sm text-[#5F6148] hover:text-[#2E2F1F] mobile-transition"
                >
                  <ArrowRight size={14} className="rotate-90 group-hover:-translate-y-1 mobile-transition" />
                  Back to top
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#B7C83E]/30 to-transparent my-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <div className="text-center md:text-left space-y-2">
              <p className="text-[#5F6148] text-sm">
                &copy; {new Date().getFullYear()} Sharbari Ahmed. All rights reserved.
              </p>
              <p className="text-[#5F6148]/70 text-xs">
                Stories that illuminate the spaces between culture, history, and identity.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-[#5F6148] hover:text-[#2E2F1F] mobile-transition text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#5F6148] hover:text-[#2E2F1F] mobile-transition text-xs">
                Terms of Service
              </Link>
              <span className="text-[#5F6148]/50 text-xs">•</span>
              <span className="text-[#5F6148] text-xs flex items-center gap-1">
                Made with <Heart size={10} className="text-[#B7C83E]" /> for storytelling
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .mobile-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  )
}