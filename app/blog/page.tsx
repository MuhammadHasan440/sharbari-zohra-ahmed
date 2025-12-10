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
      color: "from-[#D4AF37] to-[#F4C430]",
      featured: true
    },
    {
      title: "Writing & Faith",
      category: "essay",
      date: "November 2023",
      excerpt: "How spirituality shapes the act of creation and what it means to write from a place of belief.",
      readTime: "10 min read",
      icon: PenTool,
      color: "from-[#7A1F26] to-[#9D2935]"
    },
    {
      title: "Diasporic Longing",
      category: "essay",
      date: "October 2023",
      excerpt: "Exploring the complex emotions of living between two worlds and the art of capturing that feeling.",
      readTime: "12 min read",
      icon: Compass,
      color: "from-[#D4AF37] to-[#F4C430]"
    },
    {
      title: "Creativity & Identity",
      category: "craft",
      date: "September 2023",
      excerpt: "The intersection of personal heritage and artistic expression in storytelling.",
      readTime: "6 min read",
      icon: Sparkles,
      color: "from-[#7A1F26] to-[#9D2935]"
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
                   backgroundImage: `linear-gradient(rgba(122, 31, 38, 0.95), rgba(26, 26, 26, 0.98)), url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}>
          {/* Top Gold Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

          <div className="mobile-padding">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFF9EB]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/30">
                  <PenTool size={14} className="text-[#D4AF37]" />
                  <p className="font-subheading text-xs text-[#D4AF37] tracking-widest">
                    ESSAYS & REFLECTIONS
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-[#FFF9EB] leading-tight">
                Notes from
                <br />
                <span className="text-[#D4AF37]">the In-Between</span>
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#D4AF37] rotate-45 bg-[#FFF9EB]"></div>
              </div>

              <p className="font-subheading text-lg text-[#FFF9EB]/90 leading-relaxed px-2">
                Reflections on writing, identity, film, faith, creativity, and diasporic life.
              </p>

              {/* Stats - Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">50+</p>
                  <p className="text-xs text-[#FFF9EB]/80">Essays Published</p>
                </div>
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">5k+</p>
                  <p className="text-xs text-[#FFF9EB]/80">Readers</p>
                </div>
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">100%</p>
                  <p className="text-xs text-[#FFF9EB]/80">Free Content</p>
                </div>
                <div className="p-3 bg-[#7A1F26]/20 border border-[#D4AF37]/30 rounded-lg">
                  <p className="text-xl font-bold text-[#D4AF37]">4</p>
                  <p className="text-xs text-[#FFF9EB]/80">Categories</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Category Filters */}
        <div className="sticky top-16 z-30 bg-[#FFF9EB] border-b border-[#D4AF37]/20 shadow-sm">
          <div className="overflow-x-auto">
            <div className="flex min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 mobile-transition ${
                    activeCategory === category.id
                      ? 'border-[#7A1F26] text-[#7A1F26]'
                      : 'border-transparent text-[#1A1A1A]/70 hover:text-[#7A1F26]'
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
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                <BookOpen size={20} className="text-[#FFF9EB]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Featured Essays</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#7A1F26] to-transparent mt-1"></div>
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
                      className={`relative p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border rounded-xl mobile-transition ${
                        article.featured ? 'border-[#D4AF37] shadow-lg' : 'border-[#D4AF37]/30'
                      }`}
                    >
                      {article.featured && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] rounded-full">
                          <p className="text-xs font-bold text-[#1A1A1A]">FEATURED</p>
                        </div>
                      )}

                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${article.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="text-[#FFF9EB]" size={20} />
                        </div>

                        <div className="space-y-3 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 bg-[#7A1F26]/10 text-[#7A1F26] text-xs rounded-full">
                              Essay
                            </span>
                            <div className="flex items-center gap-1 text-[#1A1A1A]/60 text-xs">
                              <Calendar size={10} />
                              <span>{article.date}</span>
                            </div>
                            <div className="text-xs text-[#D4AF37] font-medium">
                              {article.readTime}
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-[#1A1A1A] hover:text-[#7A1F26]">
                            {article.title}
                          </h3>

                          <p className="text-[#1A1A1A]/70 text-sm">
                            {article.excerpt}
                          </p>

                          <div className="pt-2">
                            <Link
                              href="https://sharbariahmed.substack.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#7A1F26] hover:text-[#D4AF37] text-sm font-medium"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] font-medium rounded-lg active:scale-95 mobile-transition"
              >
                Visit Substack Archive
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Grid - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-b from-[#FFF9EB] to-[#F8F0E3]">
          <div className="mobile-padding">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                  <PenTool size={20} className="text-[#FFF9EB]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1A1A1A]">Topics I Explore</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#7A1F26] to-transparent mt-1"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {topics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(topic.id === "all" ? "all" : topic.id)}
                    className={`p-4 rounded-lg border mobile-transition text-left ${
                      activeCategory === topic.id
                        ? 'border-[#D4AF37] bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] shadow-sm'
                        : 'border-[#D4AF37]/20 bg-[#FFF9EB]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{topic.icon}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          activeCategory === topic.id ? 'bg-[#D4AF37]' : 'bg-transparent'
                        }`}></div>
                      </div>
                      
                      <h3 className="font-bold text-[#1A1A1A] text-sm">{topic.title}</h3>
                      
                      <p className="text-[#1A1A1A]/50 text-xs">{topic.count} essays</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#FFF9EB] via-[#F8F0E3] to-[#FFF9EB]">
          <div className="mobile-padding">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                  <MessageSquare size={28} className="text-[#FFF9EB]" />
                </div>
                
                <h2 className="text-3xl font-bold text-[#1A1A1A]">
                  Subscribe to
                  <br />
                  <span className="text-[#7A1F26]">My Newsletter</span>
                </h2>
                
                <p className="text-[#1A1A1A]/70 font-subheading">
                  Get essays about writing, identity, creativity, and diasporic life. Join a community of writers and storytelling enthusiasts.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="https://sharbariahmed.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] font-medium rounded-lg active:scale-95 mobile-transition text-center"
                >
                  Subscribe Now
                </Link>
                
                <div className="p-4 bg-gradient-to-r from-transparent via-[#7A1F26]/5 to-transparent rounded-lg border border-[#D4AF37]/20">
                  <p className="text-xs text-[#1A1A1A]/60">
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
              <h2 className="text-3xl font-bold text-[#1A1A1A]">
                Explore
                <br />
                <span className="text-[#7A1F26]">The Archive</span>
              </h2>
              <p className="text-[#1A1A1A]/70 font-subheading">
                Years of writing on culture, creativity, and the human experience. All essays are free to read.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/20 rounded-lg flex items-center justify-center">
                    <BookOpen size={18} className="text-[#7A1F26]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#7A1F26]">Latest Essays</h3>
                    <p className="text-[#1A1A1A]/60 text-xs">Most recent reflections and insights</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/20 rounded-lg flex items-center justify-center">
                    <Sparkles size={18} className="text-[#7A1F26]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#7A1F26]">Popular Series</h3>
                    <p className="text-[#1A1A1A]/60 text-xs">Multi-part essays and themed collections</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/20 rounded-lg flex items-center justify-center">
                    <PenTool size={18} className="text-[#7A1F26]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#7A1F26]">Writer's Notes</h3>
                    <p className="text-[#1A1A1A]/60 text-xs">Behind-the-scenes of the creative process</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link
                href="https://sharbariahmed.substack.com/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#1A1A1A] mobile-transition text-sm font-medium"
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