import { useEffect, useRef, useState } from 'react'

// Section label like "01 About the practice"
export function Label({ n, children }) {
  return (
    <p className="text-xs tracking-[.25em] uppercase mb-4 text-accent">
      {n} <span className="text-muted">{children}</span>
    </p>
  )
}

// Number that counts up when it scrolls into view
export function Count({ to, suffix = '' }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      let start = null
      const step = (t) => {
        start = start ?? t
        const p = Math.min((t - start) / 1200, 1)
        setN(Math.round(to * p))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
      observer.disconnect()
    })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return <span ref={ref}>{n}{suffix}</span>
}
