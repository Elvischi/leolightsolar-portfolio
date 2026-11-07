import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data'
import { Label } from '../components/ui'
import ProjectCard from '../components/ProjectCard'

const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]

export default function Work() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden pt-36 pb-16 border-b border-line">
        <div className="sun absolute rounded-full" style={{ width: '50vmin', height: '50vmin', top: '-10vmin', right: '-8vmin' }} />
        <div className="relative max-w-6xl mx-auto px-6 fade-in">
          <Label n="02">Selected portfolio</Label>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[.95]">Explore my work.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A selection of solar systems I have designed and delivered, from home rooftops to off-grid
            microgrids for clinics and farms.
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                active === c ? 'bg-accent text-black border-accent font-semibold' : 'bg-surface border-line text-muted hover:text-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => <ProjectCard key={p.title} project={p} index={i} detailed />)}
        </div>
        <p className="mt-8 text-xs text-muted">Showing {shown.length} of {PROJECTS.length} projects</p>
      </section>

      {/* Call to action */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl p-10 md:p-14 panels border border-line flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold max-w-md">Have a project in mind?</h2>
          <Link to="/#contact" className="px-6 py-3 text-sm font-semibold rounded-full bg-accent text-black">
            Let’s talk →
          </Link>
        </div>
      </section>
    </main>
  )
}
