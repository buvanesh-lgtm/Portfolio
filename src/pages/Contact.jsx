import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('buvanesh@email.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const titleRef = useScrollAnimation()
  const cardsRef = useScrollAnimation()

  return (
    <section className="section">

      <div ref={titleRef} className="fade-up">
        <h2>Contact <span className="teal">Me</span></h2>
        <div className="divider" />
      </div>

      <p className="contact-intro fade-up">
        I'm open to internships, projects, and collaborations. <br />
        Feel free to reach out — I'll get back to you soon!
      </p>

      <div ref={cardsRef} className="contact-cards fade-up">

        {/* Email */}
        <div className="contact-card">
          <div className="contact-card-left">
            <span className="contact-icon">✉</span>
            <div>
              <span className="contact-label">Email</span>
              <span className="contact-value">buvanesh@email.com</span>
            </div>
          </div>
          <button className="copy-btn" onClick={handleCopyEmail}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        {/* GitHub */}
        <a  
          href="https://github.com/buvanesh-lgtm"
          target="_blank"
          rel="noreferrer"
          className="contact-card contact-card-link"
        >
          <div className="contact-card-left">
            <span className="contact-icon">⌥</span>
            <div>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/buvanesh-lgtm</span>
            </div>
          </div>
          <span className="contact-arrow">→</span>
        </a>

        {/* LinkedIn */}
        <a  
          href="https://www.linkedin.com/in/buvanesh-s-1b086b3b6"
          target="_blank"
          rel="noreferrer"
          className="contact-card contact-card-link"
        >
          <div className="contact-card-left">
            <span className="contact-icon">in</span>
            <div>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/buvanesh</span>
            </div>
          </div>
          <span className="contact-arrow">→</span>
        </a>

      </div>

    </section>
  )
}

export default Contact