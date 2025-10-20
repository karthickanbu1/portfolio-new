import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useParallax() {
  useEffect(() => {
    // Parallax for background elements
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    // Parallax for text elements
    gsap.to('.parallax-text', {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    // Magnetic buttons
    const magneticButtons = document.querySelectorAll('.magnetic')
    
    magneticButtons.forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.8,
          ease: "power2.out"
        })
      })

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}