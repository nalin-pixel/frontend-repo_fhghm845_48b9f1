import React, { useState } from 'react'
import Section from './Section'
import Button from './Button'
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something meaningful.">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><Mail size={18}/> d.mori@gwu.edu</div>
          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><MapPin size={18}/> Arlington, VA</div>
          <div className="flex items-center gap-4 mt-4">
            <a className="inline-flex items-center gap-2 text-blue-900 dark:text-white" href="#" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            <a className="inline-flex items-center gap-2 text-blue-900 dark:text-white" href="#" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a className="inline-flex items-center gap-2 text-blue-900 dark:text-white" href="#" target="_blank" rel="noreferrer"><FileText size={18}/> Resume</a>
          </div>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 space-y-4">
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">Name</label>
            <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">Email</label>
            <input type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">Message</label>
            <textarea rows="4" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tell me about your idea" />
          </div>
          <Button className="bg-amber-600 hover:bg-amber-500">Send</Button>
        </form>
      </div>
    </Section>
  )
}
