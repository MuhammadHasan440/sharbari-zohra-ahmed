"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  ArrowRight, BookOpen, PenTool, Globe, Compass, 
  Sparkles, Calendar, ChevronUp, ExternalLink, MessageSquare,
  Hash, Feather, Heart, Users, Star, Zap 
} from "lucide-react"

export default function BlogPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedEssays, setExpandedEssays] = useState<Record<number, boolean>>({})

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

  const toggleEssay = (index: number) => {
    setExpandedEssays(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const blogTopics = [
    {
      title: "Lights in Abu Dhabi, Silence in Connecticut",
      category: "essay",
      date: "March 2026",
      excerpt: "On experiencing Ramadan in the UAE versus the solitude of Connecticut, and the search for community.",
      preview: `The sun would set in Abu Dhabi and suddenly the city lit up. The malls stayed open until all hours of the night. Street food stalls opened around two or three in the morning...`,
      content: `The sun would set in Abu Dhabi and suddenly the city lit up. The malls stayed open until all hours of the night. Street food stalls opened around two or three in the morning. You could walk down the street at 3:45 a.m. and get yourself a shawarma. There were queues outside restaurants so people could have their suhoor, their predawn meal in preparation for fasting all day. You could feel the joy. You could feel the camaraderie, the unity, the community. I had never experienced that before.

In 2000 and into 2001 I lived in Abu Dhabi, a place I haven't yet written about in depth. I've written about so many places where I've lived all over the world but never the Emirates. I think I still have to process my eleven months there. I was there on September 11, 2001—but that's not what this essay is about.

What I remember is experiencing Ramadan in a way that I had never experienced it in my entire life.

I grew up in Connecticut and New York, and Ramadan was restricted. It wasn't recognized in my schools as an official holiday. Eid wasn't recognized. I didn't get the day off. My parents did not force me to fast, and I don't think I ever fasted as a child. In fact, no—I didn't. I never fasted as a child.

This fasting-for-Ramadan business is happening now as an adult, years after my mother tried to get me to do it in my twenties.

At any rate, I didn't look at Ramadan as something to be celebrated or as a time of spiritual grounding or even fun until I got to Abu Dhabi.

The sun would set and the city would come alive. Lights everywhere. People happy and festive. Restaurants full. Families out late into the night. It felt communal and safe. No hostile scrutiny or ignorant judgment.

Then I returned to the United States after 9/11.

Being Muslim took on a very different connotation. Being Muslim American suddenly seemed almost like an oxymoron, and of course we were othered exponentially more than we had been in the past. We were now enemy combatants. Domestic threats.

Ramadan for me now is very solitary.

I get up around 4 a.m.—somewhere between 4 and 4:20. Today I got up at 4:45 because I was very tired. I hydrate quickly and eat very little before the fast begins.

When I break my fast at iftar it's usually a very simple meal because I don't have the energy to cook.

I have become so accustomed to not having my culture recognized in the US and even vilified that I've gotten used to celebrating quietly. Even alone.

I'm not feeling sorry for myself. I'm lucky that I even have food to break my fast with considering how many are starving all over the world—how many Muslims are starving in Gaza and Sudan.`,
      readTime: "9 min read",
      icon: Globe,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      substackUrl: "https://sharbariahmed.substack.com/p/lights-in-abu-dhabi-silence-in-connecticut",
      featured: true
    },
    {
      title: "Half Spring",
      category: "essay",
      date: "March 2026",
      excerpt: "Ramadan thoughts at dawn, when the mind won't settle and the words won't come.",
      preview: `I was up at 4 a.m. for seheri, the predawn meal that prepares you for fasting. While I ate, I watched a silly TV show—a murder mystery set in Maine but clearly filmed in Canada...`,
      content: `I was up at 4 a.m. for seheri, the predawn meal that prepares you for fasting. While I ate, I watched a silly TV show—a murder mystery set in Maine but clearly filmed in Canada. Somehow shows filmed in Canada just have a different feel, even when they're supposed to take place in the United States. I can always tell. Except for The X-Files. That show always felt like it was shot in the U.S., even though it was filmed in Vancouver.

These are the random thoughts floating through my head lately. I can't seem to settle on anything solid. My thoughts land briefly, like a butterfly touching the tip of a flower before fluttering away again. Someone might say that's healthy—that thoughts are supposed to move like that.

But I'm having too many of them, and not all of them are as beautiful as butterflies or flowers.

After eating I hydrated and fell asleep on the couch. I woke up with a weight on my chest and made my way wearily back upstairs, but now I can't fall back asleep. It's almost 7 a.m. The sun is creeping over the horizon, and it's supposed to snow today.

This is half-spring—the uneasy in-between space where winter hasn't quite released its grip and spring hasn't fully arrived. Mother Nature appears undecided, as though she still wants to linger in winter just a little longer.

These last few nights are among the most sacred nights of Ramadan. They're called Laylatul Qadr, nights believed to be charged with extraordinary spiritual energy, when prayers travel farther.

I've been feeling pressure to figure out what to pray for beyond what I want for myself and the people I love.

I haven't been able to write.

I have a wonderful producer and director waiting on a script they want to make. I don't have far to go to revise it—to bring it to the level they need. And yet somehow I can't take pen to paper. Yet.

All I seem able to write are these essays.

Every morning I wake up knowing that more children have been killed. More children have been hurt, exploited, assaulted, erased.`,
      readTime: "7 min read",
      icon: PenTool,
      color: "from-[#2E2F1F] to-[#5F6148]",
      substackUrl: "https://open.substack.com/pub/sharbariahmed/p/half-spring?r=e422r&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
      title: "What Do We Do When Our Heroes Are On the Wrong Side of History?",
      category: "essay",
      date: "February 2026",
      excerpt: "On artistic brilliance, moral fracture, and what remains when admiration breaks.",
      preview: `The talent is undeniable. The joy is undeniable. But what do you do when the person who helped shape you stands somewhere you cannot stand? Black and white...`,
      content: `The talent is undeniable. The joy is undeniable. But what do you do when the person who helped shape you stands somewhere you cannot stand?

Black and white. Nineteen Sixty Five.

I think it's a TV special. A very young Barbra Streisand approaches the mic and effortlessly launches into "Lover, Come Back to Me". It's a big band arrangement — bubbly and joyful and fun — and you can see her having fun.

She's so young. So vibrant.

She's got this really great short, shiny bob. She's beautiful in a very unexpected way. And her voice is like honey and bells, sunshine.

I've loved Barbra for a long time.

When I was in elementary school or middle school — I can't remember — Yentl came out, and I had these friends, Kristie and Jason, and the three of us would, just for fun, say lines from Yentl and act stuff out.

I loved Funny Girl the most. She's aware she's not traditionally attractive but she's got the chutzpah and the talent to stand out. That's how I felt about myself.

And there was something about her Jewishness that reminded me so much of myself — a Muslim girl. American but just a little bit "other".

So Barbra was one of those, for this little Bangladeshi American girl growing up who dreamed of making movies and being in the movies, or at least being part of it — the magic of it all.

She was one of my pillars. One of my tent poles.

And then, on my feed, that 1965 performance of "Lover, Come Back to Me" pops up.

But now I watch it differently.

I might even sing along.

And I will extract joy from it, because the talent and the genius are undeniable. The way it makes you feel is undeniable.

But here's the thing.

Barbra doesn't care about Palestinians.

She doesn't care about the genocide.

And she has a very different view of whether or not it is even a genocide. I've read her posts. I even replied to them once and told her how much she broke my heart. I'm still waiting for a response.

And so I'm watching her sing.

I'm watching this beautiful, brilliant, talented young girl sing, and her voice and her artistry have brought so much joy to so many people and helped us with our dreams and our aspirations.

But I know.

I know where she stands.

And we are not the same.`,
      readTime: "11 min read",
      icon: Sparkles,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      substackUrl: "https://sharbariahmed.substack.com/p/what-do-we-do-when-our-heroes-are",
      featured: true
    },
    {
      title: "Does It Count?",
      category: "essay",
      date: "March 2026",
      excerpt: "Revelations During Ramadan about self-criticism, productivity, and softening.",
      preview: `Day Fourteen. I am on my fourteenth day of fasting for Ramadan, and I have learned new things about myself. Or perhaps not new things — perhaps old things that keep resounding...`,
      content: `Day Fourteen.

I am on my fourteenth day of fasting for Ramadan, and I have learned new things about myself. Or perhaps not new things — perhaps old things that keep resounding, echoing louder in the quiet.

One of them is this: I beat myself up a lot.

I am constantly criticizing the way I am fasting — what I'm doing, what I'm not doing, how I'm showing up to the fast. I keep waiting for a major revelation, some breakthrough, some clear evidence that I am improving as a person. When that doesn't arrive in cinematic form, I assume I am failing.

And yet, I am still marveling at my willpower. I am impressed by my commitment. Fourteen days of abstaining. Fourteen days of discipline. Fourteen days of getting up before dawn and stopping myself before sunset. That is not nothing.

But I find myself lying around a lot. Staring into space. And then feeling guilty for lying around and staring into space because it is not productive — or at least not productive in the way a society addicted to hustle defines productivity. And because I have the luxury to do that.

I have gone to the gym a few times each week that I've fasted — at least twice, maybe once. I honestly can't remember, but I've gone. I've been strength training and didn't want my progress to halt. In fact, I just worked out at home a few moments ago. Squats. Push-ups with bent knees.

And immediately: Does that count? Does the push-up count if it's on my knees? I held a plank for thirty seconds, but it nearly killed me. My arms shook violently the hold time but I held it. Somehow that doesn't feel sufficient either.

Even here, even in hunger and thirst, the measuring continues.

Around me, a war is raging. One hundred and eighty-five little Iranian schoolgirls were killed — was it the first day of this month or the last day of last month? The details blur, but the number sits heavy. My son had a birthday on the 28th. When I called to wish him happy birthday, he said, "I'm not feeling very celebratory. We've just bombed Iran."

It is hard to hold celebration and devastation in the same breath. He's right.`,
      readTime: "6 min read",
      icon: PenTool,
      color: "from-[#2E2F1F] to-[#5F6148]",
      substackUrl: "https://sharbariahmed.substack.com/p/does-it-count"
    },
    {
      title: "The Illusion of Exception",
      category: "essay",
      date: "January 2026",
      excerpt: "Self Interrogation From A Model Minority about fear, complacency, and safety.",
      preview: `I woke up this morning afraid. Last night I took five Benadryl just to fall asleep. That alone should tell you something about how fear now lives in my body, not just my thoughts...`,
      content: `I woke up this morning afraid.

Last night I took five Benadryl just to fall asleep. That alone should tell you something about how fear now lives in my body, not just my thoughts.

I wake up every morning afraid since Renee Nicole Good was executed in her car in Minneapolis on January 7. January 7 is my parents' wedding anniversary. I forgot to call my father that day. It was his second anniversary without my mother, and I didn't call him. Grief compounds like this, personal failure braided with public horror, until everything feels unforgivable.

ICE has killed many more people than we know about. We don't know for a few reasons. Sometimes no one is there to witness it except those who support it. Sometimes the only witnesses are the victims' families and friends. Often, we don't know because the victims were not white. Or not American. Or white enough.

Keith Porter Jr. was killed by an off-duty ICE agent on December 31, 2025, in Northridge, California. Keith was a Black man with a legal firearm, which he discharged at midnight in celebration. He was gunned down anyway. I didn't hear about Keith until Renee was killed.

I have always known how racist this country is. White supremacy is baked into it—into its soil, the soil upon which white-fearing and white-favoring institutions are built. I am ashamed to admit that my own fear became more acute after Renee's death. I want to say it's because she was a woman. But I think I have to admit it's because she was white.

And then Alex Preeti was executed on January 24th, also in Minneapolis.

He was white. Presumably straight. He owned a legal firearm. He carried it because Minnesota allows this. He worked helping injured veterans recover. That was his job. He was, by every metric, a liberal poster boy for the NRA. And he died trying to protect a woman being physically harassed by ICE agents.

I am ashamed that this is the death that finally made me realize I am in real danger.`,
      readTime: "12 min read",
      icon: Compass,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      substackUrl: "https://sharbariahmed.substack.com/p/the-illusion-of-exception"
    },
    {
      title: "We Were Raised to Believe in Giants. Now We Search for Survivors.",
      category: "essay",
      date: "February 2026",
      excerpt: "An essay about the quiet grief of losing faith in leadership — and the ordinary people who are stepping forward anyway.",
      preview: `Tina Turner sings "We Don't Need Another Hero" but I'm going to have to disagree. I'm desperately searching for heroes. I'm desperately searching for leadership...`,
      content: `Tina Turner sings "We Don't Need Another Hero" but I'm going to have to disagree.

I'm desperately searching for heroes. I'm desperately searching for leadership. I think many Americans are.

Gone are the days of Dr. Martin Luther King Jr., James Baldwin, or Malcolm X. Bell Hooks is gone. So is Shirley Chisholm. I used to look to Noam Chomsky. Now I see headlines and lists and rumors about powerful people, and I don't even know what any of it means anymore. The ground feels unstable. If the Dalai Lama shows up on a skin crawling list I won't be surprised. Just please not Dolly Parton. That might break me.

I don't want to become cynical. That would feel like defeat. But I also don't want to delude myself into believing the world I grew up in is the same world we live in now.

That island of corruption, dissipation and cruelty was always there. In different forms. We just refused to see it.

Because this kind of human depravity is not new. All I have to do is think of the photographs from King Leopold's Congo — a father holding the amputated hand of his five-year-old daughter, cut off by colonial soldiers because he failed to meet a rubber quota.

Children have always been sacrificed. Sometimes ritualistically. Sometimes symbolically. Sometimes politically. We see it everywhere — in Gaza, in detention systems, in the foster care system, in Sudan, places where human life becomes negotiable.

And still — I need a hero.

I need a leader.

I need someone to look toward.

Someone to help lead us out of the desert.`,
      readTime: "8 min read",
      icon: Sparkles,
      color: "from-[#2E2F1F] to-[#5F6148]",
      substackUrl: "https://sharbariahmed.substack.com/p/we-were-raised-to-believe-in-giants"
    },
    {
      title: "Thirty Days Without Water, and I Finally Heard Myself",
      category: "essay",
      date: "February 2026",
      excerpt: "How a month of fasting undid false narratives and revealed resilience.",
      preview: `Last year, for the first time in my life — and I've been on this planet for quite a bit of time — I kept all 30 fasts during Ramadan. It was life-altering for me...`,
      content: `Last year, for the first time in my life — and I've been on this planet for quite a bit of time — I kept all 30 fasts during Ramadan.

It was life-altering for me.

It undid narratives that others had built around me and that I had built around myself — false narratives, narratives that kept me limited in how I understood who I was, what I was capable of, and what the very essence of my being was.

When we're young, labels are placed on us — at home, at school, in social circles — and then, as we get older, in work and other educational environments, teachers, friends, and of course family members create narratives around incidents we might be involved in, or our reactions to something.

And we are labeled.

A scarlet letter permanently affixed to our breast.

The labels didn't fall off all at once. They stopped sticking.

Volatile. Angry. Unstable. Undisciplined. Upsetting. Difficult.

These were just some of the labels I have borne and, at times, still bear.

And if we're not careful, these labels — often negative — take over our spirits. We start to emulate them. Their characteristics begin to become part of who we are, when they are not truly who we are.

And it took 30 days of fasting — every day from sunup until sundown, no water, forget about food — for me to understand who I was.

How strong I was.

How grounded I was.

How powerful my willpower is.

It coincided with the shedding of so many things: habits that were limiting, people and toxic relationships that were draining me, hurting me, undermining me.`,
      readTime: "10 min read",
      icon: PenTool,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      substackUrl: "https://sharbariahmed.substack.com/p/thirty-days-without-water-and-i-finally",
      featured: true
    },
    {
      title: "Note to Self: Being Too Social is a Form of Anxiety",
      category: "essay",
      date: "October 2025",
      excerpt: "On introversion, people-pleasing, and finally understanding what my mother meant.",
      preview: `My late mother would always say to me, you know you're a loner right? and I would bristle and take it as an insult. And not merely because I was an adolescent...`,
      content: `My late mother would always say to me, you know you're a loner right? and I would bristle and take it as an insult. And not merely because I was an adolescent when she first started telling me this, and I wanted so badly to belong and to be accepted as most adolescents want to be - it's a normal part of development I suppose. Kids already thought I was weird. I never found it easy to make friends as a child-not the way I can now as an adult. It's a myth, by the way, that you can't make new friends as a middle-aged person.

Maybe it's easier because I'm leaning more into my authentic self. And I don't really give a shit if people like me anymore. As the Brits say, I can't be assed. I think that's an expression. Maybe not. That's the eternal paradox, isn't it? When the need to be claimed goes away, open doors and acceptances abound!

The other day a friend asked if I wanted to go to dinner and I said, without thinking, "Would you mind terribly if I didn't want to do that?" This is someone I like and they understood. "I'm cocooning," I said. She got it. She knows I need to do that in order to write.

But I wasn't always like this. I think the rejections I faced as a child I internalized deeply. And so, as an adult in my 30s moving to a town like Darien, Connecticut, where socializing is very much part of the culture, not to mention the fact that your kids' social success also depended on yours to a certain degree, I automatically sought acceptance and a group of friends that I could rely on.

I have since stopped doing this and it is incredibly freeing. I don't want to be the one getting stand-up show tickets and arranging theatre trips and events for groups. Or making dinner. I think I will always want to do it for individual pals who have proven to be supportive and consistently present.`,
      readTime: "7 min read",
      icon: Compass,
      color: "from-[#2E2F1F] to-[#5F6148]",
      substackUrl: "https://sharbariahmed.substack.com/p/note-to-self-being-too-social-is"
    },
    {
      title: "A Tribute to Rob Reiner (With One Complication)",
      category: "essay",
      date: "January 2026",
      excerpt: "Grief, nostalgia, and the moment a 'classic' stopped feeling safe.",
      preview: `I went looking for comfort and found a complication that left a bruise. A beloved director; a familiar film, and a story I could no longer sit through...`,
      content: `I went looking for comfort and found a complication that left a bruise.

A beloved director; a familiar film, and a story I could no longer sit through.

I always dreamt of being in movies. Not just watching them, living inside them; breathing their air. Just belonging to their heightened reality, where everything mattered: the timing of a look, the power shift in a room, the way a character could reveal their entire soul with one line.

When I was a little girl, I used to watch old shows on reruns in my parents' farmhouse living room in Chester, Connecticut. "Big Valley" was one of them. I would sit there utterly mesmerized by Barbara Stanwyck, the head of the Barkley clan —commanding, elegant, ferocious. The head of a ranch. The head of a family. The head of everything. She spoke, people listened. She decided, the world moved.

Rob Reiner was one of those directors whose work I didn't just enjoy—I trusted.

The range alone was astonishing. Most filmmakers find a lane and stay there. Reiner moved between genres like someone fluent in multiple languages.

He gave us one of the most classic American romantic comedies: "When Harry Met Sally"—tender, hilarious, iconic, written by the equally brilliant and funny Nora Ephron.

He gave us an intense, masculine courtroom drama like "A Few Good Men".

And he gave us one of the best satires ever made: "This Is Spinal Tap", which I quote freely a lot.

It wasn't just that he was good, it was that he made storytelling look like a big, welcoming room. He made movies that felt like you could walk into them or sit in them, like a big couch with deep cushions. Like you could safely sink into them.`,
      readTime: "11 min read",
      icon: Sparkles,
      color: "from-[#B7C83E] to-[#6F7F1E]",
      substackUrl: "https://sharbariahmed.substack.com/p/a-tribute-to-rob-reiner-with-one",
      featured: true
    }
  ]

  // Topics with Lucide React icons
  const topics = [
    { id: "all", title: "All Topics", icon: Hash, count: "50+" },
    { id: "writing", title: "Writing & Craft", icon: Feather, count: "20+" },
    { id: "identity", title: "Identity & Heritage", icon: Heart, count: "15+" },
    { id: "diaspora", title: "Diasporic Longing", icon: Compass, count: "10+" },
    { id: "faith", title: "Faith & Spirituality", icon: Star, count: "8+" },
    { id: "craft", title: "Creative Process", icon: Zap, count: "12+" },
  ]

  // Categories - sirf "All Essays" rakha hai
  const categories = [
    { id: "all", label: "All Essays" }
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

        /* Smooth scrolling fix */
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

        /* Line clamp for preview */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
                  <PenTool size={14} className="text-[#B7C83E]" />
                  <p className="font-subheading text-xs text-[#B7C83E] tracking-widest">
                    ESSAYS & REFLECTIONS
                  </p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Underdog Energy 
                <br />
                <span className="text-[#B7C83E]">+ Substack</span>
              </h1>

              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg md:text-xl text-white/90 leading-relaxed px-2 max-w-2xl mx-auto">
                Reflections on writing, identity, film, faith, creativity, and diasporic life.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
                {[
                  { value: "50+", label: "Essays Published" },
                  { value: "5k+", label: "Readers" },
                  { value: "100%", label: "Free Content" },
                  { value: "9", label: "Categories" }
                ].map((stat, idx) => (
                  <div key={idx} className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                    <p className="text-xl md:text-2xl font-bold text-[#B7C83E]">{stat.value}</p>
                    <p className="text-xs text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Essays Section */}
        <section className="py-8 md:py-12 container-padding max-w-content">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">All Essays</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            <div className="space-y-6">
              {blogTopics
                .filter(article => activeCategory === "all" || article.category === activeCategory)
                .map((article, index) => {
                  const Icon = article.icon
                  const isExpanded = expandedEssays[index]
                  
                  return (
                    <article
                      key={index}
                      className={`relative p-5 md:p-6 bg-gradient-to-br from-[#F9FAF4] to-white border rounded-xl transition-all hover:shadow-lg ${
                        article.featured ? 'border-[#B7C83E] shadow-lg' : 'border-[#E3E7C8]'
                      }`}
                    >
                      {article.featured && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] rounded-full border border-[#E3E7C8]">
                          <p className="text-xs font-bold text-[#2E2F1F]">FEATURED</p>
                        </div>
                      )}

                      <div className="flex items-start gap-3 md:gap-4 mb-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${article.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E3E7C8]`}>
                          <Icon className="text-white" size={18} />
                        </div>

                        <div className="space-y-2 flex-1">
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

                          <h3 className="text-base md:text-lg font-bold text-[#2E2F1F]">
                            {article.title}
                          </h3>
                        </div>
                      </div>

                      {/* Essay Content with Toggle */}
                      <div className="text-sm text-[#5F6148] space-y-3">
                        <p className={!isExpanded ? "line-clamp-3" : ""}>
                          {isExpanded ? article.content : article.preview}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 pt-3 border-t border-[#E3E7C8] flex flex-wrap gap-3 justify-between items-center">
                        <button
                          onClick={() => toggleEssay(index)}
                          className="text-sm text-[#6F7F1E] hover:text-[#B7C83E] font-medium transition-colors flex items-center gap-1"
                        >
                          {isExpanded ? 'Show Less' : 'Read Full Essay'}
                          <ArrowRight size={14} className={isExpanded ? 'rotate-90' : ''} />
                        </button>
                        
                        <Link
                          href={article.substackUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[#6F7F1E] hover:text-[#B7C83E] font-medium transition-colors"
                        >
                          Read on Substack
                          <ExternalLink size={14} />
                        </Link>
                      </div>
                    </article>
                  )
                })}
            </div>
          </div>
        </section>

        {/* Topics Grid - With Lucide Icons */}
        <section className="py-12 w-full bg-gradient-to-b from-[#F9FAF4] to-[#D9E6A3]">
          <div className="container-padding max-w-content">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                  <PenTool size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">Topics I Explore</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#B7C83E] to-transparent mt-1"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {topics.map((topic, index) => {
                  const TopicIcon = topic.icon
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(topic.id)}
                      className={`p-4 rounded-lg border transition-all hover:shadow-md ${
                        activeCategory === topic.id
                          ? 'border-[#B7C83E] bg-gradient-to-br from-[#F9FAF4] to-white shadow-sm'
                          : 'border-[#E3E7C8] bg-white hover:border-[#B7C83E]'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <TopicIcon size={20} className={activeCategory === topic.id ? 'text-[#B7C83E]' : 'text-[#5F6148]'} />
                          <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                            activeCategory === topic.id ? 'bg-[#B7C83E] scale-150' : 'bg-transparent'
                          }`}></div>
                        </div>
                        
                        <h3 className="font-bold text-[#2E2F1F] text-sm line-clamp-2">{topic.title}</h3>
                        
                        <p className="text-[#5F6148] text-xs">{topic.count} essays</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 w-full bg-gradient-to-br from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] border-t border-[#E3E7C8]">
          <div className="container-padding max-w-content">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                  <MessageSquare size={28} className="text-white" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">
                  Subscribe to
                  <br />
                  <span className="text-[#6F7F1E]">My Newsletter</span>
                </h2>
                
                <p className="text-[#5F6148] font-subheading text-sm md:text-base">
                  Get essays about writing, identity, creativity, and diasporic life. Join a community of writers and storytelling enthusiasts.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="https://sharbariahmed.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg hover:scale-105 transition-all text-center border border-[#E3E7C8]"
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

        {/* Archive Preview */}
        <section className="py-12 container-padding max-w-content">
          <div className="space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">
                Explore
                <br className="md:hidden" />
                <span className="text-[#6F7F1E]"> The Archive</span>
              </h2>
              <p className="text-[#5F6148] font-subheading max-w-2xl mx-auto md:mx-0">
                Years of writing on culture, creativity, and the human experience. All essays are free to read.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: BookOpen, title: "Latest Essays", desc: "Most recent reflections and insights" },
                { icon: Sparkles, title: "Popular Series", desc: "Multi-part essays and themed collections" },
                { icon: PenTool, title: "Writer's Notes", desc: "Behind-the-scenes of the creative process" }
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-gradient-to-br from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D9E6A3] to-[#B7C83E]/20 rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                      <item.icon size={18} className="text-[#5F6148]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5F6148]">{item.title}</h3>
                      <p className="text-[#5F6148]/70 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="https://sharbariahmed.substack.com/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-gradient-to-r hover:from-[#B7C83E] hover:to-[#6F7F1E] hover:text-[#2E2F1F] transition-all text-sm font-medium"
              >
                Browse Full Archive
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all border border-[#E3E7C8]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#2E2F1F]" />
        </button>
      )}
    </div>
  )
}