import { useEffect } from 'react'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

function ScrollManager() {
  useEffect(() => {
    if (!window.location.hash) return
    const targetId = decodeURIComponent(window.location.hash.slice(1))
    window.requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView())
  }, [])
  return null
}

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <Nav />
      <main id="main">
        <Home />
        <About />
      </main>
      <Footer />
    </>
  )
}
