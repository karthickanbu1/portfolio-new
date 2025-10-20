import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef()
  const containerRef = useRef()
  const headingRef = useRef()
  const projectsRef = useRef([])

  const projects = [
    {
      title: "Learning Management System",
      tech: "ReactJS · GSAP · TailwindCSS · OpenAI API · RESTful API",
      desc: "Full-featured LMS with authentication, course management, assignment dashboard, and integrated AI chatbot using OpenAI API.",
      features: ["AI Chatbot", "JWT Authentication", "GSAP Animations", "Mobile Responsive"],
      link: "#",
      image: "📚",
      color: "from-blue-500 to-cyan-500",
      stats: "95% Complete"
    },
    {
      title: "Augmented Reality 3D Website Portal",
      tech: "NextJS · Three.js · TailwindCSS · GSAP · WebXR",
      desc: "Markerless AR experience using WebXR and NextJS, enabling users to place and interact with 3D models in real-world space.",
      features: ["WebXR", "Three.js", "Markerless AR", "GSAP Animations"],
      link: "#",
      image: "🔮",
      color: "from-purple-500 to-pink-500",
      stats: "88% Complete"
    },
    {
      title: "Enterprise Resource Planning Software",
      tech: "ReactJS · TailwindCSS · GSAP · Parallax.js · Django",
      desc: "Comprehensive ERP Management System with OTP-based authentication and modern black-and-white themed interface.",
      features: ["OTP Authentication", "Vendor Management", "Customer Management", "Product Management"],
      link: "#",
      image: "💼",
      color: "from-green-500 to-emerald-500",
      stats: "92% Complete"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      tech: "React · D3.js · Chart.js · Node.js · MongoDB",
      desc: "Real-time analytics dashboard with interactive data visualizations, sales tracking, and customer behavior insights.",
      features: ["Real-time Data", "Interactive Charts", "Sales Analytics", "Customer Insights"],
      link: "#",
      image: "📊",
      color: "from-yellow-500 to-orange-500",
      stats: "85% Complete"
    },
    {
      title: "Blockchain Voting System",
      tech: "Solidity · Web3.js · React · Node.js · IPFS",
      desc: "Decentralized voting platform ensuring transparency and security through blockchain technology.",
      features: ["Blockchain", "Smart Contracts", "Decentralized", "Secure Voting"],
      link: "#",
      image: "⛓️",
      color: "from-indigo-500 to-blue-500",
      stats: "80% Complete"
    },
    {
      title: "AI-Powered Healthcare Assistant",
      tech: "Python · TensorFlow · React · FastAPI · PostgreSQL",
      desc: "Healthcare platform with AI diagnostics, patient management, and telemedicine capabilities.",
      features: ["AI Diagnostics", "Patient Management", "Telemedicine", "Health Analytics"],
      link: "#",
      image: "🏥",
      color: "from-red-500 to-pink-500",
      stats: "90% Complete"
    }
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
    .fromTo('.project-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    )

    // Animate project progress bars
    projects.forEach((project, index) => {
      const progress = project.stats.replace('% Complete', '')
      gsap.to(`.progress-bar-${index}`, {
        width: `${progress}%`,
        duration: 2,
        delay: index * 0.15,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: projectsRef.current[index],
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

    // Hover animations for project cards
    projectsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })
  }, [])

  const addToProjectsRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el)
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
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
              PROJECTS
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Innovative solutions and cutting-edge applications built with modern technologies
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={addToProjectsRef}
              className="project-card group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
                
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                      {project.image}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-inner">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold text-black mb-3 font-mono leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-medium leading-relaxed">
                  {project.tech}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Progress</span>
                    <span className="text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                      {project.stats}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                    <div 
                      className={`progress-bar-${index} h-2 rounded-full bg-gradient-to-r ${project.color} shadow-lg transform origin-left`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map(feature => (
                    <span 
                      key={feature}
                      className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white px-4 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-300 shadow-lg">
                    VIEW PROJECT DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

       

        {/* CTA Section */}
       
      
      </div>
    </section>
  )
}