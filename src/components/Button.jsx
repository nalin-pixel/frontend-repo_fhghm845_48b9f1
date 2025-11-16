import React from 'react'
import { cn } from '../utils/cn'

export default function Button({ children, variant = 'primary', as = 'button', className = '', ...props }) {
  const Comp = as
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500',
    secondary: 'bg-white text-blue-900 border border-blue-200 hover:bg-blue-50 focus:ring-blue-200 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800',
    ghost: 'bg-transparent text-blue-900 hover:bg-blue-50 dark:text-white dark:hover:bg-neutral-800',
  }
  return (
    <Comp className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  )
}
