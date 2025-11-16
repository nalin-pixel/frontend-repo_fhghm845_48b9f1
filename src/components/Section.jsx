import React from 'react'
import { cn } from '../utils/cn'

export default function Section({ id, title, subtitle, children, className }) {
  return (
    <section id={id} className={cn('py-20 sm:py-24 relative', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950 dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </section>
  )
}
