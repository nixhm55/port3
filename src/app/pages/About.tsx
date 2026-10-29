import { ArrowUpRight } from 'lucide-react'
import { ImageReveal, Reveal } from '../components/motion'

export function About() {
  return (
    <section className="archive-section" aria-labelledby="archive-title">
      <div className="section-head"><span className="eyebrow"><span className="section-number">07</span> Notes from the edges</span><span className="mono section-head__note">A VISUAL ARCHIVE / DEMO</span></div>
      <div className="archive-layout"><div className="archive-copy"><Reveal><span className="archive-stamp mono">COLLECT / KEEP / RETURN</span><h2 id="archive-title">Fragments<br />for later.</h2><p>A quieter corner for the images, textures and passing ideas that might become something else. Replace this selection with your own archive.</p><a className="text-link" href="#contact">Share a thought <ArrowUpRight size={15} /></a></Reveal></div><ImageReveal src="/images/nocturne.jpg" alt="Demonstration image of abstract dark flowing lines" variant="bottom" className="archive-image" /><ImageReveal src="/images/halcyon.jpg" alt="Demonstration image of warm architectural light" variant="right" className="archive-image archive-image--small" /></div>
    </section>
  )
}
