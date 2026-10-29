// Editable site content. Demonstration entries below are placeholders, not claims about Yasmi's real work.
export const site = {
  name: 'Yasmi',
  role: 'A personal portfolio',
  location: 'Add location',
  timezone: 'UTC',
  email: 'hello@yasmi.example',
  intro: 'A collection of ideas, images and digital studies — made to leave room for what comes next.',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Are.na', href: 'https://www.are.na/' },
  ],
  marquee: ['Image', 'Form', 'Feeling', 'Digital studies', 'Details', 'Possibility'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

// Replace these demonstrations with real projects, imagery, descriptions and dates.
export const projects: Project[] = [
  {
    slug: 'soft-form',
    title: 'Soft form',
    client: 'Demonstration study',
    category: 'Image study',
    year: '2026',
    cover: '/images/aurora.jpg',
    tint: '#e8e5db',
    summary: 'A placeholder study in light, soft edges and the space around an object.',
    role: ['Replace with role'],
    deliverables: ['Replace with deliverables'],
    body: ['Demonstration copy — replace this with the real story behind the work.'],
    size: 'large',
  },
  {
    slug: 'quiet-interface',
    title: 'Quiet interface',
    client: 'Demonstration study',
    category: 'Digital study',
    year: '2026',
    cover: '/images/meridian.jpg',
    tint: '#e1e2dc',
    summary: 'A placeholder direction for a calm, considered digital surface.',
    role: ['Replace with role'],
    deliverables: ['Replace with deliverables'],
    body: ['Demonstration copy — replace this with the real story behind the work.'],
    size: 'small',
  },
  {
    slug: 'printed-matter',
    title: 'Printed matter',
    client: 'Demonstration study',
    category: 'Type & texture',
    year: '2025',
    cover: '/images/fold.jpg',
    tint: '#e8e3d9',
    summary: 'A placeholder exploration of scale, letterforms and the feel of a surface.',
    role: ['Replace with role'],
    deliverables: ['Replace with deliverables'],
    body: ['Demonstration copy — replace this with the real story behind the work.'],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((project) => project.slug === slug)

// Replace these examples with Yasmi's own focus areas before publishing.
export const services = [
  { title: 'Image', body: 'A focus area to edit with a short description of the real work.' },
  { title: 'Identity', body: 'A focus area to edit with a short description of the real work.' },
  { title: 'Digital form', body: 'A focus area to edit with a short description of the real work.' },
  { title: 'Motion', body: 'A focus area to edit with a short description of the real work.' },
]

// These process prompts are illustrative, not a record of employment or experience.
export const experience = [
  { period: '01', title: 'Notice', detail: 'Collect references, ask better questions, find the useful tension.' },
  { period: '02', title: 'Compose', detail: 'Give the idea a shape, a pace and a point of view.' },
  { period: '03', title: 'Refine', detail: 'Keep what matters. Let the details earn their place.' },
]
