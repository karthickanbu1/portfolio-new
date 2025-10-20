import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef()
  const navRef = useRef()
  const textRef = useRef()
  const buttonRef = useRef()
  const scrollIndicatorRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Animate navigation first
    tl.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(heroRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      "-=0.5"
    )
    .fromTo(textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    )
    .fromTo(scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    )
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-black">
      {/* Navigation Bar */}
      <nav ref={navRef} className="absolute top-0 left-0 right-0 z-50 py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Email */}
          <a 
            href="mailto:karthickray01@gmail.com"
            className="group flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 border border-white/20 hover:border-white/40 rounded-2xl px-6 py-3 backdrop-blur-sm bg-black/20 hover:bg-black/40"
          >
            <span className="text-2xl">📧</span>
            <span className="font-mono text-sm tracking-wider">karthickray01@gmail.com</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </a>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {/* GitHub */}
            <a 
              href="https://github.com/karthickanbu1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-sm bg-black/20 hover:bg-black/40 transition-all duration-300 hover:scale-110"
              title="GitHub Profile"
            >
              <svg 
                className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/karthick-a-in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 border border-white/20 hover:border-white/40 rounded-2xl backdrop-blur-sm bg-black/20 hover:bg-black/40 transition-all duration-300 hover:scale-110"
              title="LinkedIn Profile"
            >
              <svg 
                className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Grid lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {/* Horizontal lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 w-full h-px bg-white"
              style={{ top: `${i * 5}%` }}
            ></div>
          ))}
          {/* Vertical lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 h-full w-px bg-white"
              style={{ left: `${i * 5}%` }}
            ></div>
          ))}
        </div>

        {/* Animated dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div ref={textRef} className="max-w-4xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-white opacity-40"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-white opacity-40"></div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-mono text-white tracking-tighter">
          KARTHICK
          <span className="block text-2xl md:text-4xl lg:text-5xl font-light mt-4 tracking-widest opacity-90">
            .DEV
          </span>
        </h1>
        
        <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-60"></div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-widest uppercase letter-spacing-4">
          Frontend Developer
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Crafting digital experiences with precision code and minimalist design. 
          Specializing in React, Next.js, and modern web technologies to build 
          scalable, performant applications.
        </p>
      </div>

      <div ref={buttonRef} className="flex gap-6 flex-wrap justify-center relative z-10">
        <a 
          href="#projects" 
          className="group relative bg-white text-black px-8 py-4 rounded-none font-mono font-semibold hover:bg-gray-100 transition-all duration-300 border-2 border-white overflow-hidden"
        >
          <span className="relative z-10">VIEW PROJECTS</span>
          <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            VIEW PROJECTS
          </span>
        </a>
        
        <a 
          href="#contact" 
          className="group relative border-2 border-white text-white px-8 py-4 rounded-none font-mono font-semibold hover:border-gray-300 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">CONTACT ME</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            CONTACT ME
          </span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm font-mono mb-2 opacity-60 tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center opacity-60">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-white opacity-40"></div>
      <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-white opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-white opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-white opacity-40"></div>
    </section>
  )
}