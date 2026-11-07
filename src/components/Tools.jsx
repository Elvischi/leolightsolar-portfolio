import { TOOLS } from '../data'
import { Label } from './ui'

export default function Tools() {
  return (
    <section id="tools" className="max-w-6xl mx-auto px-6 py-24">
      <Label>Engineering toolkit</Label>
      <h2 className="text-4xl font-extrabold">Software & tools</h2>
      <div className="flex flex-wrap gap-3 mt-10">
        {TOOLS.map((t) => (
          <span key={t} className="px-5 py-2 rounded-full text-sm bg-surface border border-line">{t}</span>
        ))}
      </div>
    </section>
  )
}
