
import { useState } from 'react'
import { NAV_LINKS } from '../data'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white border-b border-line text-black">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-wide">
          <span className="inline-block w-3 h-3 rounded-full bg-accent" />
          LEOLIGHT
        </a>

        <nav className="hidden md:flex gap-8 text-sm text-black font-semibold">
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`${id}`} className="hover:text-ink hover:underline transition">{label}</a>
          ))}
        </nav>

        <button className="md:hidden text-sm" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : <GiHamburgerMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 bg-bg">
          {NAV_LINKS.map(([label, id], i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="flex gap-4 py-3 text-lg border-b border-line"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
