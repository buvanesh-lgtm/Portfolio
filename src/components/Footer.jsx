function Footer() {
  return (
    <footer className="footer">
      <p style={{ color: '#444', fontSize: '0.85rem' }}>
        Designed & Built by{' '}
        <span style={{ color: '#5DCAA5' }}>Buvanesh S</span>
        {' '}· {new Date().getFullYear()}
      </p>

      <div className="footer-links">
        <a href="https://github.com/buvanesh-lgtm" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/buvanesh-s-1b086b3b6" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer