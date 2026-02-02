"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Zap, BookOpen, ArrowRight, Star, ChevronUp, Users, Target, Clock, Award, MessageCircle, Sparkles, PenTool, Heart, Target as TargetIcon, Shield, TrendingUp, Users as UsersIcon, Book, Film, Quote, Mail, Calendar, FileText, Edit } from "lucide-react"

export default function ConsultingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("services")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Testimonial auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    {
      title: "Project Evaluation — Big Picture Feedback",
      description: "A comprehensive editorial overview with full read, in-depth editorial letter, and clear revision roadmap.",
      icon: FileText,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      price: "$450–$650",
      details: [
        "Short Script / Pilot / Novella (up to 120 pages): $450",
        "Feature Script / Full Manuscript (121–350 pages): $650"
      ]
    },
    {
      title: "Development Deep Dive — Intensive Editorial Partnership",
      description: "For writers ready to revise at a deeper level with detailed margin notes and one-on-one consultation.",
      icon: Edit,
      color: "from-[#2E2F1F] to-[#5F6148]",
      price: "$900–$1,200",
      details: [
        "Up to 150 pages: $900",
        "151–350 pages: $1,200"
      ]
    },
    {
      title: "Consultation — Craft, Strategy, or Career",
      description: "Focused guidance tailored to your needs with live Zoom session and optional light pages review.",
      icon: Calendar,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      price: "$200–$275",
      details: [
        "60 minutes: $200",
        "90 minutes: $275"
      ]
    },
    {
      title: "Ongoing Mentorship — Limited Availability",
      description: "Long-term support for sustained creative growth with monthly review and private sessions.",
      icon: Users,
      color: "from-[#2E2F1F] to-[#5F6148]",
      price: "$1,800–$3,300",
      details: [
        "3 Months: $1,800",
        "6 Months: $3,300"
      ]
    },
  ]

  const testimonials = [
    {
      quote: "Working with Sharbari completely transformed the way I think about writing. Real, brilliant, and disarmingly witty… she'll elevate your writing…",
      name: "Alexis Carmichael",
      role: "Manhattanville University MFA student in fiction",
      rating: 5
    },
    {
      quote: "When I began working with Sharbari, I had no idea how to write a screenplay. But over the course of a few months of working with her, I gradually became a better and more confident writer thanks to her. For new screenwriters, you never know where to start and Sharbari created a safe environment to ask those questions and learn.",
      name: "Alexander Serrano",
      role: "MFA 2026 in Dramatic Writing, Fairfield University",
      rating: 5
    },
    {
      quote: "Having Sharbari as a professor at Manhattanville changed the course of my life. She was the first screenwriting professor who saw something in me and told me I could do this for a living if I wanted to. She guided me in the beginning stages of my writing journey and helped nurture my voice and understanding of story structure.",
      name: "Sarah Shankman",
      role: "USC MFA and Filmmaker",
      rating: 5
    },
    {
      quote: "I took Sharbari's Screenplay Adaptations class and it has completely changed the course of my fiction and nonfiction writing. Having no prior experience in screenwriting, I felt like a fish out of water, but those fears quickly dissipated. Sharbari facilitates her workshops to be both encouraging and intense.",
      name: "Julie Gorski",
      role: "MFA candidate in Creative Nonfiction, Manhattanville University",
      rating: 5
    },
  ]

  const whoIBestWith = [
    "Writers serious about craft, revision, and long-term growth",
    "Literary, upmarket, and character-driven storytelling",
    "Work exploring identity, diaspora, gender, family dynamics, or intergenerational themes",
    "Those seeking rigorous, thoughtful editorial partnership",
    "Writers open to honest, actionable feedback"
  ]

  const philosophyPoints = [
    {
      title: "Strong storytelling lives at the intersection of structure and emotional truth",
      description: "Blending literary craft with screen storytelling principles for maximum impact."
    },
    {
      title: "The goal is not perfection. The goal is resonance, clarity, and impact",
      description: "Focusing on what makes your voice singular while strengthening your work's core."
    },
    {
      title: "Collaborative, detail-oriented work rooted in respect",
      description: "Respecting the story you're trying to tell while providing actionable feedback."
    },
  ]

  const tabs = [
    { id: "services", label: "Services" },
    { id: "philosophy", label: "Philosophy" },
    { id: "testimonials", label: "Testimonials" },
    { id: "inquiry", label: "Inquiry" },
  ]

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Collect all form data
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        data[key] = value
      }
    })
    
    // Create email body
    const emailBody = `New Consulting Inquiry Received:
      
Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}

Project Type: ${data.projectType || 'Not provided'}
Project Stage: ${data.projectStage || 'Not provided'}
Approximate Length: ${data.projectLength || 'Not provided'}

What kind of support are you hoping for?: ${data.supportType || 'Not provided'}
Timeline or Goals: ${data.timeline || 'Not specified'}
Why work with me specifically: ${data.whyWorkWithMe || 'Not provided'}

Brief Project Description:
${data.projectDescription || 'Not provided'}

Additional Information:
${data.additionalInfo || 'None'}

---
Submitted on: ${new Date().toLocaleString()}`
    
    // Open mail client
    const mailtoLink = `mailto:shabini71@gmail.com?subject=New Consulting Inquiry - ${encodeURIComponent(data.name || 'Anonymous')}&body=${encodeURIComponent(emailBody)}`
    
    // Add a small delay to show submitting state
    setTimeout(() => {
      window.location.href = mailtoLink
      setTimeout(() => {
        setIsSubmitting(false)
      }, 2000)
    }, 500)
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

        /* Form validation styles */
        input:invalid, select:invalid, textarea:invalid {
          border-color: #dc2626;
        }
        
        input:invalid:focus, select:invalid:focus, textarea:invalid:focus {
          border-color: #dc2626;
          ring-color: #dc2626;
        }
      `}</style>

      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 mobile-full-width"
                 style={{
                   background: 'linear-gradient(135deg, #2E2F1F 0%, #2E2F1F 40%, #B7C83E 100%)',
                 }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
          
          <div className="mobile-padding">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-[#E3E7C8]">
                  <PenTool size={14} className="text-[#B7C83E]" />
                  <p className="font-subheading text-xs text-[#B7C83E] tracking-widest">
                    SCRIPT & MANUSCRIPT DEVELOPMENT
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight">
                Work With Me
              </h1>

              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg text-white/90 leading-relaxed px-2">
                Limited script and manuscript development consulting for writers seeking rigorous, thoughtful editorial partnership.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-6 max-w-xs mx-auto">
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">Limited</p>
                  <p className="text-xs text-white/80">Projects Monthly</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">15+</p>
                  <p className="text-xs text-white/80">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 mobile-padding">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#2E2F1F]">
              Great writing requires both solitude and conversation.
            </h2>
            <div className="space-y-4 text-[#5F6148]">
              <p className="font-subheading text-lg">
                As a novelist, screenwriter, filmmaker, and educator, I work closely with writers to strengthen structure, deepen character, and clarify the emotional and thematic core of their work—while preserving what makes their voice singular.
              </p>
              <p>
                My approach blends literary craft, screen storytelling, and industry insight drawn from publishing, film, and television development. I offer honest, actionable feedback designed to move your work forward without flattening its originality or intention.
              </p>
              <p className="font-subheading text-lg pt-4 border-t border-[#E3E7C8]">
                This is collaborative, detail-oriented work rooted in respect for the story you are trying to tell.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="sticky top-16 z-30 bg-[#F9FAF4] border-b border-[#E3E7C8] shadow-sm">
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
                      ? 'border-[#B7C83E] text-[#2E2F1F]'
                      : 'border-transparent text-[#5F6148] hover:text-[#2E2F1F]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">Consulting Services</h2>
              <p className="text-[#5F6148] font-subheading">
                Limited projects accepted each month to ensure depth, focus, and care
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl active:scale-95 mobile-transition hover:border-[#B7C83E]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]`}>
                            <Icon className="text-white" size={20} />
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E]">
                              {service.title}
                            </h3>
                            <p className="text-[#5F6148] text-sm mt-1">{service.description}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#6F7F1E]">{service.price}</div>
                        </div>
                      </div>
                      
                      <div className="pl-16 space-y-2">
                        {service.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-[#5F6148]">
                            <div className="w-1.5 h-1.5 bg-[#B7C83E] rounded-full"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Who I Work Best With & Philosophy */}
        <section id="philosophy" className="py-12 mobile-full-width bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3]">
          <div className="mobile-padding">
            <div className="space-y-12">
              {/* Who I Work Best With */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#2E2F1F] text-center">Who I Work Best With</h2>
                <div className="p-6 bg-gradient-to-br from-white to-[#F9FAF4] border border-[#E3E7C8] rounded-xl">
                  <div className="space-y-3">
                    {whoIBestWith.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#B7C83E] flex-shrink-0 mt-0.5" />
                        <p className="text-[#5F6148]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Editorial Philosophy */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#2E2F1F] text-center">Editorial Philosophy</h2>
                <div className="space-y-4">
                  {philosophyPoints.map((point, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-white to-[#F9FAF4] border border-[#E3E7C8] rounded-xl">
                      <h3 className="text-lg font-bold text-[#2E2F1F] mb-2">{point.title}</h3>
                      <p className="text-[#5F6148]">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center border border-[#E3E7C8]">
                  <Quote size={18} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Writer Success Stories</h2>
              </div>
              <p className="text-[#5F6148] font-subheading">
                Hear from writers who transformed their work through mentorship
              </p>
            </div>

            {/* Testimonial Slider */}
            <div className="bg-gradient-to-br from-white to-[#F9FAF4] border border-[#E3E7C8] rounded-xl p-6 relative">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[currentTestimonial]?.rating || 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[#B7C83E] text-[#B7C83E]" />
                  ))}
                </div>
                
                <blockquote className="text-[#5F6148] italic text-sm leading-relaxed min-h-[120px]">
                  "{testimonials[currentTestimonial]?.quote}"
                </blockquote>
                
                <div className="pt-4 border-t border-[#E3E7C8]">
                  <p className="font-bold text-[#6F7F1E] text-sm">{testimonials[currentTestimonial]?.name}</p>
                  <p className="text-xs text-[#5F6148]">{testimonials[currentTestimonial]?.role}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentTestimonial 
                            ? 'w-4 bg-[#B7C83E]' 
                            : 'w-2 bg-[#B7C83E]/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentTestimonial((prev) => 
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )}
                      className="w-8 h-8 bg-[#B7C83E]/10 rounded-full flex items-center justify-center hover:bg-[#B7C83E] hover:text-white transition-all border border-[#E3E7C8]"
                    >
                      <ArrowRight size={14} className="rotate-180" />
                    </button>
                    
                    <button
                      onClick={() => setCurrentTestimonial((prev) => 
                        (prev + 1) % testimonials.length
                      )}
                      className="w-8 h-8 bg-[#B7C83E]/10 rounded-full flex items-center justify-center hover:bg-[#B7C83E] hover:text-white transition-all border border-[#E3E7C8]"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry" className="py-12 mobile-full-width bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] border-t border-[#E3E7C8]">
          <div className="mobile-padding">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Consulting Inquiry</h2>
                <p className="text-[#5F6148] font-subheading">
                  Start the Conversation
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-white to-[#F9FAF4] border border-[#E3E7C8] rounded-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-[#5F6148]">
                      Thank you for your interest in working together.
                      I personally review every inquiry and take on a limited number of projects at a time.
                    </p>
                  </div>

                  <form 
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#2E2F1F]">Please provide the following details:</h3>
                      
                      <div className="space-y-4">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="name">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors"
                            placeholder="Your full name"
                            minLength={2}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="email">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>

                        {/* Project Type */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="projectType">
                            What are you working on? *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            required
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors"
                          >
                            <option value="">Select project type</option>
                            <option value="Novel">Novel</option>
                            <option value="Screenplay">Screenplay</option>
                            <option value="Memoir">Memoir</option>
                            <option value="Short Story Collection">Short Story Collection</option>
                            <option value="TV Pilot">TV Pilot</option>
                            <option value="Stage Play">Stage Play</option>
                            <option value="Nonfiction Book">Nonfiction Book</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Project Description */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="projectDescription">
                            Brief Project Description *
                            <span className="text-xs text-[#5F6148]/70 ml-1">(3–5 sentences about the story and what matters most to you about telling it)</span>
                          </label>
                          <textarea
                            id="projectDescription"
                            name="projectDescription"
                            required
                            rows={4}
                            minLength={50}
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors resize-none"
                            placeholder="Describe your project, its themes, and why this story matters to you..."
                          />
                        </div>

                        {/* Current Stage */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="projectStage">
                            Current Stage *
                          </label>
                          <select
                            id="projectStage"
                            name="projectStage"
                            required
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors"
                          >
                            <option value="">Select current stage</option>
                            <option value="Idea/Concept">Idea/Concept</option>
                            <option value="Outline">Outline</option>
                            <option value="First Draft">First Draft</option>
                            <option value="Revision">Revision</option>
                            <option value="Multiple Revisions">Multiple Revisions</option>
                            <option value="Preparing for Submission">Preparing for Submission</option>
                            <option value="Seeking Agent/Representation">Seeking Agent/Representation</option>
                          </select>
                        </div>

                        {/* Approximate Length */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="projectLength">
                            Approximate Length *
                          </label>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <input
                              type="text"
                              id="projectLength"
                              name="projectLength"
                              required
                              className="flex-1 px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors"
                              placeholder="e.g., 300 pages, 85,000 words, 120 screenplay pages"
                            />
                            <select
                              className="px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors sm:w-32"
                              onChange={(e) => {
                                const lengthInput = document.getElementById('projectLength') as HTMLInputElement
                                if (e.target.value === 'select') return
                                lengthInput.value = e.target.value
                              }}
                            >
                              <option value="select">Common lengths</option>
                              <option value="50-100 pages">Novella (50-100 pages)</option>
                              <option value="250-350 pages">Novel (250-350 pages)</option>
                              <option value="90-120 pages">Feature Screenplay</option>
                              <option value="30-60 pages">TV Pilot</option>
                            </select>
                          </div>
                        </div>

                        {/* Type of Support */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="supportType">
                            What kind of support are you hoping for? *
                          </label>
                          <select
                            id="supportType"
                            name="supportType"
                            required
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors"
                          >
                            <option value="">Select type of support</option>
                            <option value="Structure & Plot Development">Structure & Plot Development</option>
                            <option value="Character Depth & Development">Character Depth & Development</option>
                            <option value="Revision Roadmap">Revision Roadmap</option>
                            <option value="Line-by-Line Editing">Line-by-Line Editing</option>
                            <option value="Industry Strategy">Industry Strategy</option>
                            <option value="Career Guidance">Career Guidance</option>
                            <option value="Project Evaluation">Project Evaluation</option>
                            <option value="Developmental Editing">Developmental Editing</option>
                            <option value="Pitch/Market Positioning">Pitch/Market Positioning</option>
                          </select>
                        </div>

                        {/* Timeline or Goals */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="timeline">
                            Timeline or Goals
                            <span className="text-xs text-[#5F6148]/70 ml-1">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            id="timeline"
                            name="timeline"
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors"
                            placeholder="e.g., Complete revision in 3 months, submit to agents by end of year"
                          />
                        </div>

                        {/* Why Work Together */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="whyWorkWithMe">
                            Why are you interested in working together specifically? *
                          </label>
                          <textarea
                            id="whyWorkWithMe"
                            name="whyWorkWithMe"
                            required
                            rows={3}
                            minLength={20}
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors resize-none"
                            placeholder="What about my background, approach, or experience resonates with you?"
                          />
                        </div>

                        {/* Additional Information */}
                        <div>
                          <label className="block text-sm font-medium text-[#5F6148] mb-1" htmlFor="additionalInfo">
                            Anything else you'd like me to know?
                            <span className="text-xs text-[#5F6148]/70 ml-1">(Optional)</span>
                          </label>
                          <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            rows={3}
                            className="w-full px-4 py-2 bg-white border border-[#E3E7C8] rounded-lg focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] outline-none transition-colors resize-none"
                            placeholder="Additional context, specific concerns, or questions..."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#E3E7C8] space-y-4">
                      <p className="text-[#5F6148] text-sm italic">
                        I work best with writers who are serious about craft and open to thoughtful, honest feedback.
                      </p>
                      <p className="text-[#5F6148] text-sm">
                        I personally review every inquiry and respond within 2–3 business days.
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg active:scale-95 mobile-transition text-center border border-[#E3E7C8] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <Mail size={18} />
                        {isSubmitting ? 'Opening Email...' : 'Submit Inquiry'}
                      </button>
                      
                      <div className="text-center text-xs text-[#5F6148]">
                        Upon submission, your email client will open with a pre-filled message.
                        Please send the email to complete your inquiry.
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 mobile-padding">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">
                Ready to Begin Your
                <br />
                <span className="text-[#6F7F1E]">Editorial Partnership?</span>
              </h2>
              <p className="text-[#5F6148] font-subheading">
                Limited spots available each month for focused, dedicated collaboration.
              </p>
            </div>

            <div className="space-y-4">
              {/* FIXED: Changed from Link to button for consistency */}
              <button
                onClick={() => window.location.href = "mailto:shabini71@gmail.com"}
                className="block w-full py-4 px-6 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg active:scale-95 mobile-transition text-center border border-[#E3E7C8] hover:shadow-lg transition-all"
              >
                Send Detailed Inquiry
              </button>
              
              <div className="p-4 bg-gradient-to-r from-transparent via-[#D9E6A3]/30 to-transparent border border-[#E3E7C8] rounded-lg">
                <p className="text-xs text-[#5F6148]">
                  Response within 2–3 business days • Limited monthly availability • All inquiries personally reviewed
                </p>
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
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center shadow-lg tap-highlight-transparent border border-[#E3E7C8]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#2E2F1F]" />
        </button>
      )}

      {/* Mobile Bottom Spacer */}
      <div className="h-4 lg:hidden bg-transparent"></div>
    </div>
  )
}