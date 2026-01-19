"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Zap, BookOpen, ArrowRight, Star, ChevronUp, Users, Target, Clock, Award, MessageCircle, Sparkles, PenTool, Heart, Target as TargetIcon, Shield, TrendingUp, Users as UsersIcon, Book, Film, Quote } from "lucide-react"

export default function ConsultingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("why")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
      title: "Screenwriting Consultation",
      description: "Develop your screenplay with personalized guidance on story structure, character development, and industry standards.",
      icon: Film,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      benefits: ["Industry-standard formatting", "Character arc development", "Market positioning", "Pitching guidance"]
    },
    {
      title: "Fiction Manuscript Development",
      description: "Refine your novel or short stories with detailed feedback on narrative voice, pacing, and emotional depth.",
      icon: Book,
      color: "from-[#2E2F1F] to-[#5F6148]",
      benefits: ["Plot structure analysis", "Voice refinement", "Publishing guidance", "Agent query review"]
    },
    {
      title: "Mentorship & Career Guidance",
      description: "Long-term support for emerging writers navigating the publishing and entertainment industries.",
      icon: UsersIcon,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      benefits: ["Career roadmap", "Industry connections", "Portfolio development", "Pitch preparation"]
    },
    {
      title: "Developmental Editing",
      description: "In-depth editing to strengthen your manuscript's core narrative, thematic elements, and market appeal.",
      icon: PenTool,
      color: "from-[#2E2F1F] to-[#5F6148]",
      benefits: ["Structural analysis", "Line-by-line feedback", "Theme development", "Reader engagement"]
    },
  ]

  const whyChoose = [
    {
      title: "Industry Experience",
      description: "As a published author, screenwriter (Quantico), and produced filmmaker, I bring real-world experience to every consultation.",
      icon: Award,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      stats: "15+ years in industry"
    },
    {
      title: "Multidisciplinary Approach",
      description: "I understand how different forms of storytelling inform each other—from novels to screenplays to television.",
      icon: Zap,
      color: "from-[#2E2F1F] to-[#5F6148]",
      stats: "4 creative disciplines"
    },
    {
      title: "Cultural Insight",
      description: "Special focus on authentic representation and helping writers from diverse backgrounds tell their stories.",
      icon: Heart,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      stats: "Global perspective"
    },
    {
      title: "Proven Results",
      description: "My students and mentees have gone on to prestigious MFA programs, publication deals, and screenwriting careers.",
      icon: TrendingUp,
      color: "from-[#2E2F1F] to-[#5F6148]",
      stats: "50+ success stories"
    },
    {
      title: "Personalized Attention",
      description: "Each consultation is tailored to your specific goals, writing style, and creative aspirations.",
      icon: TargetIcon,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      stats: "100% customized"
    },
    {
      title: "Safe Creative Space",
      description: "I create an environment where writers can take risks, explore difficult themes, and find their authentic voice.",
      icon: Shield,
      color: "from-[#2E2F1F] to-[#5F6148]",
      stats: "Trusted by writers"
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
      quote: "Sharbari's mentorship helped me find my authentic voice as a writer. Her insights are invaluable.",
      name: "Sarah Johnson",
      role: "Aspiring novelist",
      rating: 5
    },
    {
      quote: "A masterful teacher who understands the intersection of craft and commerce in publishing.",
      name: "Michael Chen",
      role: "Writing workshop participant",
      rating: 5
    },
    {
      quote: "When I began working with Sharbari, I had no idea how to write a screenplay. But over the course of a few months of working with her, I gradually became a better and more confident writer thanks to her. For new screenwriters, you never know where to start and Sharbari created a safe environment to ask those questions and learn. Her patience, knowledge, and passion for the art and craft of screenwriting is what I needed to know that I could be a writer too.",
      name: "Alexander Serrano",
      role: "MFA 2026 in Dramatic Writing, Fairfield University",
      rating: 5
    },
    {
      quote: "Having Sharbari as a professor at Manhattanville changed the course of my life. She was the first screenwriting professor who saw something in me and told me I could do this for a living if I wanted to. She guided me in the beginning stages of my writing journey and helped nurture my voice and understanding of story structure. With her help I ended up at one of the best film programs in the country and am pursuing my dream of screenwriting and directing.",
      name: "Sarah Shankman",
      role: "USC MFA and Filmmaker",
      rating: 5
    },
    {
      quote: "I took Sharbari's Screenplay Adaptations class and it has completely changed the course of my fiction and nonfiction writing. Having no prior experience in screenwriting, I felt like a fish out of water, but those fears quickly dissipated. Sharbari facilitates her workshops to be both encouraging and intense. I walked away with my eyes opened to the ways in which screenplays enhance and inform good writing; how one can improve upon the other, and how we use our emotions to connect physically with our readers. She pulls no punches in the best possible way.",
      name: "Julie Gorski",
      role: "MFA candidate in Creative Nonfiction, Manhattanville University",
      rating: 5
    },
    {
      quote: "Sharbari's guidance transformed my approach to storytelling. Her insights helped me find the emotional core of my novel.",
      name: "Sarah K.",
      role: "Published Author",
      rating: 5
    },
    {
      quote: "Her screenwriting consultation was invaluable. She helped me structure my script in a way that elevated the entire story.",
      name: "Michael T.",
      role: "Screenwriter",
      rating: 5
    },
    {
      quote: "The manuscript review service was detailed and constructive. I feel equipped to take my work to the next level.",
      name: "Priya R.",
      role: "Fiction Writer",
      rating: 5
    },
  ]

  const approachPoints = [
    {
      title: "Honest & Constructive Feedback",
      description: "I provide direct, actionable criticism grounded in craft principles. My goal is to strengthen your work while respecting your unique voice and vision.",
      icon: MessageCircle
    },
    {
      title: "Authentic Storytelling Focus",
      description: "I prioritize narratives that center marginalized voices and refuse stereotypes. We'll explore the cultural and emotional truth of your stories together.",
      icon: Sparkles
    },
    {
      title: "Long-term Creative Partnership",
      description: "Whether it's a single session or ongoing mentorship, I'm invested in your development as a writer and your evolution as a creative voice.",
      icon: Users
    },
  ]

  const tabs = [
    { id: "why", label: "Why Choose Me" },
    { id: "services", label: "Services" },
    { id: "approach", label: "Approach" },
    { id: "testimonials", label: "Testimonials" },
  ]

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
                   background: 'linear-gradient(135deg, #2E2F1F 0%, #2E2F1F 40%, #B7C83E 100%)',
                 }}>
          {/* Top Olive Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
          
          <div className="mobile-padding">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-[#E3E7C8]">
                  <PenTool size={14} className="text-[#B7C83E]" />
                  <p className="font-subheading text-xs text-[#B7C83E] tracking-widest">
                    PROFESSIONAL MENTORSHIP
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight">
                Why Choose
                <br />
                <span className="text-[#B7C83E]">Sharbari's</span>
                <br />
                Mentorship?
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg text-white/90 leading-relaxed px-2">
                A unique combination of industry experience, creative insight, and personalized guidance to help you achieve your writing goals.
              </p>

              {/* Stats - Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">15+</p>
                  <p className="text-xs text-white/80">Years Experience</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">50+</p>
                  <p className="text-xs text-white/80">Writers Mentored</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">100%</p>
                  <p className="text-xs text-white/80">Success Rate</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">4</p>
                  <p className="text-xs text-white/80">Creative Fields</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Navigation Tabs */}
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

        {/* Why Choose Section */}
        <section id="why" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">Why Choose My Mentorship?</h2>
              <p className="text-[#5F6148] font-subheading">
                A unique combination of experience, insight, and personalized guidance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChoose.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl active:scale-95 mobile-transition hover:border-[#B7C83E]"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E]">
                            {item.title}
                          </h3>
                          <span className="text-xs font-semibold text-[#B7C83E] bg-[#B7C83E]/10 px-2 py-1 rounded-full">
                            {item.stats}
                          </span>
                        </div>
                        
                        <p className="text-[#5F6148] text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 mobile-full-width bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3]">
          <div className="mobile-padding">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Consultation Services</h2>
                <p className="text-[#5F6148] font-subheading">
                  Tailored services for writers at every stage of their journey
                </p>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="group p-6 bg-gradient-to-br from-white to-[#F9FAF4] border border-[#E3E7C8] rounded-xl active:scale-95 mobile-transition hover:border-[#B7C83E]"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        
                        <div className="space-y-4 flex-1">
                          <div>
                            <h3 className="text-lg font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E]">
                              {service.title}
                            </h3>
                            
                            <p className="text-[#5F6148] text-sm mt-2">
                              {service.description}
                            </p>
                          </div>
                          
                          <div className="pt-3 border-t border-[#E3E7C8]">
                            <h4 className="text-sm font-semibold text-[#6F7F1E] mb-2">Key Benefits:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.benefits.map((benefit, i) => (
                                <span key={i} className="text-xs text-[#5F6148] bg-[#E3E7C8]/50 px-2 py-1 rounded-full">
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <Link 
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-1 text-[#6F7F1E] hover:text-[#B7C83E] text-sm font-medium"
                          >
                            Book This Service
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">My Mentorship Philosophy</h2>
              <p className="text-[#5F6148] font-subheading">
                A collaborative process focused on authentic growth and creative excellence
              </p>
            </div>

            <div className="space-y-4">
              {approachPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div 
                    key={index} 
                    className="p-6 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]">
                        <Icon className="text-white" size={18} />
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg font-bold text-[#2E2F1F]">{point.title}</h3>
                        <p className="text-[#5F6148] text-sm">{point.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 mobile-full-width bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] border-t border-[#E3E7C8]">
          <div className="mobile-padding">
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
              <div className="bg-white border border-[#E3E7C8] rounded-xl p-6 relative">
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

                  {/* Navigation */}
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

              <div className="text-center pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-gradient-to-r hover:from-[#B7C83E] hover:to-[#6F7F1E] hover:text-[#2E2F1F] mobile-transition text-sm font-medium border border-[#E3E7C8]"
                >
                  Start Your Success Story
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] border-t border-[#E3E7C8]">
          <div className="mobile-padding">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#2E2F1F]">
                  Ready to Transform
                  <br />
                  <span className="text-[#6F7F1E]">Your Writing?</span>
                </h2>
                <p className="text-[#5F6148] font-subheading">
                  Book a consultation to discuss your project and how we can work together to achieve your goals.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg active:scale-95 mobile-transition text-center border border-[#E3E7C8]"
                >
                  Schedule Your Consultation
                </Link>
                <Link
                  href="mailto:shabini71@gmail.com"
                  className="block w-full py-4 px-6 bg-transparent border-2 border-[#B7C83E] text-[#B7C83E] font-medium rounded-lg active:scale-95 mobile-transition text-center border border-[#E3E7C8]"
                >
                  Email for Custom Packages
                </Link>
              </div>

              <div className="p-4 bg-gradient-to-r from-transparent via-[#D9E6A3]/30 to-transparent border-y border-[#E3E7C8]">
                <p className="text-xs text-[#5F6148]">
                  Response within 24-48 hours • All new clients receive a complimentary 15-minute discovery call • Flexible scheduling options
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