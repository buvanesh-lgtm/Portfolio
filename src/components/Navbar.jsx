import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#5DCAA5' : '#aaa',
    fontWeight: isActive ? '600' : '400',
    fontSize: '0.95rem',
    transition: 'color 0.2s'
  })

  return (
    <nav className="navbar">
      <span style={{ color: '#5DCAA5', fontWeight: 'bold', fontSize: '1.3rem' }}>
        Buvanesh
      </span>

      {/* Desktop links */}
      <div className="navbar-links">
        {navLinks.map(({ label, path }) => (
          <NavLink key={path} to={path} end style={linkStyle}>
            {label}
          </NavLink>
        ))}
      </div>

      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? 'bar open' : 'bar'} />
        <span className={menuOpen ? 'bar open' : 'bar'} />
        <span className={menuOpen ? 'bar open' : 'bar'} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end
              style={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar