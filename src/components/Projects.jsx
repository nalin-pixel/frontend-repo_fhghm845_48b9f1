import React, { useState } from 'react'
import Section from './Section'
import Button from './Button'

const projects = [
  {
    title: 'RAIN – Retail Analytics & Intelligence Network',
    desc: 'AI agent system for retail automation. Automatically analyzes sales, invoices, and inventory with multi-agent comparison and pattern matching. Built to modernize small retail operations.',
    stack: ['Python','LLM agents','n8n','Google Sheets','Box'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Sandbox Platform – GWU Corcoran Research',
    desc: 'Browser-based no-code interface for artists. Run generative AI (ComfyUI, MusicGen) on HPC with automated pipelines and Box integration. Increased generative performance by 50%.',
    stack: ['ComfyUI','MusicGen','HPC','SSO','Box'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Failure Modes Research – GW Physics',
    desc: 'Working with Prof. Neil Johnson to study breakdowns in open-source AI models via adversarial testing, symbolic analysis, and parameter sweeps.',
    stack: ['Adversarial','Symbolic','Open-source LLMs'],
    image: 'https://images.unsplash.com/photo-1705313381946-7f89f57c8e1a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSSUyMEZhaWx1cmUlMjBNb2RlcyUyMFJlc2VhcmNofGVufDB8MHx8fDE3NjMyNjg1MDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Water Quality ML System',
    desc: 'End-to-end ML pipeline with 10,000+ samples for contamination prediction and monitoring.',
    stack: ['Python','Scikit-learn','Pipelines'],
    image: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1200&auto=format&fit=crop',
  }
]

function ProjectCard({ p, onOpen }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all">
      <div className="relative h-48 overflow-hidden">
        <img src={p.image} alt="project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-blue-950 dark:text-white">{p.title}</h3>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map(s => (
            <span key={s} className="text-xs rounded-full bg-blue-50 text-blue-900 px-2 py-1 dark:bg-neutral-800 dark:text-neutral-200 border border-blue-100 dark:border-neutral-700">{s}</span>
          ))}
        </div>
        <div className="mt-4">
          <Button onClick={() => onOpen(p)} className="bg-blue-900 hover:bg-blue-800">View Project</Button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)
  return (
    <Section id="projects" title="Projects" subtitle="Selected work across research, engineering, and product.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} onOpen={setActive} />
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setActive(null)}>
          <div className="max-w-2xl w-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt="modal" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-950 dark:text-white">{active.title}</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{active.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.stack.map(s => (
                  <span key={s} className="text-xs rounded-full bg-blue-50 text-blue-900 px-2 py-1 dark:bg-neutral-800 dark:text-neutral-200 border border-blue-100 dark:border-neutral-700">{s}</span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setActive(null)} variant="secondary">Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
