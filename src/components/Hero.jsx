import React from 'react'
import Spline from '@splinetool/react-spline'
import Button from './Button'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">Dhwanil Mori — Data Scientist | AI Researcher | Founder</h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl/relaxed text-neutral-100/90 drop-shadow">Building AI systems, data pipelines, and research that push technology from idea to impact.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#projects" className="bg-blue-900 hover:bg-blue-800">View Projects</Button>
              <Button as="a" href="#" variant="secondary">Download Resume</Button>
              <Button as="a" href="#contact" variant="ghost" className="backdrop-blur bg-white/10 text-white border border-white/20 hover:bg-white/20">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
    </section>
  )
}
