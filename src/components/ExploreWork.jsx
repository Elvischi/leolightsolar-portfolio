import { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Pan1 from "./image/pan1.jpeg";
import Pan2 from "./image/pan2.jpeg";
import Pan3 from "./image/pan3.jpeg";
import Pan4 from "./image/pan4.jpeg";
import Pan5 from "./image/pan5.jpeg";
import Pan6 from "./image/pan6.jpeg";
import Inverter from "./image/inverter.jpeg";

// ─── Edit your projects here ────────────────────────────────────────────────
const PROJECTS = [
  { title: 'Rooftop PV Estate', category: 'Residential', size: '12 kWp', location: 'Lagos', year: '2025', image: Pan5,
    description: 'Grid-tied rooftop array with hybrid inverter for a family estate, cutting generator use to near zero.' },
  { title: 'Commercial Rooftop Array', category: 'Commercial', size: '250 kWp', location: 'Abuja', year: '2025', image: Pan2,
    description: 'Warehouse rooftop system sized to the daytime load, with monitoring and remote fault alerts.' },
  { title: 'Clinic Off-Grid Microgrid', category: 'Institutional', size: '40 kWp + storage', location: 'Kaduna', year: '2024', image: Pan3,
    description: 'Solar and battery microgrid keeping a rural clinic and its vaccine cold room running around the clock.' },
  { title: 'Solar Street Lighting', category: 'Public', size: '120 poles', location: 'Enugu', year: '2024', image: Pan4,
    description: 'Stand-alone solar poles with automatic dusk-to-dawn control along a main community road.' },
  { title: 'Hybrid Inverter & Battery', category: 'Residential', size: '10 kWh', location: 'Port Harcourt', year: '2024', image: Inverter,
    description: 'Battery backup retrofit for an existing home system, with load prioritisation for essentials.' },
  { title: 'Solar Water Pumping', category: 'Agricultural', size: '5 HP', location: 'Kano', year: '2023', image: Pan6,
    description: 'Direct-drive solar pump for irrigation, with no fuel costs and very little maintenance.' },
]

const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]

function ProjectCard({ project, index }) {
  const { title, category, size, location, year, description } = project
  return (
    <>
      <article className="rounded-2xl overflow-hidden bg-surface border border-line transition hover:-translate-y-1">
        {/* <img src={project.image} className="h-44 w-full object-cover" alt={project.title} />  */}
        <div className="h-96 panels relative">
          <img
            src={project.image}
            className="h-96 w-full object-cover"
            alt={project.title}
          />
          <span className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-bg text-ink border border-line">
            {size}
          </span>
        </div>
        <div className="p-5">
          <p className="text-xs uppercase tracking-widest text-accent">
            {category}
          </p>
          <h3 className="font-semibold text-lg mt-1">{title}</h3>
          <p className="text-sm mt-2 text-muted">{description}</p>
          <p className="text-xs mt-4 pt-4 border-t border-line text-muted">
            {location} · {year}
          </p>
        </div>
      </article>
    </>
  );
}

export default function ExploreWork() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    // id="projects" keeps your existing  /#projects  link working
    <main id="projects">
      {/* Page header */}
      <section className="relative max-w-6xl mx-auto overflow-hidden pt-20 pb-16 border-b border-line">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-accent mb-6"
        >
          <FaArrowLeftLong />
          Back to home
        </a>

        <div
          className="sun absolute rounded-full"
          style={{
            width: "50vmin",
            height: "50vmin",
            top: "-10vmin",
            right: "-8vmin",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 fade-in">
          <p className="text-xs tracking-[.25em] uppercase mb-4 text-accent">
            <span className="text-muted">Selected portfolio</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[.95]">
            Explore my work.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A selection of solar systems I have designed and delivered, from
            home rooftops to off-grid microgrids for clinics and farms.
          </p>
        </div>
      </section>

      {/* Filters + project grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                active === c
                  ? "bg-accent text-black border-accent font-semibold"
                  : "bg-surface border-line text-muted hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <p className="mt-8 text-xs text-muted">
          Showing {shown.length} of {PROJECTS.length} projects
        </p>
      </section>
    </main>
  );
}
