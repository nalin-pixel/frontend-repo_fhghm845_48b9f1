import React, { useEffect, useState } from 'react'
import { Moon, Sun, Menu } from 'lucide-react'
import Button from './Button'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-blue-900 dark:text-white">Dhwanil Mori</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#about" className="hover:text-blue-900 dark:hover:text-white">About</a>
          <a href="#skills" className="hover:text-blue-900 dark:hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-blue-900 dark:hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-blue-900 dark:hover:text-white">Experience</a>
          <a href="#education" className="hover:text-blue-900 dark:hover:text-white">Education</a>
          <a href="#contact" className="hover:text-blue-900 dark:hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
            <Menu className="text-blue-900 dark:text-white" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200/60 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            {['about','skills','projects','experience','education','contact'].map((s) => (
              <a key={s} href={`#${s}`} onClick={() => setOpen(false)} className="text-blue-900 dark:text-neutral-200">{s[0].toUpperCase()+s.slice(1)}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
