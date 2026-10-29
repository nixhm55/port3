import { useEffect, useState } from 'react'
import { site } from '../../data/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    let directionTravel = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY
        if (y < 32) {
          setHidden(false)
          directionTravel = 0
        } else if (Math.abs(delta) > 1) {
          directionTravel = Math.sign(delta) === Math.sign(directionTravel) ? directionTravel + delta : delta
          if (directionTravel > 12) setHidden(true)
          if (directionTravel < -10) setHidden(false)
        }
        lastY = y
        frame = 0
      })
    }
    const onFocus = () => setHidden(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('focusin', onFocus)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('focusin', onFocus)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className={`site-header${hidden ? ' site-header--hidden' : ''}`}>
      <div className="site-header__inner">
        <a className="wordmark" href="#home" aria-label={`${site.name}, return to top`}>{site.name}<span className="wordmark__dot">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link, index) => <a key={link.href} href={link.href} className="nav-link"><span className="nav-link__index">0{index + 1}</span>{link.label}</a>)}
        </nav>
        <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><span className={`menu-glyph${menuOpen ? ' menu-glyph--open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="mobile-nav" className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}><span>0{index + 1}</span>{link.label}</a>)}
      </nav>
    </header>
  )
}
