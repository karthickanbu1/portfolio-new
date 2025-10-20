// App.js
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import useScrollAnimation from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation()

  return (
    <div className="bg-dark min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App