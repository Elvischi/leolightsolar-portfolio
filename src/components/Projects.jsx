import { PROJECTS } from '../data'
import { Label } from './ui'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <Label>Selected portfolio</Label>
      <h2 className="text-4xl md:text-5xl font-extrabold">Explore my work.</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className="rounded-2xl overflow-hidden bg-surface border border-line transition hover:-translate-y-1"
          >
            {/* Replace this block with <img src={p.image} /> when you have project photos */}
            <div className="h-96 panels relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-accent">
                {p.category}
              </p>
              <h3 className="font-semibold text-lg mt-1">{p.title}</h3>
              <p className="text-sm mt-1 text-muted">{p.size}</p>
            </div>
          </article>
        ))}
      </div>
      <a
        href="/ExploreWork"
        className="inline-block mt-10 px-6 py-3 text-sm font-semibold bg-white text-black hover:bg-gray-400 transition"
      >
        View all projects →
      </a>
    </section>
  );
}
