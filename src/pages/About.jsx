import useScrollAnimation from '../hooks/useScrollAnimation'

function About() {
  const skills = ['React', 'Spring Boot', 'HTML', 'CSS','JavaScript', 'Java', 'PostgreSQL', 'Git']

  const titleRef = useScrollAnimation()
  const contentRef = useScrollAnimation()
  const skillsRef = useScrollAnimation()

  return (
    <section className="section">

      <div ref={titleRef} className="fade-up">
        <h2>About <span className="teal">Me</span></h2>
        <div className="divider" />
      </div>

      <div ref={contentRef} className="about-content fade-up">

        {/* Avatar */}
        <div className="about-avatar">
          <span className="avatar-initials">BS</span>
          <div className="avatar-ring" />
        </div>

        {/* Bio */}
        <div className="about-bio-wrap">
          <p className="about-bio">
            I'm a second-year BCA student at Apollo Arts & Science College, Chennai.
            I'm passionate about building full-stack web applications and constantly
            leveling up my skills.
          </p>
          <p className="about-bio" style={{ marginTop: '12px' }}>
            I've completed internships in Java Full Stack (Spring Boot) and React,
            and I'm working towards becoming a job-ready developer by 2027.
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Degree</span>
              <span className="info-value">BCA — Apollo Arts & Science College</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Chennai, Tamil Nadu</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value teal">Open to Internships</span>
            </div>
          </div>
        </div>

      </div>

      {/* Skills */}
      <div ref={skillsRef} className="about-skills fade-up">
        <h3 className="skills-title">Tech Stack</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>

    </section>
  )
}

export default About