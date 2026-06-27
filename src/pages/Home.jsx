import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const roles = [
  'Full Stack Developer',
  'React Developer',
  'BCA Student'
]

function Home() {
  const [currentRole, setCurrentRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setCurrentRole(current.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)

        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        setCurrentRole(current.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)

        if (charIndex - 1 === 0) {
          setDeleting(false)
          setRoleIndex(prev => (prev + 1) % roles.length)
        }
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section className="hero">
      <div className="hero-glow" />

      <p className="hero-greeting">
        <span className="hero-dot" />
        HEY THERE, I'M
      </p>

      <h1>Buvanesh S</h1>

      <h2 className="hero-role">
        <span className="teal">{currentRole}</span>
        <span className="cursor" />
      </h2>

      <p className="hero-desc">
        BCA Student at Apollo Arts & Science College, Chennai.
        I build web apps using React & Spring Boot.
      </p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn-primary">View Projects</Link>
        <Link to="/contact" className="btn-outline">Contact Me</Link>
      </div>
    </section>
  )
}

export default Home