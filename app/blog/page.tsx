"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, BookOpen, PenTool, Globe, Compass, Sparkles, Calendar, ChevronUp, ExternalLink, MessageSquare } from "lucide-react"

export default function BlogPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

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

  const blogTopics = [
    {
      title: "On Migration & Identity",
      category: "essay",
      date: "December 2023",
      excerpt: "Reflections on displacement, belonging, and the stories we carry across borders.",
      readTime: "8 min read",
      icon: Globe,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      featured: true
    },
    {
      title: "Writing & Faith",
      category: "essay",
      date: "November 2023",
      excerpt: "How spirituality shapes the act of creation and what it means to write from a place of belief.",
      readTime: "10 min read",
      icon: PenTool,
      color: "from-[#2E2F1F] to-[#5F6148]"
    },
    {
      title: "Diasporic Longing",
      category: "essay",
      date: "October 2023",
      excerpt: "Exploring the complex emotions of living between two worlds and the art of capturing that feeling.",
      readTime: "12 min read",
      icon: Compass,
      color: "from-[#B7C83E] to-[#6F7F1E]"
    },
    {
      title: "Creativity & Identity",
      category: "craft",
      date: "September 2023",
      excerpt: "The intersection of personal heritage and artistic expression in storytelling.",
      readTime: "6 min read",
      icon: Sparkles,
      color: "from-[#2E2F1F] to-[#5F6148]"
    },
  ]

  const topics = [
    { id: "all", title: "All Topics", icon: "📚", count: "50+" },
    { id: "writing", title: "Writing & Craft", icon: "✍️", count: "20+" },
    { id: "identity", title: "Identity & Heritage", icon: "🌍", count: "15+" },
    { id: "diaspora", title: "Diasporic Longing", icon: "🧭", count: "10+" },
    { id: "faith", title: "Faith & Spirituality", icon: "🕌", count: "8+" },
    { id: "craft", title: "Creative Process", icon: "💫", count: "12+" },
  ]

  const categories = [
    { id: "all", label: "All Essays" },
    { id: "essay", label: "Essays" },
    { id: "craft", label: "Writing Craft" },
    { id: "reflection", label: "Reflections" },
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
                    ESSAYS & REFLECTIONS
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight">
                Notes from
                <br />
                <span className="text-[#B7C83E]">the In-Between</span>
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg text-white/90 leading-relaxed px-2">
                Reflections on writing, identity, film, faith, creativity, and diasporic life.
              </p>

              {/* Stats - Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">50+</p>
                  <p className="text-xs text-white/80">Essays Published</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">5k+</p>
                  <p className="text-xs text-white/80">Readers</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">100%</p>
                  <p className="text-xs text-white/80">Free Content</p>
                </div>
                <div className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                  <p className="text-xl font-bold text-[#B7C83E]">4</p>
                  <p className="text-xs text-white/80">Categories</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Category Filters */}
        <div className="sticky top-16 z-30 bg-[#F9FAF4] border-b border-[#E3E7C8] shadow-sm">
          <div className="overflow-x-auto">
            <div className="flex min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 mobile-transition ${
                    activeCategory === category.id
                      ? 'border-[#B7C83E] text-[#2E2F1F]'
                      : 'border-transparent text-[#5F6148] hover:text-[#2E2F1F]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles Section */}
        <section className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#2E2F1F]">Featured Essays</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-4">
              {blogTopics
                .filter(article => activeCategory === "all" || article.category === activeCategory)
                .map((article, index) => {
                  const Icon = article.icon
                  return (
                    <article
                      key={index}
                      className={`relative p-5 bg-gradient-to-br from-[#F9FAF4] to-white border rounded-xl mobile-transition ${
                        article.featured ? 'border-[#B7C83E] shadow-lg' : 'border-[#E3E7C8]'
                      }`}
                    >
                      {article.featured && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] rounded-full border border-[#E3E7C8]">
                          <p className="text-xs font-bold text-[#2E2F1F]">FEATURED</p>
                        </div>
                      )}

                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${article.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]`}>
                          <Icon className="text-white" size={20} />
                        </div>

                        <div className="space-y-3 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 bg-[#D9E6A3]/30 text-[#5F6148] text-xs rounded-full">
                              Essay
                            </span>
                            <div className="flex items-center gap-1 text-[#5F6148] text-xs">
                              <Calendar size={10} />
                              <span>{article.date}</span>
                            </div>
                            <div className="text-xs text-[#B7C83E] font-medium">
                              {article.readTime}
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-[#2E2F1F] hover:text-[#6F7F1E]">
                            {article.title}
                          </h3>

                          <p className="text-[#5F6148] text-sm">
                            {article.excerpt}
                          </p>

                          <div className="pt-2">
                            <Link
                              href="https://sharbariahmed.substack.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#6F7F1E] hover:text-[#B7C83E] text-sm font-medium"
                            >
                              Read Full Essay
                              <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
            </div>

            <div className="text-center pt-4">
              <Link
                href="https://sharbariahmed.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg active:scale-95 mobile-transition border border-[#E3E7C8]"
              >
                Visit Substack Archive
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Grid - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3]">
          <div className="mobile-padding">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                  <PenTool size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#2E2F1F]">Topics I Explore</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {topics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(topic.id === "all" ? "all" : topic.id)}
                    className={`p-4 rounded-lg border mobile-transition text-left ${
                      activeCategory === topic.id
                        ? 'border-[#B7C83E] bg-gradient-to-br from-[#F9FAF4] to-white shadow-sm'
                        : 'border-[#E3E7C8] bg-white'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{topic.icon}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          activeCategory === topic.id ? 'bg-[#B7C83E]' : 'bg-transparent'
                        }`}></div>
                      </div>
                      
                      <h3 className="font-bold text-[#2E2F1F] text-sm">{topic.title}</h3>
                      
                      <p className="text-[#5F6148] text-xs">{topic.count} essays</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] border-t border-[#E3E7C8]">
          <div className="mobile-padding">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                  <MessageSquare size={28} className="text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-[#2E2F1F]">
                  Subscribe to
                  <br />
                  <span className="text-[#6F7F1E]">My Newsletter</span>
                </h2>
                
                <p className="text-[#5F6148] font-subheading">
                  Get essays about writing, identity, creativity, and diasporic life. Join a community of writers and storytelling enthusiasts.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="https://sharbariahmed.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg active:scale-95 mobile-transition text-center border border-[#E3E7C8]"
                >
                  Subscribe Now
                </Link>
                
                <div className="p-4 bg-gradient-to-r from-transparent via-[#D9E6A3]/30 to-transparent rounded-lg border border-[#E3E7C8]">
                  <p className="text-xs text-[#5F6148]">
                    New essays published regularly • Free content always • Unsubscribe anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Archive Preview - Mobile Optimized */}
        <section className="py-12 mobile-padding">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#2E2F1F]">
                Explore
                <br />
                <span className="text-[#6F7F1E]">The Archive</span>
              </h2>
              <p className="text-[#5F6148] font-subheading">
                Years of writing on culture, creativity, and the human experience. All essays are free to read.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D9E6A3] to-[#B7C83E]/20 rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <BookOpen size={18} className="text-[#5F6148]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5F6148]">Latest Essays</h3>
                    <p className="text-[#5F6148]/70 text-xs">Most recent reflections and insights</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D9E6A3] to-[#B7C83E]/20 rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <Sparkles size={18} className="text-[#5F6148]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5F6148]">Popular Series</h3>
                    <p className="text-[#5F6148]/70 text-xs">Multi-part essays and themed collections</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D9E6A3] to-[#B7C83E]/20 rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                    <PenTool size={18} className="text-[#5F6148]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5F6148]">Writer's Notes</h3>
                    <p className="text-[#5F6148]/70 text-xs">Behind-the-scenes of the creative process</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link
                href="https://sharbariahmed.substack.com/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 border border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-gradient-to-r hover:from-[#B7C83E] hover:to-[#6F7F1E] hover:text-[#2E2F1F] mobile-transition text-sm font-medium border border-[#E3E7C8]"
              >
                Browse Full Archive
                <ExternalLink size={14} />
              </Link>
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