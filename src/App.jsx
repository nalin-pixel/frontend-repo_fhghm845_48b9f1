import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-950 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <ErrorBoundary fallback={<div className="pt-24 text-center text-red-600">Something went wrong loading the page.</div>}>
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App
