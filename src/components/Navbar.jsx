import { useState } from 'react'
import { Menu, X, Footprints } from 'lucide-react'

const links = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['How it works', '#how-it-works'],
  ['Book now', '#booking'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar container">
        <a className="brand" href="#home" aria-label="BEZUCAL Sneaker Wash home">
          <span className="brand-mark"><Footprints size={22} /></span>
          <span>BEZUCAL <b>SNEAKER WASH</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className={href === '#booking' ? 'nav-cta' : ''}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}