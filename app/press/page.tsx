"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Quote, BookOpen, Award, Newspaper, ChevronRight, Globe } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { useEffect, useState } from "react"

export default function PressPage() {
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setMounted(true)
  }, [])

  const praise = [
    {
      text: "Sharbari Zohra Ahmed skillfully weaves together various threads of human experience - it's terror, its humor and its beauty - in this wonderful collection.",
      author: "Avni Doshi",
      title: "Author, Burnt Sugar",
      rating: 5
    },
    {
      text: "The Strangest Fruit is a beautifully written, compelling, thought-provoking, and lyrical collection of stories that takes us through the complexities of migration, grief, war, and poignant moments of joy. With sensitivity, nuance, and humor, Ahmed's stories honor the lives and deaths of her Bangladeshi characters and the histories and memories that haunt them. This stunning and remarkable collection is as emotionally resonant as it is unforgettable.",
      author: "Edwidge Danticat",
      title: "Author of Everything Inside",
      rating: 5
    },
    {
      text: "Sharbari Ahmed takes no prisoners in The Strangest of Fruit, an absolutely ferocious collection of short stories. This book cherishes some of the most precious things in fiction: the piercingly accurate naming of feelings you might have thought impossible to hold with language, and intense tenderness and honesty with moments and people from which others have turned away. These frank and fierce voices will seize your attention, keep it, and remain with you long after you've turned the last page. Ahmed's words aim themselves directly at your heart.",
      author: "V. V. Ganeshananthan",
      title: "Author, Brotherless Night",
      rating: 5
    },
    {
      text: "These stories read like slices of life, in which Ahmed creates detailed, engrossing worlds. Every vignette is punctuated by her rich imagery and gorgeous language, allowing us to connect to these characters in ways that feel familiar but also like an awakening.",
      author: "Susan Muaddi Darraj",
      title: "Author, Behind You Is The Sea",
      rating: 5
    },
    {
      text: "These masterful stories are exhilarating in every way, innovative in form, irreverent in voice, haunting and precise in their depictions of society and examinations of race, nationality, gender, and identity. Ahmed is a true artist with incredible gifts. Her characters brandish humor that barely masks the pain. They harbor just enough strength to overcome the tragedies of modern life. The Strangest of Fruit is serious yet full of joy, resulting in a collection that is pure magic.",
      author: "Chaitali Sen",
      title: "A New Race of Men from Heaven",
      rating: 5
    },
  ]

  const pressItems = [
    {
      title: "The Strangest of Fruit Featured in National Literary Coverage",
      publication: "Literary Journal",
      date: "2024",
      excerpt: "New collection brings fresh voices to American fiction...",
      link: "#",
      icon: Newspaper
    },
    {
      title: "Filmmaker & Writer Sharbari Ahmed Discusses Storytelling & Culture",
      publication: "Arts Magazine",
      date: "2024",
      excerpt: "Ahmed discusses her approach to challenging narratives through both page and screen...",
      link: "#",
      icon: BookOpen
    },
    {
      title: "Behind the Scenes: From Television to Independent Filmmaking",
      publication: "Variety",
      date: "2023",
      excerpt: "An exclusive interview about creative independence and authentic representation...",
      link: "#",
      icon: Award
    },
    {
      title: "Emerging Voices in Contemporary Literary Fiction",
      publication: "Publishers Weekly",
      date: "2023",
      excerpt: "Ahmed joins a roster of authors reshaping the literary landscape...",
      link: "#",
      icon: Newspaper
    },
    {
      title: "TEDx Speaker Challenges Inherited Narratives",
      publication: "Speaking Circuit News",
      date: "2023",
      excerpt: "A powerful talk about identity, storytelling, and authoring new narratives...",
      link: "#",
      icon: Award
    },
  ]

  const bookLinks = [
    { 
      title: "Amazon", 
      url: "https://www.amazon.com/Strangest-Fruit-Collected-Stories/dp/B0FRW1688Q",
    },
    {
      title: "Barnes & Noble",
      url: "https://www.barnesandnoble.com/w/the-strangest-of-fruit-sharbari-ahmed/1148333148",
    },
    { 
      title: "ThriftBooks", 
      url: "https://www.thriftbooks.com/w/the-strangest-of-fruit-collected-stories/56953199/",
    },
    { 
      title: "Amazon eBook", 
      url: "https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW",
    },
  ]

  const reviewLinks = [
    {
      book: "The Strangest of Fruit",
      title: "Between Home and Elsewhere",
      publication: "The Daily Star",
      date: "2024",
      url: "https://www.thedailystar.net/books-literature/news/between-home-and-elsewhere-4044341",
      excerpt: "A review of Sharbari Ahmed's collection exploring borders, identity, and belonging."
    },
    {
      book: "Dust Under Her Feet",
      title: "Book Review: Dust Under Her Feet",
      publication: "Deccan Herald",
      date: "2024",
      url: "https://www.deccanherald.com/features/book-review-dust-under-her-feet-762959.html",
      excerpt: "Review of Ahmed's novel exploring diaspora, memory, and cultural identity."
    }
  ]

  // Don't render during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F9FAF4]">
        <Header />
        <main className="flex-1"></main>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        h1, h2, h3, h4 {
          font-family: 'Playfair Display', serif;
        }
        
        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Olive leaf pattern background */
        .leaf-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20c-5 0-10 3-13 8-3-5-8-8-13-8-8 0-15 7-15 15 0 10 12 20 25 30 13-10 25-20 25-30 0-8-7-15-15-15-5 0-10 3-13 8-3-5-8-8-13-8z' fill='%23B7C83E' fill-opacity='0.08'/%3E%3C/svg%3E");
          background-size: 200px;
        }
      `}</style>
      
      <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
        <Header />

        <main className="flex-1">
          {/* Hero Section with Fruit Image */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] overflow-hidden">
            {/* Olive leaf pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>
            
            {/* Fruit image overlay */}
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src="/images/fruit.jpeg"
                  alt="The Strangest of Fruit"
                  fill
                  className="object-cover opacity-10 mix-blend-multiply"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAF4]/90 via-[#F9FAF4]/70 to-[#F9FAF4]/90"></div>
              </div>
            </div>

            {/* Olive decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>

            {/* Animated olive leaves */}
            {isClient && (
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#B7C83E] rounded-full animate-float opacity-20"
                    style={{
                      left: `${(i * 10) % 100}%`,
                      top: `${(i * 8) % 100}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B7C83E]/20 backdrop-blur-sm rounded-full border border-[#B7C83E]/40 mb-8">
                <Award size={16} className="text-[#6F7F1E]" />
                <span className="font-cormorant text-sm text-[#6F7F1E] tracking-widest">PRESS & RECOGNITION</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#2E2F1F]">Critical</span>
                <br />
                <span className="text-[#6F7F1E]">Acclaim</span>
              </h1>
              
              <div className="w-32 h-1 bg-gradient-to-r from-[#B7C83E] to-transparent mb-8"></div>
              
              <p className="font-cormorant text-xl text-[#5F6148] leading-relaxed max-w-2xl">
                Reviews, press coverage, and praise for my literary work and filmmaking.
              </p>

              {/* CTA Button */}
              <div className="mt-12">
                <Link
                  href="#reviews"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#B7C83E] hover:bg-[#6F7F1E] text-[#2E2F1F] hover:text-[#F9FAF4] font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#B7C83E]/30 hover:scale-105 active:scale-95"
                >
                  <span>Read Featured Reviews</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Scroll indicator */}
            {isClient && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-[#B7C83E] via-[#6F7F1E] to-transparent"></div>
              </div>
            )}
          </section>

          {/* Featured Reviews Section */}
          <SectionContainer id="reviews" className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Leaf pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg" style={{ transform: 'rotate(15deg)' }}></div>
            
            {/* Olive corner accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#B7C83E]/40"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#B7C83E]/40"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">FEATURED REVIEWS</span>
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Featured Reviews
                </h2>
                <p className="font-cormorant text-lg text-[#5F6148]">Latest reviews from major publications</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {reviewLinks.map((review, index) => (
                  <Link
                    key={index}
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-8 bg-gradient-to-r from-[#F9FAF4] to-[#D9E6A3] border border-[#E3E7C8] rounded-xl hover:border-[#B7C83E] hover:bg-gradient-to-r hover:from-[#B7C83E]/10 hover:to-[#F9FAF4] transition-all duration-500 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Olive accent line */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0 bg-gradient-to-b from-[#B7C83E] to-[#6F7F1E] group-hover:h-16 transition-all duration-300 rounded-full"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Publication Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#B7C83E]/30 to-transparent border border-[#B7C83E]/40 rounded-xl flex items-center justify-center group-hover:border-[#6F7F1E] transition-colors">
                          <Globe size={24} className="text-[#6F7F1E]" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3 py-1 bg-[#B7C83E]/20 text-[#6F7F1E] text-xs font-medium rounded-full">
                              {review.book}
                            </span>
                            <p className="text-lg text-[#6F7F1E] font-medium">
                              {review.publication}
                            </p>
                            <span className="text-sm text-[#5F6148]/40">•</span>
                            <p className="text-sm text-[#5F6148]">{review.date}</p>
                          </div>
                          <h3 className="text-2xl font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E] transition-colors">
                            {review.title}
                          </h3>
                        </div>
                        <p className="text-[#5F6148] leading-relaxed font-cormorant">
                          {review.excerpt}
                        </p>
                      </div>
                      
                      {/* Action Button */}
                      <div className="flex-shrink-0">
                        <div className="group/btn relative overflow-hidden p-3 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg hover:shadow-lg hover:shadow-[#B7C83E]/30 transition-all duration-300">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[#2E2F1F]">Read Review</span>
                            <ChevronRight size={16} className="text-[#2E2F1F] group-hover/btn:translate-x-1 transition-transform" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#6F7F1E] to-[#B7C83E] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Additional Review Note */}
              <div className="text-center pt-8">
                <p className="text-[#5F6148] font-cormorant italic">
                  For interview requests, review copies, or press inquiries, please visit the{" "}
                  <Link href="/contact" className="text-[#6F7F1E] hover:text-[#B7C83E] underline transition-colors">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </SectionContainer>

          {/* Praise Section */}
          <SectionContainer id="praise" className="bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B7C83E] via-[#6F7F1E] to-[#B7C83E]"></div>
            
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">READER & CRITIC PRAISE</span>
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  What They Say
                </h2>
                <p className="font-cormorant text-lg text-[#5F6148]">About "The Strangest of Fruit" & My Work</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {praise.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white rounded-xl border border-[#E3E7C8] hover:border-[#B7C83E] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#B7C83E]/20 animate-slide-up"
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    {/* Olive quote mark */}
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-[#B7C83E]/30" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 ml-10">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-[#B7C83E] text-[#B7C83E]"
                        />
                      ))}
                    </div>
                    
                    {/* Quote text */}
                    <blockquote className="text-lg text-[#2E2F1F]/90 leading-relaxed italic mb-6 font-cormorant pl-2">
                      "{item.text}"
                    </blockquote>
                    
                    {/* Author info */}
                    <div className="border-t border-[#E3E7C8] pt-4">
                      <p className="font-medium text-[#6F7F1E]">{item.author}</p>
                      <p className="text-sm text-[#5F6148]">{item.title}</p>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/0 via-[#B7C83E]/10 to-[#B7C83E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContainer>

          {/* Press Coverage Section */}
          <SectionContainer id="press" className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>
            
            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B7C83E] via-[#6F7F1E] to-[#B7C83E]"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                  <Newspaper size={20} className="text-[#6F7F1E]" />
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">PRESS COVERAGE</span>
                  <div className="h-px w-8 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Featured in the Press
                </h2>
              </div>

              <div className="space-y-4">
                {pressItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={index}
                      href={item.link}
                      className="group relative block p-6 bg-gradient-to-r from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl hover:border-[#B7C83E] hover:bg-gradient-to-r hover:from-[#B7C83E]/10 hover:to-[#F9FAF4] transition-all duration-500 animate-slide-up"
                      style={{ animationDelay: `${index * 100 + 300}ms` }}
                    >
                      {/* Olive accent line */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#B7C83E] to-[#6F7F1E] group-hover:h-12 transition-all duration-300 rounded-full"></div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#B7C83E]/30 to-transparent border border-[#B7C83E]/40 rounded-lg flex items-center justify-center group-hover:border-[#6F7F1E] transition-colors">
                            <Icon size={20} className="text-[#6F7F1E]" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <p className="text-sm text-[#6F7F1E] font-medium uppercase tracking-wider">
                                {item.publication}
                              </p>
                              <span className="text-sm text-[#5F6148]/40">•</span>
                              <p className="text-sm text-[#5F6148]">{item.date}</p>
                            </div>
                            <h3 className="text-xl font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E] transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-[#5F6148] leading-relaxed">
                            {item.excerpt}
                          </p>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 border border-[#B7C83E]/40 rounded-full flex items-center justify-center group-hover:border-[#6F7F1E] group-hover:bg-[#6F7F1E]/10 transition-all">
                            <ChevronRight size={16} className="text-[#6F7F1E] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </SectionContainer>

          {/* Book Information Section */}
          <SectionContainer id="book" className="bg-gradient-to-b from-[#D9E6A3] to-[#F9FAF4] relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg"></div>
            
            {/* Fruit image accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <div className="relative h-full w-full">
                <Image
                  src="/images/fruit.jpeg"
                  alt="Fruit accent"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B7C83E] via-[#6F7F1E] to-[#B7C83E]"></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  The Strangest of Fruit
                </h2>
                <p className="font-cormorant text-xl text-[#6F7F1E] italic">Collected Stories</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Book Cover */}
                <div className="relative group">
                  {/* Olive frame effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-[#6F7F1E] via-[#B7C83E] to-[#D9E6A3] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                    {/* Fruit image on book cover */}
                    <div className="absolute inset-0">
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/fruit.jpeg"
                          alt="The Strangest of Fruit Cover"
                          fill
                          className="object-cover opacity-20"
                        />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-[#6F7F1E] text-sm tracking-widest mb-4">COLLECTED STORIES</div>
                        <h3 className="text-3xl font-bold text-[#2E2F1F] mb-2 leading-tight">The Strangest<br/>of Fruit</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="text-[#6F7F1E]">★</div>
                          ))}
                        </div>
                        <p className="text-[#5F6148] text-sm italic">
                          "A luminous exploration of borders—geographic, emotional, and historical."
                        </p>
                      </div>
                    </div>
                    
                    {/* Olive shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D9E6A3]/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B7C83E]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#2E2F1F] leading-tight">
                      Stories That Cross Borders
                    </h3>
                    
                    <div className="h-px w-20 bg-gradient-to-r from-[#B7C83E] to-transparent"></div>
                    
                    <p className="text-lg text-[#5F6148] leading-relaxed font-cormorant">
                      A collection of interconnected stories exploring identity, belonging, and the narratives we inherit.
                      Ahmed's prose is lyrical and unflinching, presenting characters at the intersection of cultures,
                      religions, and personal truth.
                    </p>
                    <p className="text-lg text-[#5F6148] leading-relaxed font-cormorant">
                      Published by Cheek Press, these stories challenge stereotypes and center voices often marginalized
                      in literary fiction.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-[#6F7F1E] mb-3">Published by</h4>
                      <Link
                        href="https://www.cheek.press/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#2E2F1F] hover:text-[#6F7F1E] transition-colors font-medium group"
                      >
                        <span>Cheek Press</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#6F7F1E] mb-4">Available from</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookLinks.map((link, index) => (
                          <Link
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 bg-[#B7C83E] border border-[#B7C83E] rounded-lg hover:bg-[#6F7F1E] hover:border-[#6F7F1E] hover:text-[#F9FAF4] text-[#2E2F1F] font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#B7C83E]/30 active:scale-95 overflow-hidden"
                          >
                            <span className="relative z-10 flex items-center justify-between">
                              {link.title}
                              <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>

          {/* Other Works Section */}
          <SectionContainer id="other-works" className="bg-[#F9FAF4] relative overflow-hidden">
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 leaf-bg" style={{ transform: 'rotate(45deg)' }}></div>

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                  <span className="font-cormorant text-[#6F7F1E] tracking-widest text-sm">OTHER WORKS</span>
                  <div className="h-px w-12 bg-[#B7C83E]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2F1F]">
                  Explore More Works
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ocean & Mrs. Nagai */}
                <div className="group relative p-8 bg-white border border-[#E3E7C8] rounded-xl hover:border-[#B7C83E] transition-all duration-500 hover:transform hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center">
                        <BookOpen size={24} className="text-[#F9FAF4]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E] transition-colors">
                        Ocean & Mrs. Nagai
                      </h3>
                    </div>
                    <p className="text-[#5F6148] leading-relaxed font-cormorant">
                      A collection of stories exploring relationships, cultural memory, and the ocean as metaphor.
                    </p>
                    <Link
                      href="https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#6F7F1E] hover:text-[#B7C83E] transition-colors font-medium group/link mt-4"
                    >
                      <span>Read on Amazon</span>
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/0 via-[#B7C83E]/10 to-[#B7C83E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>

                {/* Filmography */}
                <div className="group relative p-8 bg-white border border-[#E3E7C8] rounded-xl hover:border-[#B7C83E] transition-all duration-500 hover:transform hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6F7F1E] to-[#B7C83E] rounded-lg flex items-center justify-center">
                        <Award size={24} className="text-[#F9FAF4]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#2E2F1F] group-hover:text-[#6F7F1E] transition-colors">
                        Filmography & Adaptations
                      </h3>
                    </div>
                    <p className="text-[#5F6148] leading-relaxed font-cormorant">
                      My work has been adapted for screen, including projects available on major streaming platforms.
                    </p>
                    <Link
                      href="/films"
                      className="inline-flex items-center gap-2 text-[#6F7F1E] hover:text-[#B7C83E] transition-colors font-medium group/link mt-4"
                    >
                      <span>View Filmography</span>
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B7C83E]/0 via-[#B7C83E]/10 to-[#B7C83E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </main>

        <Footer />
      </div>
    </>
  )
}