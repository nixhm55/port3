import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { site } from '../../data/site'
import { Lines, Reveal } from './motion'

export function Footer() {
  return (
    <footer className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="section-head"><span className="eyebrow"><span className="section-number">08</span> A note to the future</span><span className="mono section-head__note">THE NEXT PART IS YOURS</span></div>
        <div className="contact-composition"><span className="contact-asterisk" aria-hidden="true">✳</span><Lines as="h2" className="contact-title" lines={['Something', 'begins here.']} /><Reveal className="contact-side" x={16}><p>For a conversation, a collaboration, or a good question. This is a placeholder address — update it before sharing the site.</p><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={17} /></a></Reveal></div>
        <div className="contact-rule"><span /></div>
        <div className="contact-bottom"><div className="contact-socials">{site.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={12} /></a>)}</div><span className="contact-credit mono">MADE WITH ROOM TO GROW / 2026</span><a href="#home" className="back-to-top">Back to the beginning <span><ArrowDown size={13} /></span></a></div>
        <div className="contact-wordmark" aria-hidden="true">Yasmi<span>.</span></div>
      </div>
    </footer>
  )
}
