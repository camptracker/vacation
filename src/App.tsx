import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'

const RiyueBayContent = lazy(() => import('./RiyueBayData'))
const TahoeContent = lazy(() => import('./TahoeData'))

type Destination = 'riyue' | 'tahoe'

const destinations: { id: Destination; label: string; emoji: string; subtitle: string; heroTitle: string; heroSub: string; heroTagline: string }[] = [
  {
    id: 'riyue',
    label: 'Riyue Bay 日月湾',
    emoji: '🏄',
    subtitle: 'Sun & Moon Bay — Wanning, Hainan, China',
    heroTitle: 'Riyue Bay 日月湾',
    heroSub: 'Sun & Moon Bay — Wanning, Hainan, China',
    heroTagline: "China's premier surf destination & tropical paradise",
  },
  {
    id: 'tahoe',
    label: 'Soda Springs, Tahoe',
    emoji: '🏔️',
    subtitle: 'Soda Springs — Donner Summit, Lake Tahoe',
    heroTitle: 'Soda Springs',
    heroSub: 'Donner Summit — Lake Tahoe, California',
    heroTagline: 'Mountain escape with world-class skiing & cozy mountain vibes',
  },
]

const sectionsByDest: Record<Destination, { id: string; label: string }[]> = {
  riyue: [
    { id: 'overview', label: 'Overview' },
    { id: 'things-to-do', label: 'Things to Do' },
    { id: 'food', label: 'Food & Dining' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'lodging', label: 'Lodging' },
    { id: 'weather', label: 'Weather' },
    { id: 'activities', label: 'Activities' },
    { id: 'getting-there', label: 'Getting There' },
    { id: 'schedules', label: 'Itineraries' },
    { id: 'hidden-gems', label: 'Hidden Gems' },
    { id: 'links', label: 'Links' },
  ],
  tahoe: [
    { id: 'overview', label: 'Overview' },
    { id: 'spas', label: 'Spas & Massage' },
    { id: 'lodging', label: 'Lodging' },
    { id: 'food', label: 'Restaurants' },
    { id: 'activities', label: 'Activities' },
    { id: 'weather', label: 'Weather' },
    { id: 'getting-there', label: 'Getting There' },
    { id: 'links', label: 'Links' },
  ],
}

function App() {
  const [dest, setDest] = useState<Destination>(() => {
    const hash = window.location.hash.slice(1)
    if (hash === 'tahoe') return 'tahoe'
    return 'riyue'
  })
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = sectionsByDest[dest]
  const info = destinations.find(d => d.id === dest)!

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-80px 0px 0px 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [dest, sections])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const switchDest = (d: Destination) => {
    setDest(d)
    setMenuOpen(false)
    window.location.hash = d === 'riyue' ? '' : d
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{info.emoji} {info.label}</span>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {/* Destination tabs */}
            <li className="dest-tabs">
              {destinations.map(d => (
                <button
                  key={d.id}
                  className={`dest-tab ${dest === d.id ? 'active' : ''}`}
                  onClick={() => switchDest(d.id)}
                >
                  {d.emoji} {d.id === 'riyue' ? 'Riyue Bay' : 'Soda Springs'}
                </button>
              ))}
            </li>
            <li className="nav-divider" />
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => scrollTo(id)}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className={`hero hero-${dest}`}>
        <div className="hero-overlay">
          <h1>{info.heroTitle}</h1>
          <p className="hero-sub">{info.heroSub}</p>
          <p className="hero-tagline">{info.heroTagline}</p>
          <button className="hero-cta" onClick={() => scrollTo('overview')}>Explore the Guide ↓</button>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Suspense fallback={<div style={{padding: '4rem', textAlign: 'center'}}>Loading...</div>}>
          {dest === 'riyue' ? <RiyueBayContent /> : <TahoeContent />}
        </Suspense>
      </main>

      <footer className="footer">
        <p>{info.emoji} {info.label} Vacation Guide — Made with ❤️</p>
        <p>Prices are approximate and may vary by season. Last updated February 2026.</p>
      </footer>
    </div>
  )
}

export default App
