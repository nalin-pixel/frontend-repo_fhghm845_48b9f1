import React from 'react'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900">
          <h3 className="font-semibold text-blue-950 dark:text-white">MS Data Science — George Washington University (2026)</h3>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900">
          <h3 className="font-semibold text-blue-950 dark:text-white">BS Computer Science (AI/ML) — Gujarat Technological University (2024)</h3>
        </div>
      </div>
    </Section>
  )
}
