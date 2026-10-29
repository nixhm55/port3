import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

type Tag = 'h1' | 'h2' | 'p' | 'div'

export function Lines({ lines, className, delay = 0, as: Component = 'h2' }: { lines: ReactNode[]; className?: string; delay?: number; as?: Tag }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
  return (
    <Component ref={ref as never} className={className}>
      {lines.map((line, index) => (
        <span key={index} className="mask-line">
          <motion.span className="mask-line__inner" initial={{ y: '112%', rotate: 2 }} animate={inView ? { y: 0, rotate: 0 } : { y: '112%', rotate: 2 }} transition={{ duration: 0.95, delay: delay + index * 0.12, ease }}>
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  )
}

export function Reveal({ children, delay = 0, className, y = 26, x = 0, once = true }: { children: ReactNode; delay?: number; className?: string; y?: number; x?: number; once?: boolean }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.85, delay, ease }}>
      {children}
    </motion.div>
  )
}

export function ImageReveal({ src, alt, className, imageClassName = '', variant = 'left' }: { src: string; alt: string; className?: string; imageClassName?: string; variant?: 'left' | 'right' | 'bottom' }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -6% 0px' })
  const origin = variant === 'right' ? '100% 50%' : variant === 'bottom' ? '50% 100%' : '0% 50%'
  return (
    <div ref={ref} className={`image-reveal ${className ?? ''}`}>
      <motion.div className="image-reveal__curtain" initial={{ scaleX: 1, scaleY: 1 }} animate={inView ? { scaleX: variant === 'bottom' ? 1 : 0, scaleY: variant === 'bottom' ? 0 : 1 } : { scaleX: 1, scaleY: 1 }} style={{ transformOrigin: origin }} transition={{ duration: 1.1, ease }} />
      <motion.img src={src} alt={alt} loading="lazy" className={`image-reveal__image ${imageClassName}`} initial={{ scale: 1.12, x: variant === 'right' ? 26 : variant === 'left' ? -26 : 0, y: variant === 'bottom' ? 24 : 0 }} animate={inView ? { scale: 1, x: 0, y: 0 } : { scale: 1.12, x: variant === 'right' ? 26 : variant === 'left' ? -26 : 0, y: variant === 'bottom' ? 24 : 0 }} transition={{ duration: 1.2, ease }} />
    </div>
  )
}

export function Parallax({ src, alt, className, strength = 6 }: { src: string; alt: string; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])
  return (
    <div ref={ref} className={`parallax-frame ${className ?? ''}`}>
      <motion.img src={src} alt={alt} style={{ y }} loading="lazy" />
    </div>
  )
}
