import React from 'react'
import Section from './Section'
import { Cpu, Database, Brain, Boxes, Cloud, BarChart3, GitBranch, Box, Docker, Settings } from 'lucide-react'

const SkillCard = ({ icon: Icon, title, items }) => (
  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-neutral-800 grid place-items-center">
        <Icon className="text-blue-900 dark:text-white" size={20} />
      </div>
      <h3 className="font-semibold text-blue-950 dark:text-white">{title}</h3>
    </div>
    <ul className="mt-4 grid gap-1 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  </div>
)

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technical depth with an eye for product and impact.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard icon={Brain} title="Technical Skills" items={["Python, R, SQL","AI/ML modeling","NLP, LLM agents, embeddings","Data pipelines, automations (n8n)","HPC (Slurm, GPUs, Pegasus/Cerberus)","Cloud: AWS, GCP","Dashboards: Tableau, Power BI","Databases: MySQL, Neo4j"]} />
        <SkillCard icon={Settings} title="Tools" items={["GitHub, Jupyter, VS Code","Box API, ComfyUI, MusicGen","Docker, GCP Containers"]} />
        <SkillCard icon={Database} title="Focus Areas" items={["Multi-agent systems","ML Ops & reproducibility","Evaluation & diagnostics","Data-centric development"]} />
      </div>
    </Section>
  )
}
