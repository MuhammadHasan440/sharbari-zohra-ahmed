"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Zap, BookOpen, ArrowRight, Star, ChevronUp, Users, Target, Clock, Award, MessageCircle, Sparkles, PenTool } from "lucide-react"

export default function ConsultingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("services")
  const [selectedPackage, setSelectedPackage] = useState<number | null>(1)

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

  const services = [
    {
      title: "Screenwriting Consultation",
      description: "Develop your screenplay with personalized guidance on story structure and character development.",
      icon: BookOpen,
      color: "from-[#B7C83E] to-[#6F7F1E]"
    },
    {
      title: "Fiction Manuscript Development",
      description: "Refine your novel or short stories with detailed feedback on narrative voice and emotional depth.",
      icon: PenTool,
      color: "from-[#2E2F1F] to-[#5F6148]"
    },
    {
      title: "Story Structure Analysis",
      description: "Master the foundations of compelling storytelling with focus on character and emotional arcs.",
      icon: Zap,
      color: "from-[#B7C83E] to-[#6F7F1E]"
    },
    {
      title: "Developmental Editing",
      description: "In-depth editing to strengthen your manuscript's core narrative, voice, and thematic elements.",
      icon: CheckCircle,
      color: "from-[#2E2F1F] to-[#5F6148]"
    },
  ]

  const packages = [
    {
      name: "Single Session",
      price: "Custom",
      duration: "1 Hour",
      description: "For quick story troubleshooting or brainstorming",
      features: [
        "60-minute consultation",
        "Focused feedback on your project",
        "Actionable recommendations",
        "Email follow-up",
      ],
      icon: Clock,
      color: "from-[#2E2F1F] to-[#5F6148]"
    },
    {
      name: "Manuscript Review",
      price: "Custom",
      duration: "Fiction",
      description: "Detailed analysis with margin notes and editorial letter",
      features: [
        "Complete manuscript analysis",
        "Detailed feedback document",
        "Margin notes throughout",
        "Editorial letter with recommendations",
        "Follow-up consultation available",
      ],
      icon: BookOpen,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      featured: true,
    },
    {
      name: "Screenplay Coverage",
      price: "Custom",
      duration: "Consultation",
      description: "Scene-level notes + full story arc review",
      features: [
        "Scene-by-scene analysis",
        "Full story arc review",
        "Character arc guidance",
        "Consultation session included",
        "Revision recommendations",
      ],
      icon: Target,
      color: "from-[#2E2F1F] to-[#5F6148]"
    },
    {
      name: "Mentorship Package",
      price: "Custom",
      duration: "4–8 weeks",
      description: "Weekly sessions + feedback + industry guidance",
      features: [
        "Weekly sessions",
        "Ongoing feedback",
        "Publishing/industry guidance",
        "Custom curriculum",
        "Long-term creative partnership",
      ],
      icon: Users,
      color: "from-[#B7C83E] to-[#6F7F1E]"
    },
  ]

  const testimonials = [
    {
      text: "Sharbari's guidance transformed my approach to storytelling. Her insights helped me find the emotional core of my novel.",
      author: "Sarah K.",
      title: "Published Author",
      rating: 5
    },
    {
      text: "Her screenwriting consultation was invaluable. She helped me structure my script in a way that elevated the entire story.",
      author: "Michael T.",
      title: "Screenwriter",
      rating: 5
    },
    {
      text: "The manuscript review service was detailed and constructive. I feel equipped to take my work to the next level.",
      author: "Priya R.",
      title: "Fiction Writer",
      rating: 5
    },
  ]

  const approachPoints = [
    {
      title: "Honest Feedback",
      description: "I provide direct, constructive criticism grounded in craft principles. My goal is to strengthen your work, not reshape your vision.",
      icon: MessageCircle
    },
    {
      title: "Authentic Storytelling",
      description: "I prioritize narratives that center marginalized voices and refuse stereotypes. We'll dig into the cultural and emotional truth of your stories.",
      icon: Sparkles
    },
    {
      title: "Long-term Growth",
      description: "Whether it's a single session or ongoing mentorship, I'm invested in your development as a writer and your evolution as a creative voice.",
      icon: Award
    },
  ]

  const tabs = [
    { id: "services", label: "Services" },
    { id: "packages", label: "Packages" },
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
                    STORY DEVELOPMENT
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight">
                Story
                <br />
                <span className="text-[#B7C83E]">Consulting</span>
                <br />
                & Mentorship
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg text-white/90 leading-relaxed px-2">
                I work closely with emerging and established writers—helping them shape stories that are structurally sound, emotionally resonant, and deeply human.
              </p>

              {/* Stats - Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">10+</p>
                  <p className="text-xs text-white/80">Years Mentoring</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">50+</p>
                  <p className="text-xs text-white/80">Writers Mentored</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">100%</p>
                  <p className="text-xs text-white/80">Satisfaction</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">15+</p>
                  <p className="text-xs text-white/80">Publications</p>
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

        {/* Services Section */}
        <section id="services" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">What I Offer</h2>
              <p className="text-[#5F6148] font-subheading">
                Tailored consulting services for writers at every stage
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl active:scale-95 mobile-transition hover:border-[#B7C83E]"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E]">
                          {service.title}
                        </h3>
                        
                        <p className="text-[#5F6148] text-sm">
                          {service.description}
                        </p>
                        
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-1 text-[#6F7F1E] hover:text-[#B7C83E] text-sm font-medium"
                        >
                          Learn More
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-12 mobile-full-width bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3]">
          <div className="mobile-padding">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Packages & Pricing</h2>
                <p className="text-[#5F6148] font-subheading">
                  Flexible options for different needs and budgets
                </p>
              </div>

              {/* Packages Carousel (Horizontal Scroll on Mobile) */}
              <div className="overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4 min-w-max">
                  {packages.map((pkg, index) => {
                    const Icon = pkg.icon
                    return (
                      <div
                        key={index}
                        className="w-[280px] flex-shrink-0"
                        onClick={() => setSelectedPackage(index)}
                      >
                        <div className={`relative p-6 rounded-xl border-2 mobile-transition ${
                          selectedPackage === index || pkg.featured
                            ? 'border-[#B7C83E] bg-gradient-to-br from-[#F9FAF4] to-white shadow-lg'
                            : 'border-[#E3E7C8] bg-white'
                        }`}>
                          {pkg.featured && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <span className="px-4 py-1 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] text-xs font-bold rounded-full shadow border border-[#E3E7C8]">
                                POPULAR
                              </span>
                            </div>
                          )}

                          <div className="space-y-5">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-bold text-[#2E2F1F]">{pkg.name}</h3>
                                <p className="text-xs text-[#5F6148] mt-1">{pkg.description}</p>
                              </div>
                              <div className={`w-10 h-10 bg-gradient-to-br ${pkg.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]`}>
                                <Icon className="text-white" size={18} />
                              </div>
                            </div>

                            <div>
                              <p className="text-2xl font-bold text-[#6F7F1E]">{pkg.price}</p>
                              <p className="text-sm text-[#5F6148]">{pkg.duration}</p>
                            </div>

                            <ul className="space-y-2">
                              {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#5F6148]">
                                  <CheckCircle size={14} className="text-[#B7C83E] flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>

                            <Link
                              href={`/contact?service=${encodeURIComponent(pkg.name)}`}
                              className={`block w-full text-center py-3 rounded-lg font-medium mobile-transition border border-[#E3E7C8] ${
                                pkg.featured
                                  ? 'bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] active:scale-95'
                                  : 'bg-gradient-to-r from-[#D9E6A3]/30 to-[#B7C83E]/10 text-[#2E2F1F] active:scale-95'
                              }`}
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="text-center pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#6F7F1E] hover:text-[#B7C83E] font-medium text-sm"
                >
                  Request Custom Package
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">My Mentorship Approach</h2>
              <p className="text-[#5F6148] font-subheading">
                A collaborative process focused on your growth as a writer
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
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Writers' Voices</h2>
                <p className="text-[#5F6148] font-subheading">
                  Hear from writers who transformed their work
                </p>
              </div>

              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-white border border-[#E3E7C8] rounded-xl"
                  >
                    <div className="space-y-4">
                      {/* Rating Stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} size={16} className="fill-[#B7C83E] text-[#B7C83E]" />
                        ))}
                      </div>
                      
                      <blockquote className="text-[#5F6148] italic text-sm">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="pt-3 border-t border-[#E3E7C8]">
                        <p className="font-bold text-[#6F7F1E] text-sm">{testimonial.author}</p>
                        <p className="text-xs text-[#5F6148]">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-gradient-to-r hover:from-[#B7C83E] hover:to-[#6F7F1E] hover:text-[#2E2F1F] mobile-transition text-sm font-medium border border-[#E3E7C8]"
                >
                  Share Your Story
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
                  Ready to Begin
                  <br />
                  <span className="text-[#6F7F1E]">Your Journey?</span>
                </h2>
                <p className="text-[#5F6148] font-subheading">
                  Have questions about consulting or which package is right for you? Let's connect.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg active:scale-95 mobile-transition text-center border border-[#E3E7C8]"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="mailto:hello@example.com"
                  className="block w-full py-4 px-6 bg-transparent border-2 border-[#B7C83E] text-[#B7C83E] font-medium rounded-lg active:scale-95 mobile-transition text-center border border-[#E3E7C8]"
                >
                  Email Me Directly
                </Link>
              </div>

              <div className="p-4 bg-gradient-to-r from-transparent via-[#D9E6A3]/30 to-transparent border-y border-[#E3E7C8]">
                <p className="text-xs text-[#5F6148]">
                  Response time: Within 24-48 hours • First-time clients receive a complimentary 15-minute discovery call
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