import { CONTACT } from '../data'
import { Label } from './ui'

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <Label >Contact</Label>
      <h2 className="text-4xl md:text-5xl font-extrabold">Let’s power your project.</h2>
      <p className="mt-6 max-w-md text-muted">
        Interested in working together? Reach out through any of the channels below.
      </p>
      <div className="mt-10 max-w-xl">
        {CONTACT.rows.map(([k, v]) => (
          <div key={k} className="flex justify-between py-4 text-sm border-b border-line">
            <span className="text-muted">{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
