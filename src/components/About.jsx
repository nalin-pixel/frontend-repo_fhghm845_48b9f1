import React from 'react'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About" subtitle="International MS in Data Science at GWU with a focus on applied AI systems and real-world impact.">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900 to-blue-600 p-1 shadow-xl">
          <div className="w-full h-full rounded-2xl bg-white dark:bg-neutral-900 grid place-items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600" />
          </div>
        </div>
        <div>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I'm Dhwanil, an international student pursuing my Master's in Data Science at The George Washington University. I build AI systems, multi-agent models, HPC workflows, and applied machine learning pipelines that deliver measurable outcomes. My work bridges research and engineering, always grounded in impact.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[ 
              ['2+ years experience'],
              ['AI/ML Researcher'],
              ['Founder of RAIN & ToolVerse'],
              ['HPC & multi-agent systems'],
            ].map(([label]) => (
              <div key={label} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 shadow-sm">
                <p className="text-blue-900 dark:text-white font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
