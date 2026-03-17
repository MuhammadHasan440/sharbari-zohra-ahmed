"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Send, Mail, Linkedin, ChevronUp, Clock, MessageSquare, 
  Zap, Globe, ArrowRight, PenTool, Users, Sparkles, 
  HelpCircle, Phone, MapPin, Award, BookOpen, Calendar,
  CheckCircle, Star, Heart, ThumbsUp, AlertCircle, X
} from "lucide-react"

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
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) errors.name = "Name is required"
    else if (formData.name.length < 2) errors.name = "Name must be at least 2 characters"
    
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Please enter a valid email"
    
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    
    if (!formData.message.trim()) errors.message = "Message is required"
    else if (formData.message.length < 20) errors.message = "Message must be at least 20 characters"
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    
    // In production, this would send to an API route or email service
    console.log("Form submitted:", formData)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", service: "", subject: "", message: "" })
        setFormErrors({})
      }, 3000)
    }, 1000)
  }

  const faqItems = [
    {
      question: "How do I book a consulting session?",
      answer: "Fill out the contact form with details about your project, and I'll get back to you within 2-3 business days. You can also visit the consulting page to view packages and pricing.",
      icon: Clock,
      category: "consulting"
    },
    {
      question: "What format are sessions offered in?",
      answer: "Sessions are conducted via video call (Zoom/Google Meet). You can share your manuscript, screenplay, or describe your project, and we'll discuss feedback, structure, and next steps.",
      icon: MessageSquare,
      category: "consulting"
    },
    {
      question: "Do you accept film collaboration inquiries?",
      answer: "Yes! I'm open to discussing adaptation projects, original screenplays, and filmmaking collaborations. Please include details about your project in the contact form.",
      icon: Globe,
      category: "collaboration"
    },
    {
      question: "Are you available for speaking engagements?",
      answer: "I'm interested in speaking at literary festivals, film festivals, universities, and conferences. Get in touch with details about your event.",
      icon: Zap,
      category: "speaking"
    },
    {
      question: "What is your typical response time?",
      answer: "I typically respond to inquiries within 2-3 business days. For urgent matters, please mark your email as priority.",
      icon: Clock,
      category: "general"
    },
    {
      question: "Do you offer mentorship programs?",
      answer: "Yes, I offer limited ongoing mentorship for writers and filmmakers. These programs are designed for sustained creative growth with monthly reviews and private sessions.",
      icon: Users,
      category: "mentorship"
    },
  ]

  const tabs = [
    { id: "form", label: "Contact Form", icon: Send },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "connect", label: "Connect", icon: Users },
  ]

  // Group FAQ by category
  const faqCategories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "consulting", label: "Consulting", icon: Clock },
    { id: "collaboration", label: "Collaboration", icon: Globe },
    { id: "speaking", label: "Speaking", icon: Zap },
    { id: "mentorship", label: "Mentorship", icon: Users },
  ]
  
  const [activeFaqCategory, setActiveFaqCategory] = useState("all")
  
  const filteredFaqs = activeFaqCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeFaqCategory)

  return (
    <>
      {/* Mobile Tabs Navigation */}
      <div className="sticky top-16 z-30 bg-[#F9FAF4] border-b border-[#E3E7C8] shadow-sm lg:hidden">
        <div className="overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                    activeTab === tab.id
                      ? 'border-[#B7C83E] text-[#2E2F1F]'
                      : 'border-transparent text-[#5F6148] hover:text-[#2E2F1F]'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Desktop Tabs - Hidden on mobile */}
      <div className="hidden lg:block container-padding max-w-content pt-8">
        <div className="flex justify-center space-x-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#B7C83E] text-[#2E2F1F]'
                    : 'text-[#5F6148] hover:bg-[#D9E6A3]/30'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-8 md:py-12 container-padding max-w-content">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form (always visible on desktop, conditional on mobile) */}
          <div className={`lg:col-span-2 ${activeTab === 'form' ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-8">
              {submitted ? (
                <div className="relative p-6 md:p-8 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#B7C83E] rounded-xl space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center border border-[#E3E7C8] animate-bounce">
                    <CheckCircle className="text-white" size={28} />
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2E2F1F]">Message Sent Successfully!</h3>
                    <p className="text-[#5F6148]">
                      Thank you for reaching out. I'll get back to you within 2-3 business days.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#B7C83E]">
                      <Sparkles size={16} />
                      <p>I personally review every inquiry</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link
                      href="/blog"
                      className="flex-1 px-5 py-3 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] rounded-lg hover:scale-105 transition-all text-center border border-[#E3E7C8]"
                    >
                      Read Blog
                    </Link>
                    <Link
                      href="https://sharbariahmed.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-5 py-3 border-2 border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-[#B7C83E] hover:text-[#2E2F1F] transition-all text-center"
                    >
                      Visit Substack
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="p-6 md:p-8 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                        <Send className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-[#2E2F1F]">Send a Message</h3>
                    </div>

                    <div className="space-y-5">
                      {/* Name & Email - Grid on desktop */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[#6F7F1E] mb-2">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-[#E3E7C8]'} rounded-lg bg-white text-[#2E2F1F] placeholder-[#5F6148] focus:outline-none focus:ring-2 focus:ring-[#B7C83E] focus:border-transparent transition-all`}
                            placeholder="Your name"
                          />
                          {formErrors.name && (
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#6F7F1E] mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-[#E3E7C8]'} rounded-lg bg-white text-[#2E2F1F] placeholder-[#5F6148] focus:outline-none focus:ring-2 focus:ring-[#B7C83E] focus:border-transparent transition-all`}
                            placeholder="your@email.com"
                          />
                          {formErrors.email && (
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Service Type */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-[#6F7F1E] mb-2">
                          Type of Inquiry
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#E3E7C8] rounded-lg bg-white text-[#2E2F1F] focus:outline-none focus:ring-2 focus:ring-[#B7C83E] focus:border-transparent transition-all"
                        >
                          <option value="">Select an option</option>
                          <option value="general">General Inquiry</option>
                          <option value="press">Press & Media</option>
                          <option value="consulting">Story Consulting</option>
                          <option value="speaking">Speaking Engagement</option>
                          <option value="collaboration">Creative Collaboration</option>
                          <option value="mentorship">Mentorship</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[#6F7F1E] mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border ${formErrors.subject ? 'border-red-500' : 'border-[#E3E7C8]'} rounded-lg bg-white text-[#2E2F1F] placeholder-[#5F6148] focus:outline-none focus:ring-2 focus:ring-[#B7C83E] focus:border-transparent transition-all`}
                          placeholder="What would you like to discuss?"
                        />
                        {formErrors.subject && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {formErrors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#6F7F1E] mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-[#E3E7C8]'} rounded-lg bg-white text-[#2E2F1F] placeholder-[#5F6148] focus:outline-none focus:ring-2 focus:ring-[#B7C83E] focus:border-transparent transition-all resize-none`}
                          placeholder="Tell me more about your inquiry, project, or question..."
                        />
                        {formErrors.message && (
                          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {formErrors.message}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-[#5F6148] text-right">
                          {formData.message.length}/20 minimum characters
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg hover:scale-105 transition-all border border-[#E3E7C8] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[#2E2F1F]"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - FAQ & Connect (always visible on desktop, conditional on mobile) */}
          <div className="lg:col-span-1 space-y-8">
            {/* FAQ Section */}
            <div className={`${activeTab === 'faq' ? 'block' : 'hidden lg:block'}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <HelpCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2E2F1F]">FAQ</h2>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
                  </div>
                </div>

                {/* FAQ Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {faqCategories.map((cat) => {
                    const Icon = cat.icon
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveFaqCategory(cat.id)}
                        className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-full transition-all ${
                          activeFaqCategory === cat.id
                            ? 'bg-[#B7C83E] text-[#2E2F1F]'
                            : 'bg-white border border-[#E3E7C8] text-[#5F6148] hover:border-[#B7C83E]'
                        }`}
                      >
                        <Icon size={12} />
                        {cat.label}
                      </button>
                    )
                  })}
                </div>

                <div className="space-y-3">
                  {filteredFaqs.map((item, index) => {
                    const Icon = item.icon
                    const isExpanded = expandedFaq === index
                    
                    return (
                      <div 
                        key={index} 
                        className="bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-lg overflow-hidden transition-all hover:border-[#B7C83E]"
                      >
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#D9E6A3] to-[#B7C83E]/20 rounded flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]">
                              <Icon className="text-[#5F6148]" size={14} />
                            </div>
                            <h3 className="text-[#2E2F1F] font-medium text-sm flex-1">
                              {item.question}
                            </h3>
                          </div>
                          <span className={`text-lg font-bold text-[#B7C83E] transition-transform ${isExpanded ? 'rotate-45' : ''} flex-shrink-0 ml-2`}>
                            {isExpanded ? '×' : '+'}
                          </span>
                        </button>
                        
                        {isExpanded && (
                          <div className="px-4 pb-4 ml-11">
                            <p className="text-[#5F6148] text-sm border-t border-[#E3E7C8] pt-3">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className={`${activeTab === 'connect' ? 'block' : 'hidden lg:block'}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2E2F1F]">Connect</h2>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="mailto:shabini71@gmail.com"
                    className="group flex items-center gap-4 p-4 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-lg hover:border-[#B7C83E] hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8] group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#5F6148] mb-1">Email</p>
                      <p className="font-medium text-[#6F7F1E] group-hover:text-[#B7C83E] transition-colors break-all">
                        shabini71@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/sharbariahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-lg hover:border-[#B7C83E] hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8] group-hover:scale-110 transition-transform">
                      <Linkedin className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#5F6148] mb-1">LinkedIn</p>
                      <p className="font-medium text-[#6F7F1E] group-hover:text-[#B7C83E] transition-colors">
                        @sharbariahmed
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://sharbariahmed.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-lg hover:border-[#B7C83E] hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8] group-hover:scale-110 transition-transform">
                      <PenTool className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#5F6148] mb-1">Substack</p>
                      <p className="font-medium text-[#6F7F1E] group-hover:text-[#B7C83E] transition-colors">
                        Underdog Energy
                      </p>
                    </div>
                  </a>
                </div>

                {/* Response Time */}
                <div className="p-5 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-[#B7C83E]" size={18} />
                    <h3 className="text-base font-bold text-[#2E2F1F]">Response Time</h3>
                  </div>
                  <p className="text-[#5F6148] text-sm">
                    I typically respond to inquiries within <span className="font-medium text-[#6F7F1E]">2-3 business days</span>. For urgent matters, please mark your email as priority.
                  </p>
                </div>

                {/* Consulting CTA */}
                <div className="p-5 bg-gradient-to-br from-[#D9E6A3]/30 to-[#B7C83E]/10 border border-[#B7C83E] rounded-xl hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-[#6F7F1E]" size={18} />
                    <h3 className="text-base font-bold text-[#2E2F1F]">Interested in Consulting?</h3>
                  </div>
                  <p className="text-[#5F6148] text-sm mb-4">
                    Learn more about my story consulting packages, mentorship programs, and creative services.
                  </p>
                  <Link
                    href="/consulting"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#B7C83E] text-[#2E2F1F] rounded-lg hover:bg-[#6F7F1E] hover:text-white transition-all text-sm font-medium"
                  >
                    View Services
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="py-12 w-full bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] border-t border-[#E3E7C8]">
        <div className="container-padding max-w-content">
          <div className="text-center space-y-6">
            <div className="p-6 md:p-8 border-l-4 border-[#B7C83E] bg-gradient-to-r from-transparent via-[#D9E6A3]/30 to-transparent rounded-r-lg">
              <p className="text-xl md:text-2xl font-subheading italic text-[#2E2F1F] leading-relaxed">
                "Stories remind us who we are—and who we might yet become. I look forward to hearing yours."
              </p>
            </div>
            <p className="text-[#5F6148] font-subheading flex items-center justify-center gap-2">
              <PenTool size={16} />
              — Sharbari Ahmed
            </p>
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
    <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
            line-height: 1.2;
          }
          
          h2 {
            font-size: 1.8rem;
            line-height: 1.3;
          }
          
          .container-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (min-width: 769px) {
          .container-padding {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .max-w-content {
            max-width: 1200px;
            margin: 0 auto;
          }
        }

        /* Transitions */
        .transition-all {
          transition: all 0.3s ease;
        }

        /* Form styles */
        input:focus, select:focus, textarea:focus {
          outline: none;
          ring: 2px solid #B7C83E;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #F9FAF4;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #B7C83E;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #6F7F1E;
        }
      `}</style>

      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 w-full"
                 style={{
                   background: 'linear-gradient(135deg, #2E2F1F 0%, #2E2F1F 40%, #B7C83E 100%)',
                 }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
          
          <div className="container-padding max-w-content">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-[#E3E7C8]">
                  <Mail size={14} className="text-[#B7C83E]" />
                  <p className="font-subheading text-xs text-[#B7C83E] tracking-widest">
                    GET IN TOUCH
                  </p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's
                <br />
                <span className="text-[#B7C83E]">Connect</span>
              </h1>

              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg md:text-xl text-white/90 leading-relaxed px-2 max-w-2xl mx-auto">
                For press, speaking, consulting, or general inquiries, feel free to reach out. I'm always interested in meaningful conversations about storytelling and creative work.
              </p>
            </div>
          </div>
        </section>

        {/* Wrap the contact form in Suspense */}
        <Suspense fallback={
          <div className="py-20 container-padding max-w-content">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B7C83E]"></div>
            </div>
          </div>
        }>
          <ContactForm />
        </Suspense>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all border border-[#E3E7C8] animate-bounce"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#2E2F1F]" />
        </button>
      )}
    </div>
  )
}