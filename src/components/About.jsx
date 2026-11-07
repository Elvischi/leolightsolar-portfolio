import { SKILLS, QUALIFICATIONS } from '../data'
import { Label } from './ui'
import Profile from './image/profile.jpeg'

export default function About() {
  return (
    <div className='bg-white'>
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-5 gap-16"
      >
        <div className="md:col-span-3">
          <Label>About</Label>
          <h2 className="text-4xl font-extrabold">
            Engineering that follows the sun.
          </h2>
          <p className="mt-6 text-muted">
            I am a Solar Engineer with 5+ years of experience designing and
            installing PV systems for residential, commercial, institutional,
            and public projects.
          </p>
          <p className="mt-4 text-muted">
            My work combines technical precision with practical thinking,
            delivering systems that fit each client’s load, budget, and site
            while staying safe and easy to maintain.
          </p>

          <h3 className="font-semibold mt-10 mb-4">Core Competencies</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {SKILLS.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-10 mb-4">Academic Qualifications</h3>
          <div className="space-y-3 text-sm">
            {QUALIFICATIONS.map((q) => (
              <div key={q.title} className="pb-3 border-b border-line">
                {q.title} <span className="text-muted">· {q.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          {/* Replace with your portrait */}
          <div className="aspect-[4/5] rounded-2xl panels relative overflow-hidden border border-line">
            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase text-muted">
              Lead engineer · Leolight
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
