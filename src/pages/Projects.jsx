import useScrollAnimation from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Student Management System',
    desc: 'Full stack app with role-based access control, JWT authentication, and PostgreSQL database hosted on Aiven. Backend deployed on Render.',
    tags: ['Spring Boot', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    github: 'https://github.com/buvanesh-lgtm',
    live: 'https://buvanesh-lgtm.github.io/Student_management_System_Fd/'
  },
  {
    id: 2,
    number: '02',
    title: 'Workshop Registration App',
    desc: 'React app for workshop registration with confirmation flow, Toast notifications, and form validation. Deployed on Netlify.',
    tags: ['React', 'Vite', 'Netlify'],
    github: 'https://github.com/buvanesh-lgtm',
    live: 'https://workshopregistrationpage.netlify.app/'
  },
  {
    id: 3,
    number: '03',
    title: 'Coming Soon',
    desc: 'Next project currently in progress. Stay tuned!',
    tags: [],
    github: '#',
    live: '#'
  }
]

function Projects() {
  const titleRef = useScrollAnimation()
  const gridRef = useScrollAnimation()

  return (
    <section className="section">

      <div ref={titleRef} className="fade-up">
        <h2>My <span className="teal">Projects</span></h2>
        <div className="divider" />
      </div>

      <div ref={gridRef} className="projects-grid fade-up">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <div className="project-card-accent" />
            </div>

            <h3 className="project-title">{project.title}</h3>

            <p className="project-desc">{project.desc}</p>

            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn teal">
                Live →
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects