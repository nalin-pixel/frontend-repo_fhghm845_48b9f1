import React from 'react'
import Section from './Section'

const items = [
  {
    role: 'Research Assistant – GWU Corcoran School',
    points: ['Built AI sandbox for non-technical users','HPC pipelines, SSO integration','Cloud + Box automation']
  },
  {
    role: 'Research Collaborator – GW Physics Dept',
    points: ['AI model failure modes','Diagnostics, adversarial tasks']
  },
  {
    role: 'Data Science Intern – LetSetGo',
    points: ['Sentiment analysis + predictive modeling','App crash prediction']
  },
  {
    role: 'Data Science Intern – Oasis Infobyte',
    points: ['Sales pattern analysis','Regression/time-series']
  }
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="A path shaped by research, engineering, and product execution.">
      <ol className="relative border-s border-neutral-200 dark:border-neutral-800">
        {items.map((item, idx) => (
          <li key={item.role} className="ms-6 py-6">
            <span className="absolute -start-2.5 mt-2 h-4 w-4 rounded-full border-2 border-white bg-amber-500 shadow ring-2 ring-amber-200 dark:ring-amber-800" />
            <h3 className="font-semibold text-blue-950 dark:text-white">{item.role}</h3>
            <ul className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5">
              {item.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
