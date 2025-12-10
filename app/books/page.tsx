"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, BookOpen, Star, ChevronUp, ExternalLink, Sparkles, Quote } from "lucide-react"

export default function BooksPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showFilters, setShowFilters] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowScrollTop(currentScrollY > 300)
      
      // Show/hide filters based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowFilters(false)
      } else {
        setShowFilters(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const books = [
    {
      title: "The Strangest of Fruit",
      subtitle: "A Collection of Stories",
      description: "A powerful collection centered on migration, war, womanhood, and the haunting afterlives of history. These stories explore the fractures between cultures—and the fragile bonds that hold us together.",
      year: "2013",
      awards: ["Lambda Literary Award Finalist", "Asian American Literary Award Nominee"],
      links: [
        { 
          name: "ThriftBooks", 
          url: "https://www.thriftbooks.com/w/the-strangest-of-fruit-collected-stories/56953199/",
          color: "from-[#7A1F26] to-[#9D2935]"
        },
        { 
          name: "Amazon", 
          url: "https://www.amazon.com/Strangest-Fruit-Collected-Stories/dp/B0FRW1688Q",
          color: "from-[#D4AF37] to-[#F4C430]"
        },
        { 
          name: "Barnes & Noble", 
          url: "https://www.barnesandnoble.com/w/the-strangest-of-fruit-sharbari-ahmed/1148333148",
          color: "from-[#7A1F26] to-[#9D2935]"
        },
      ],
      featured: true
    },
    {
      title: "Dust Under My Feet",
      subtitle: "A Novel",
      description: "A compelling narrative that traces the journey of identity, displacement, and belonging. Set against the backdrop of cultural shifts, this novel explores the universal search for home and self.",
      year: "2018",
      awards: ["Critically Acclaimed Debut Novel"],
      links: [
        { 
          name: "Amazon", 
          url: "https://www.amazon.com/Dust-Under-Sharbari-Zohra-Ahmed/dp/9388754255",
          color: "from-[#7A1F26] to-[#9D2935]"
        },
      ],
      featured: true
    },
    {
      title: "The Ocean of Mrs. Nagai",
      subtitle: "A Novel",
      description: "A story of war, love, and unexpected tenderness—set in the aftermath of the 1971 Bangladesh Liberation War. Exploring themes of memory, loss, and reconciliation.",
      year: "2008",
      awards: ["Notable Book of the Year", "Featured in NYT Book Review"],
      links: [
        { 
          name: "Amazon eBook", 
          url: "https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW",
          color: "from-[#D4AF37] to-[#F4C430]"
        }
      ],
      featured: false
    },
  ]

  const publications = [
    {
      title: "Birds of Bengal",
      venue: "The Massachusetts Review",
      year: "2015",
      category: "short story"
    },
    {
      title: "The Distance Between Two Points",
      venue: "Granta Magazine",
      year: "2018",
      category: "essay"
    },
    {
      title: "Monsoon Letters",
      venue: "The Paris Review",
      year: "2020",
      category: "short story"
    }
  ]

  const filters = [
    { id: "all", label: "All Books" },
    { id: "featured", label: "Featured" },
    { id: "publications", label: "Publications" }
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

        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        {/* Mobile Hero Section */}
        <section className="relative pt-20 pb-12 mobile-full-width"
                 style={{
                   backgroundImage: `linear-gradient(rgba(122, 31, 38, 0.95), rgba(26, 26, 26, 0.98)), url('https://images.unsplash.com/photo-1544931170-3ca13322c4a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}>
          {/* Top Gold Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-[3%] pointer-events-none"></div>
          <div className="mobile-padding">
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFF9EB]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/30">
                  <BookOpen size={14} className="text-[#D4AF37]" />
                  <p className="font-subheading text-xs text-[#D4AF37] tracking-widest">
                    LITERARY WORKS
                  </p>
                </div>
              </div>
         
              <h1 className="text-4xl font-bold text-[#FFF9EB] leading-tight">
                My
                <br />
                <span className="text-[#D4AF37]">Books</span>
              </h1>

              {/* Separator */}
              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#D4AF37] rotate-45 bg-[#FFF9EB]"></div>
              </div>

              <p className="font-subheading text-lg text-[#FFF9EB]/90 leading-relaxed px-2">
                Stories that explore the fractures between cultures, the weight of history, and human resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Filter Bar - Animated */}
        <div className={`sticky top-16 z-30 mobile-transition ${showFilters ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="mobile-full-width bg-[#FFF9EB] border-b border-[#D4AF37]/20 shadow-sm">
            <div className="overflow-x-auto py-3 px-4">
              <div className="flex gap-2 min-w-max">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap mobile-transition ${activeFilter === filter.id ? 'bg-[#7A1F26] text-[#FFF9EB] shadow-sm' : 'bg-[#7A1F26]/10 text-[#7A1F26] hover:bg-[#7A1F26]/20'}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid - Mobile Stacked */}
        <div className="mobile-padding space-y-12 py-8">
          {books
            .filter(book => 
              activeFilter === "all" || 
              (activeFilter === "featured" && book.featured)
            )
            .map((book, index) => (
              <section 
                key={index} 
                className="space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Book Card */}
                <div className="bg-gradient-to-br from-[#FFF9EB] to-[#F8F0E3] border border-[#D4AF37]/30 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl mobile-transition">
                  {/* Book Header */}
                  <div className="p-6 bg-gradient-to-r from-[#7A1F26]/10 to-transparent border-b border-[#D4AF37]/20">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h2 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#7A1F26] mobile-transition">{book.title}</h2>
                        <p className="font-subheading text-[#D4AF37] text-sm mt-1">{book.subtitle}</p>
                      </div>
                      <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#7A1F26] text-xs font-medium rounded-full">
                        {book.year}
                      </span>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>

                  {/* Book Content */}
                  <div className="p-6">
                    <p className="text-[#1A1A1A]/80 leading-relaxed mb-6">
                      {book.description}
                    </p>

                    {/* Awards - Mobile Compact */}
                    {book.awards.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#7A1F26] mb-2 flex items-center gap-1">
                          <Sparkles size={12} />
                          Awards & Recognition
                        </h4>
                        <div className="space-y-1">
                          {book.awards.map((award, i) => (
                            <div key={i} className="text-xs text-[#1A1A1A]/60 border-t border-[#D4AF37]/10 pt-2 first:border-0 first:pt-0">
                              {award}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Purchase Links - Stacked on Mobile */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-[#7A1F26]">Available from:</p>
                      <div className="space-y-2">
                        {book.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block w-full group px-4 py-3 bg-gradient-to-r ${link.color} text-[#FFF9EB] rounded-lg border border-[#7A1F26]/20 active:scale-95 mobile-transition hover:shadow-md`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{link.name}</span>
                              <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 group-hover:rotate-12 mobile-transition" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote for Featured Book */}
                  {book.featured && (
                    <div className="p-6 bg-gradient-to-r from-[#7A1F26]/5 to-transparent border-t border-[#D4AF37]/20">
                      <Quote className="w-5 h-5 text-[#D4AF37]/40 mb-2" />
                      <blockquote className="text-sm text-[#1A1A1A]/70 italic">
                        {book.title === "The Strangest of Fruit" 
                          ? "A remarkable debut collection... Ahmed writes with both precision and poetic grace about the complexities of identity and belonging."
                          : "A compelling narrative that captures the essence of displacement and the universal search for home with remarkable sensitivity."
                        }
                      </blockquote>
                      <p className="text-xs text-[#1A1A1A]/50 mt-2">
                        {book.title === "The Strangest of Fruit" 
                          ? "— Publishers Weekly"
                          : "— Literary Review"
                        }
                      </p>
                    </div>
                  )}
                </div>
              </section>
            ))}
        </div>

        {/* Additional Publications - Mobile Optimized */}
        {(activeFilter === "all" || activeFilter === "publications") && (
          <section className="py-12 mobile-full-width bg-gradient-to-b from-[#FFF9EB] to-[#F8F0E3]">
            <div className="mobile-padding">
              <div className="text-center space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-[#1A1A1A]">Other Publications</h2>
                  <p className="text-[#1A1A1A]/70 font-subheading text-sm">
                    Featured stories and essays in literary journals
                  </p>
                </div>

                <div className="space-y-4">
                  {publications.map((pub, i) => (
                    <div 
                      key={i}
                      className="p-5 bg-[#FFF9EB] border border-[#D4AF37]/20 rounded-lg active:scale-95 mobile-transition hover:border-[#7A1F26]/30 group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-[#7A1F26] group-hover:text-[#9D2935] mobile-transition">{pub.title}</h4>
                        <span className="text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded-full">
                          {pub.year}
                        </span>
                      </div>
                      <p className="text-sm text-[#1A1A1A]/70 mb-3">{pub.venue}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#7A1F26] bg-[#7A1F26]/10 px-3 py-1 rounded-full">
                          {pub.category}
                        </span>
                        <button className="text-sm text-[#D4AF37] hover:text-[#7A1F26] mobile-transition flex items-center gap-1 group/link">
                          Read Excerpt
                          <ArrowRight size={12} className="group-hover/link:translate-x-1 mobile-transition" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section - Mobile Optimized */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#FFF9EB] via-[#F8F0E3] to-[#FFF9EB]">
          <div className="mobile-padding">
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">
                  Explore
                  <br />
                  <span className="text-[#7A1F26]">More Stories</span>
                </h2>
                <p className="text-[#1A1A1A]/70 font-subheading">
                  Each book is a journey through identity, history, and human connection.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-[#7A1F26] to-[#9D2935] text-[#FFF9EB] font-medium rounded-lg active:scale-95 mobile-transition text-center hover:shadow-lg hover:shadow-[#7A1F26]/20"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/press"
                  className="block w-full py-4 px-6 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-medium rounded-lg active:scale-95 mobile-transition text-center hover:bg-[#D4AF37]/10"
                >
                  Press & Reviews
                </Link>
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
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center shadow-lg tap-highlight-transparent active:scale-90 mobile-transition"
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