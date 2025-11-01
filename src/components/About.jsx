import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef()
  const containerRef = useRef()
  const headingRef = useRef()
  const textRef = useRef()
  const skillsRef = useRef()
  const certificationsRef = useRef()
  const statsRef = useRef()

  const skills = [
    { name: 'ReactJS', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'NextJS', level: 92, color: 'from-black to-gray-800' },
    { name: 'Three.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'GSAP', level: 88, color: 'from-green-400 to-blue-500' },
    { name: 'TailwindCSS', level: 94, color: 'from-cyan-500 to-blue-500' },
    { name: 'RESTful APIs', level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-indigo-600' }
  ]

  const certifications = [
    { name: "Advanced Front-End Development", issuer: "Udemy", year: "2023" },
    { name: "Python & Data Science", issuer: "IIT Bombay", year: "2022" },
    { name: "ReactJS Mastery", issuer: "Simplilearn", year: "2023" },
    { name: "Redux State Management", issuer: "LinkedIn", year: "2023" },
    { name: "Database Management", issuer: "IIT Bombay", year: "2022" }
  ]

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(containerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(headingRef.current,
      { scale: 0.8, rotationX: -45, opacity: 0 },
      { scale: 1, rotationX: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.8"
    )
    .fromTo('.floating-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo('.skill-item',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo('.cert-card',
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    )

    // Animate skill bars
    skills.forEach((skill, index) => {
      gsap.to(`.skill-bar-${index}`, {
        width: `${skill.level}%`,
        duration: 2,
        delay: index * 0.15,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    })

    // Floating animation for cards
    gsap.to('.floating-element', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                             linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full floating-element`}
            style={{
              background: `linear-gradient(45deg, ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'}, ${i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#06b6d4' : '#3b82f6'})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Container */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div ref={headingRef} className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg"></div>
            <h2 className="text-6xl lg:text-8xl font-black relative bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent tracking-tighter">
              ABOUT
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences with precision and innovation
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Personal Info & Stats */}
         <div className="space-y-12">
  {/* Work Experience */}
  <div
    ref={textRef}
    className="floating-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500"
  >
    <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
      <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
      My Journey
    </h3>
    <div className="space-y-4 text-gray-700 leading-relaxed">
      <p className="text-lg">
        I'm currently working as a <span className="font-bold text-black">Front-End Developer</span> at 
        <span className="font-semibold text-black"> Thirdvizion Labs Pvt. Ltd.</span> (July 2025 – Present), where I contribute 
        to building immersive and dynamic web experiences using modern web technologies.
      </p>
      <p>
        I also worked on multiple academic projects during my <span className="font-semibold text-black">Master of Computer Application at Vels Institute (2023–2025)</span>, 
        focusing on responsive web applications, API integration, and collaborative development with peers.
      </p>
      <p>
        During my <span className="font-semibold text-black">BCA in Data Science from B. S. Abdur Rahman Crescent Institute (2020–2023)</span>, 
        I gained hands-on experience in programming, data-driven solutions, and building frontend projects, 
        which strengthened my technical foundation and problem-solving skills.
      </p>
    </div>
  </div>


            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="floating-card bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center shadow-xl border border-blue-100 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-blue-600 mb-2">1</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Year Experience</div>
              </div>
              <div className="floating-card bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center shadow-xl border border-purple-100 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-purple-600 mb-2">15+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="floating-card bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center shadow-xl border border-green-100 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-green-600 mb-2">8+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Technologies</div>
              </div>
              <div className="floating-card bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-orange-600 mb-2">5+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="space-y-12">
            
            {/* Skills Section */}
            <div ref={skillsRef} className="floating-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></span>
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-800 group-hover:text-black transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div 
                        className={`skill-bar-${index} h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg transform origin-left group-hover:scale-y-110 transition-transform duration-300`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          
              </div>
          
        
        </div>

       
      </div>
    </section>
  )
}
