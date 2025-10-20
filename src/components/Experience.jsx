import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef()
  const containerRef = useRef()
  const timelineRef = useRef()
  const certsCarouselRef = useRef()

  const experiences = [
    {
      company: "Thirdvizion Labs Private Limited",
      position: "Front-end Developer",
      period: "07/2025 - 10/2025",
      description: "Collaborated on company website and real-time construction projects, developing immersive interactive experiences.",
      achievements: [
        "Resolved Django-React API integration challenges and organized file structures",
        "Developed immersive, interactive websites using React, Three.js, and GSAP",
        "Implemented structured Git workflow for team collaboration",
        "Partnered with UI/UX designers for optimal user experiences"
      ],
      tech: ["React", "Three.js", "GSAP", "Django", "Git"],
      icon: "⚡",
      intensity: "high"
    }
  ]

  const certifications = [
    {
      title: "Advanced Front-End Web Development",
      issuer: "Udemy",
      date: "2023",
      badge: "🎯",
      skills: ["React", "JavaScript", "CSS3", "HTML5"],
      level: "Advanced"
    },
    {
      title: "Python & Data Science Training",
      issuer: "IIT Bombay",
      date: "2022",
      badge: "📊",
      skills: ["Python", "Data Analysis", "Machine Learning"],
      level: "Professional"
    },
    {
      title: "ReactJS Mastery Course",
      issuer: "Simplilearn",
      date: "2023",
      badge: "⚛️",
      skills: ["React", "Redux", "Hooks", "Context API"],
      level: "Master"
    },
    {
      title: "Redux State Management",
      issuer: "LinkedIn Learning",
      date: "2023",
      badge: "🔄",
      skills: ["Redux", "State Management", "Middleware"],
      level: "Advanced"
    },
    {
      title: "PostgreSQL Database Management",
      issuer: "IIT Bombay",
      date: "2022",
      badge: "🐘",
      skills: ["PostgreSQL", "Database Design", "SQL"],
      level: "Professional"
    },
    {
      title: "Three.js & WebGL",
      issuer: "Udemy",
      date: "2023",
      badge: "🎮",
      skills: ["Three.js", "WebGL", "3D Graphics"],
      level: "Advanced"
    }
  ]

  useEffect(() => {
    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(containerRef.current,
      { y: 200, opacity: 0, rotationX: 15 },
      { y: 0, opacity: 1, rotationX: 0, duration: 2, ease: "power3.out" }
    )
    
    .fromTo('.title-underline',
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" },
      "-=1"
    )
   
    .fromTo('.cert-card',
      { 
        y: 100, 
        opacity: 0,
        rotationY: -45 
      },
      { 
        y: 0, 
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    )

    // Floating animation
    gsap.to('.float-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    })

    // Pulse glow effect
    gsap.to('.pulse-glow', {
      boxShadow: "0 0 30px #ffffff, 0 0 60px #666666",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Text shimmer effect
    gsap.to('.shimmer-text', {
      backgroundPosition: "200% 0%",
      duration: 3,
      repeat: -1,
      ease: "linear"
    })

    // Infinite carousel animation for certifications
    gsap.to(certsCarouselRef.current, {
      x: -certsCarouselRef.current.scrollWidth / 2,
      duration: 40,
      repeat: -1,
      ease: "linear"
    })
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Main Container */}
      <div ref={containerRef} className="relative max-w-8xl mt-35 px-6 pt-30 py-16 lg:py-24">
        
        {/* Section Header with Epic Animation */}
        <div className="text-center mb-20 relative">
          
          
          <h1 className="main-title text-7xl lg:text-9xl font-black relative">
            <span className="shimmer-text bg-gradient-to-r  from-black via-gray-200 to-gray-300 bg-clip-text text-transparent bg-size-200">
              EXPERIENCE
            </span>
          </h1>
          
          <div className="title-underline w-64 h-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 mx-auto mt-8 rounded-full shadow-2xl shadow-white/50"></div>
          
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Where <span className="text-white font-semibold">Innovation Meets Execution</span> - A Journey Through Digital Excellence
          </p>
        </div>

        {/* Main Content - Experience Section */}
        <div className="mb-32">
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            
            {/* Animated Timeline Line */}
          
            
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-card relative mb-12 ml-8 group">
                
              
                {/* Experience Card */}
                <div className="float-element bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-600/30 hover:border-gray-400/60 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl overflow-hidden">
                  
                  {/* Header */}
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-3xl spark-element">{exp.icon}</span>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{exp.company}</h3>
                          <p className="text-xl font-semibold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 font-medium">{exp.period}</p>
                    </div>
                    
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-gray-300 text-lg leading-relaxed mb-6 font-light">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="relative z-10 space-y-4 mb-8">
                    <h4 className="font-bold text-white text-lg uppercase tracking-wider flex items-center">
                      <span className="w-3 h-3 bg-gray-400 rounded-full mr-3 shadow-lg shadow-gray-400/50"></span>
                      KEY ACHIEVEMENTS
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3 group">
                          <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-gray-400/30"></div>
                          <span className="text-gray-400 leading-relaxed group-hover:text-white transition-colors text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="relative z-10">
                    <h4 className="font-bold text-white text-lg uppercase tracking-wider mb-4 flex items-center">
                      <span className="w-3 h-3 bg-gray-400 rounded-full mr-3 shadow-lg shadow-gray-400/50"></span>
                      TECHNOLOGIES MASTERED
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.tech.map((tech, i) => (
                        <span 
                          key={tech}
                          className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl text-sm font-semibold shadow-lg border border-gray-500/50 hover:scale-110 hover:shadow-xl hover:bg-gray-600 transition-all duration-300 pulse-glow"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Carousel Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 shimmer-text">
              CERTIFICATIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-500 mx-auto rounded-full pulse-glow"></div>
            <p className="text-gray-400 mt-6 text-lg">Continuously expanding expertise through certified learning</p>
          </div>

          {/* Infinite Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              ref={certsCarouselRef}
              className="flex space-x-8 py-4"
              style={{ width: 'max-content' }}
            >
              {/* Double the array for seamless loop */}
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.title}-${index}`}
                  className="cert-card flex-shrink-0 w-80 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-600/30 hover:border-gray-400/60 hover:shadow-3xl transition-all duration-500 hover:scale-105 group overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* Certification Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl spark-element">{cert.badge}</span>
                        <div>
                          <h4 className="font-bold text-white text-lg leading-tight group-hover:text-gray-200 transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-gray-400 font-semibold text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-bold rounded-full shadow-lg shadow-white/50 pulse-glow">
                        {cert.date}
                      </span>
                    </div>

                    {/* Level Badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        cert.level === 'Master' ? 'bg-gray-300 text-black' :
                        cert.level === 'Advanced' ? 'bg-gray-500 text-white' :
                        'bg-gray-600 text-white'
                      } shadow-lg`}>
                        {cert.level} LEVEL
                      </span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-600/30 group-hover:scale-105 group-hover:bg-gray-600/50 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Hover Effect Line */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 100%;
        }
      `}</style>
    </section>
  )
}