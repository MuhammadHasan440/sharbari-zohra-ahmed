"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Send, Mail, Linkedin, ChevronUp, Clock, MessageSquare, Zap, Globe, ArrowRight, PenTool, Users, Sparkles } from "lucide-react"

// Create a separate component that uses useSearchParams
function ContactForm() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service") || ""
  const initialSubject = searchParams.get("subject") || ""

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: initialService,
    subject: initialSubject,
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("form")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API route or email service
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", service: "", subject: "", message: "" })
    }, 3000)
  }

  const faqItems = [
    {
      question: "How do I book a consulting session?",
      answer: "Fill out the contact form with details about your project, and I'll get back to you within 2-3 business days. You can also visit the consulting page to view packages and pricing.",
      icon: Clock
    },
    {
      question: "What format are sessions offered in?",
      answer: "Sessions are conducted via video call (Zoom/Google Meet). You can share your manuscript, screenplay, or describe your project, and we'll discuss feedback, structure, and next steps.",
      icon: MessageSquare
    },
    {
      question: "Do you accept film collaboration inquiries?",
      answer: "Yes! I'm open to discussing adaptation projects, original screenplays, and filmmaking collaborations. Please include details about your project in the contact form.",
      icon: Globe
    },
    {
      question: "Are you available for speaking engagements?",
      answer: "I'm interested in speaking at literary festivals, film festivals, universities, and conferences. Get in touch with details about your event.",
      icon: Zap
    },
  ]

  const tabs = [
    { id: "form", label: "Contact Form" },
    { id: "faq", label: "FAQ" },
    { id: "connect", label: "Connect" },
  ]

  return (
    <>
      {/* Mobile Tabs Navigation */}
      <div className="sticky top-16 z-30 bg-[#FFF9EB] border-b border-[#D4AF37]/20 shadow-sm lg:hidden">
        <div className="overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

      {/* Contact Content */}
      <div className="py-12 mobile-padding bg-[#FFF9EB]">
        {/* Form Section (Mobile: Conditional, Desktop: Always) */}
        <div className={`lg:block ${activeTab === 'form' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            {submitted ? (
              <div className="relative p-6 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37] rounded-xl space-y-6">
                
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center">
                  <Send className="text-[#FFF9EB]" size={24} />
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">Message Sent Successfully!</h3>
                  <p className="text-[#1A1A1A]/70">
                    Thank you for reaching out. I'll get back to you within 2-3 business days.
                  </p>
                  <p className="text-[#1A1A1A]/60 text-sm">
                    In the meantime, check out my latest work or subscribe to my Substack for updates.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3 pt-4">
                  <Link
                    href="/blog"
                    className="px-5 py-3 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] rounded-lg active:scale-95 mobile-transition text-center"
                  >
                    Read Blog
                  </Link>
                  <Link
                    href="https://sharbariahmed.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg active:scale-95 mobile-transition text-center"
                  >
                    Visit Substack
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                      <Send className="text-[#FFF9EB]" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Send a Message</h3>
                  </div>

                  <div className="space-y-5">
                    {/* Name & Email */}
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#7A1F26] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-lg bg-[#FFF9EB] text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mobile-transition"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#7A1F26] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-lg bg-[#FFF9EB] text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mobile-transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#7A1F26] mb-2">
                        Type of Inquiry
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-lg bg-[#FFF9EB] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mobile-transition"
                      >
                        <option value="">Select an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="press">Press & Media</option>
                        <option value="consulting">Story Consulting</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="collaboration">Creative Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#7A1F26] mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-lg bg-[#FFF9EB] text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mobile-transition"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#7A1F26] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-lg bg-[#FFF9EB] text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mobile-transition resize-none"
                        placeholder="Tell me more about your inquiry, project, or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] font-medium rounded-lg active:scale-95 mobile-transition"
                    >
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section (Mobile: Conditional, Desktop: Always) */}
        <div className={`lg:block mt-12 ${activeTab === 'faq' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                <MessageSquare size={20} className="text-[#FFF9EB]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Frequently Asked Questions</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#7A1F26] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <details 
                    key={index} 
                    className="group bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-lg mobile-transition"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/20 rounded flex items-center justify-center flex-shrink-0">
                          <Icon className="text-[#7A1F26]" size={14} />
                        </div>
                        <h3 className="text-[#1A1A1A] font-medium text-sm group-open:text-[#7A1F26] mobile-transition">
                          {item.question}
                        </h3>
                      </div>
                      <span className="text-lg font-bold text-[#D4AF37] group-open:rotate-45 mobile-transition flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 ml-11">
                      <p className="text-[#1A1A1A]/70 text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                )
              })}
            </div>
          </div>
        </div>

        {/* Connect Section (Mobile: Conditional, Desktop: Always) */}
        <div className={`lg:block mt-12 ${activeTab === 'connect' || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-[#FFF9EB]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1A1A1A]">Other Ways to Connect</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent mt-1"></div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:hello@example.com"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-lg active:scale-95 mobile-transition"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                    <Mail className="text-[#FFF9EB]" size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#1A1A1A]/60 mb-1">Email</p>
                    <p className="font-medium text-[#7A1F26] group-hover:text-[#D4AF37] mobile-transition">hello@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-lg active:scale-95 mobile-transition"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                    <Linkedin className="text-[#FFF9EB]" size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#1A1A1A]/60 mb-1">LinkedIn</p>
                    <p className="font-medium text-[#7A1F26] group-hover:text-[#D4AF37] mobile-transition">@sharbariahmed</p>
                  </div>
                </a>

                <a
                  href="https://sharbariahmed.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-lg active:scale-95 mobile-transition"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                    <PenTool className="text-[#FFF9EB]" size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#1A1A1A]/60 mb-1">Substack</p>
                    <p className="font-medium text-[#7A1F26] group-hover:text-[#D4AF37] mobile-transition">Subscribe to Newsletter</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-[#D4AF37]" size={18} />
                <h3 className="text-lg font-bold text-[#1A1A1A]">Response Time</h3>
              </div>
              <p className="text-[#1A1A1A]/70 text-sm">
                I typically respond to inquiries within 2-3 business days. For urgent matters, please mark your email as priority.
              </p>
            </div>

            {/* Consulting CTA */}
            <div className="p-5 bg-gradient-to-br from-[#D4AF37]/10 to-[#F4C430]/10 border border-[#D4AF37] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-[#7A1F26]" size={18} />
                <h3 className="text-lg font-bold text-[#1A1A1A]">Interested in Consulting?</h3>
              </div>
              <p className="text-[#1A1A1A]/70 text-sm mb-3">
                Learn more about my story consulting packages, mentorship programs, and creative services.
              </p>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-1 text-[#7A1F26] hover:text-[#D4AF37] font-medium text-sm"
              >
                View Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="py-12 mobile-full-width bg-gradient-to-br from-[#FFF9EB] via-[#F8F0E3] to-[#FFF9EB]">
        <div className="mobile-padding">
          <div className="text-center space-y-6">
            <div className="p-6 border-l-4 border-[#D4AF37] bg-gradient-to-r from-transparent via-[#7A1F26]/5 to-transparent">
              <p className="text-xl font-subheading italic text-[#1A1A1A]/90 leading-relaxed">
                "Stories remind us who we are—and who we might yet become. I look forward to hearing yours."
              </p>
            </div>
            <p className="text-[#1A1A1A]/60 font-subheading">— Sharbari Ahmed</p>
          </div>
        </div>
      </section>
    </>
  )
}

// Main page component
export default function ContactPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

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
                   backgroundImage: `linear-gradient(rgba(122, 31, 38, 0.95), rgba(26, 26, 26, 0.98)), url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
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
                
                  <Mail size={14} className="text-[#D4AF37]" />
                  <p className="font-subheading text-xs text-[#D4AF37] tracking-widest">
                    GET IN TOUCH
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-[#FFF9EB] leading-tight">
                Let's
                <br />
                <span className="text-[#D4AF37]">Connect</span>
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#D4AF37] rotate-45 bg-[#FFF9EB]"></div>
                
              </div>

              <p className="font-subheading text-lg text-[#FFF9EB]/90 leading-relaxed px-2">
                For press, speaking, consulting, or general inquiries, feel free to reach out. I'm always interested in meaningful conversations about storytelling and creative work.
              </p>
            </div>
          </div>
        </section>

        {/* Wrap the contact form in Suspense */}
        <Suspense fallback={
          <div className="py-20 mobile-padding">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
            </div>
          </div>
        }>
          <ContactForm />
        </Suspense>
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