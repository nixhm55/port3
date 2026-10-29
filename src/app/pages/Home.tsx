import { ArrowDown, ArrowDownRight, ArrowUpRight, Plus, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { experience, projects, services, site, type Project } from '../../data/site'
import { ImageReveal, Lines, Parallax, Reveal } from '../components/motion'

const ease = [0.22, 1, 0.36, 1] as const

export function Home() {
  const [open, setOpen] = useState(0)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const featured = projects[0]
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__topline"><span className="eyebrow hero__eyebrow"><i className="status-dot" /> Independent creative practice</span><span className="hero__edition">Portfolio / 2026</span></div>
        <div className="hero__composition">
          <div className="hero__side-note"><span>Thoughtful things<br />for a changing world.</span><span className="side-note__rule" /><span className="mono">EST. IN CURIOSITY</span></div>
          <div className="hero__title-wrap">
            <span className="hero__small-label">A visual notebook by</span>
            <h1 id="hero-title" className="hero__title"><span className="hero__title-mask"><motion.span initial={{ y: '110%', rotate: 3 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1.05, delay: 0.16, ease }}>Nisam</motion.span></span><span className="hero__asterisk" aria-hidden="true">✳</span></h1>
            <div className="hero__bottomline"><p>{site.intro}</p><a href="#projects" className="circle-link" aria-label="Scroll to selected work"><ArrowDown size={16} /></a></div>
          </div>
          <div className="hero__visual" aria-label="Abstract soft sculptural study"><div className="hero__visual-orbit hero__visual-orbit--one" /><div className="hero__visual-orbit hero__visual-orbit--two" /><div className="hero__sculpture"><span /><span /><span /></div><span className="hero__visual-caption mono">STUDY Nº 001 — FORM IN LIGHT</span></div>
        </div>
        <a className="scroll-cue" href="#intro"><span className="scroll-cue__line" />Scroll to explore</a>
        <span className="hero__index mono">01 — 05</span>
      </section>

      <section className="intro-section" id="intro" aria-labelledby="intro-title">
        <div className="section-head"><span className="eyebrow"><span className="section-number">01</span> A thought to begin</span><span className="mono section-head__note">LESS, BUT MORE MEANINGFUL</span></div>
        <div className="intro-copy">
          <Lines as="h2" className="intro-title" lines={['Making space for', 'the things that', 'matter.']} />
          <Reveal className="intro-aside" y={8}><span className="accent-mark">↘</span><p>A practice in paying attention — to shape, to feeling, to the quiet detail that makes a whole idea feel unmistakably its own.</p></Reveal>
        </div>
        <div className="intro-rule"><span /></div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-head"><span className="eyebrow"><span className="section-number">02</span> A little about</span><span className="mono section-head__note">AN OPEN-ENDED PRACTICE</span></div>
        <div className="about-grid">
          <div className="about-image-wrap"><ImageReveal src="/images/portrait.jpg" alt="Portrait image placeholder for Nisam, replace with a personal image" variant="right" className="about-image" /><span className="image-caption mono">A PLACEHOLDER PORTRAIT — REPLACE WITH YOUR OWN</span></div>
          <div className="about-copy">
            <span className="about-index mono">Y / 01</span>
            <Lines as="h2" className="about-title" lines={['Curious by', 'nature.']} />
            <Reveal x={18} className="about-paragraph"><p>Somewhere between images, objects and interfaces is where this practice lives. Nisam is a name and a point of view in progress — a place for considered experiments, personal work and future collaborations.</p><p>The details on this page are intentionally editable. It should become a reflection of the real person, process and work behind the name.</p></Reveal>
            <Reveal delay={0.08} x={16} className="about-footnote"><span className="about-footnote__marker">✳</span><span>Keep what feels true.<br />Change everything else.</span></Reveal>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-head"><span className="eyebrow"><span className="section-number">03</span> Selected studies</span><span className="mono section-head__note">DEMONSTRATION CONTENT / REPLACE BEFORE PUBLISHING</span></div>
        <div className="projects-heading"><Lines as="h2" className="projects-title" lines={['A few things,', 'made visible.']} /><Reveal className="projects-intro" y={9}><p>Three visual directions, offered as placeholders for work that is yours. Each one has its own rhythm; the stories are still waiting to be written.</p><span className="mono">(01 — 03)</span></Reveal></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-row project-row--${index + 1}`} key={project.slug}>
              <button type="button" className="project-image-link" onClick={() => setActiveProject(project)} aria-label={`Open ${project.title}, a demonstration project`}>
                <div className={`project-image project-image--${index + 1}`}><Parallax src={project.cover} alt={`${project.title} demonstration visual`} strength={index === 1 ? 4 : 7} /><span className="project-image__wash" /><span className="project-image__index mono">0{index + 1} / DEMO</span><span className="project-image__arrow"><ArrowUpRight size={19} /></span></div>
              </button>
              <div className="project-meta"><div className="project-title-line"><h3>{project.title}</h3><span className="mono">{project.year}</span></div><div className="project-description"><p>{project.summary}</p><span className="mono">{project.category}</span></div></div>
            </article>
          ))}
        </div>
        <div className="projects-outro"><span className="outro-line" /><span className="mono">THE ARCHIVE IS STILL GROWING</span><span className="outro-line" /></div>
      </section>

      {activeProject && <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)} />}

      <section className="featured-section" id="featured" aria-labelledby="featured-title">
        <div className="featured-topline"><span className="eyebrow"><span className="section-number">04</span> A closer look / demonstration</span><span className="mono">SCROLL TO UNFOLD</span></div>
        <div className="featured-intro"><span className="featured-kicker mono">A STUDY IN FORM & LIGHT / 001</span><Lines as="h2" className="featured-title" lines={['Softness', 'takes shape.']} /><Reveal className="featured-summary" x={14}><p>{featured.summary} The full story and project details are placeholders, ready for Nisam’s real work.</p></Reveal></div>
        <div className="featured-image-shell"><Parallax src={featured.cover} alt={`${featured.title} abstract visual`} strength={5} className="featured-image" /><span className="featured-image__label mono">01 — A FORM, HELD IN LIGHT</span><span className="featured-image__vertical mono">VISUAL STUDY / 2026</span></div>
        <div className="featured-bottom"><span className="featured-bottom__symbol">✳</span><p>A starting point, not a finished story. Replace this study with a real project narrative, images and details.</p><a href="#projects" className="text-link">Back to the studies <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="section-head"><span className="eyebrow"><span className="section-number">05</span> Areas of curiosity</span><span className="mono section-head__note">A LOOSELY HELD FRAMEWORK</span></div>
        <div className="approach-grid"><div className="approach-lead"><Lines as="h2" className="approach-title" lines={['An eye for', 'the in-between.']} /><Reveal y={8}><p>Not a list of credentials — simply a few themes this space might explore. Edit these to fit the work and the person.</p></Reveal><span className="approach-flower" aria-hidden="true">✳</span></div>
          <div className="approach-list">{services.map((item, index) => <div className={`approach-item${open === index ? ' approach-item--open' : ''}`} key={item.title}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span className="approach-item__index mono">0{index + 1}</span><span className="approach-item__title">{item.title}</span><span className="approach-item__plus"><Plus size={17} /></span></button><motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0 }} transition={{ duration: 0.38, ease }} className="approach-item__body"><p>{item.body}</p></motion.div></div>)}</div>
        </div>
        <div className="approach-quote"><span className="mono">A SMALL REMINDER</span><p>“The shape of a thing is only the beginning of how it feels.”</p><span className="quote-note">— a working thought</span></div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="section-head"><span className="eyebrow"><span className="section-number">06</span> A way of working</span><span className="mono section-head__note">THREE SOFT STEPS, NO FIXED RULES</span></div>
        <div className="journey-layout"><Lines as="h2" className="journey-title" lines={['Start with', 'a question.']} /><div className="journey-list">{experience.map((step, index) => <Reveal key={step.title} delay={index * 0.08} className="journey-step"><span className="journey-step__number mono">{step.period}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div><span className="journey-step__arrow"><ArrowDownRight size={16} /></span></Reveal>)}</div></div>
      </section>

      <div className="closing-bridge" aria-hidden="true"><span>Y</span><span className="closing-bridge__line" /><span>↘</span></div>
    </>
  )
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.showModal()
    return () => { if (dialog.open) dialog.close() }
  }, [])

  return (
    <dialog ref={dialogRef} className="project-dialog" onClose={onClose} aria-labelledby="project-dialog-title">
      <button type="button" className="project-dialog__close" onClick={() => dialogRef.current?.close()} aria-label="Close project details"><X size={20} /></button>
      <div className="project-dialog__content">
        <div className="project-dialog__image"><img src={project.cover} alt={`${project.title} demonstration visual`} /></div>
        <div className="project-dialog__body">
          <span className="mono project-dialog__eyebrow">{project.category} / {project.year} / DEMONSTRATION</span>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="project-dialog__summary">{project.summary}</p>
          <p className="project-dialog__note">This is editable sample content, not a claim about Nisam’s actual work. Replace the title, images, description and project details before publishing.</p>
          <div className="project-dialog__details"><div><span className="mono">FOCUS</span><p>{project.role.join(' / ')}</p></div><div><span className="mono">DELIVERABLES</span><p>{project.deliverables.join(' / ')}</p></div></div>
          {project.body.map((paragraph) => <p className="project-dialog__story" key={paragraph}>{paragraph}</p>)}
          <button type="button" className="project-dialog__done" onClick={() => dialogRef.current?.close()}>Close study <ArrowUpRight size={15} /></button>
        </div>
      </div>
    </dialog>
  )
}
