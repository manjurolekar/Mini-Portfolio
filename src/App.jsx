import React from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Terminal,
  X,
  Database,
  Cloud,
  Layers3,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

const profile = {
  name: "Manjunath Ramappa Olekar",
  shortName: "Manjunath",
  role: "Aspiring Full-Stack Developer",
  location: "Gadag, Karnataka, India",
  email: "manjurolekar315@gmail.com",
  phone: "+91 99021 76810",
  github: "https://github.com/manjurolekar",
  linkedin: "https://linkedin.com/in/manju-r-olekar-81561338a/",
  photo: "/profile.jpg",
};

const skills = [
  { name: "HTML5", group: "Frontend" },
  { name: "CSS3", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "React", group: "Frontend" },
  { name: "Python", group: "Programming" },
  { name: "Java", group: "Programming" },
  { name: "SQL", group: "Database" },
  { name: "SQL Server", group: "Database" },
  { name: "Git & GitHub", group: "Tools" },
  { name: "Firebase", group: "Backend / Cloud" },
  { name: "Flask", group: "Backend" },
  { name: "Computer Networks", group: "IT Infrastructure" },
];

const projects = [
  { number: "01", title: "Full-Stack E-Commerce Website", category: "Full-Stack Web Application", description: "A full-stack shopping experience with product browsing, user authentication, and shopping workflows. Resume-listed features include JWT login, Stripe payment integration, and Docker/AWS EC2 deployment.", stack: ["React.js", "Node.js", "MongoDB", "JWT", "Docker", "AWS EC2"], github: "https://github.com/manjurolekar", demo: "", icon: Monitor, tone: "peach" },
  { number: "02", title: "Blood Bank Management System", category: "Database Web App", description: "A database-driven web app to maintain donor records and blood-bank information, with donor search by blood group and a Flask-to-SQL Server connection using PyODBC.", stack: ["Python", "Flask", "SQL Server", "PyODBC"], github: "https://github.com/manjurolekar", demo: "", icon: Database, tone: "rose" },
  { number: "03", title: "Campus Management Shield", category: "Campus Complaint Platform", description: "A campus complaint and activity management platform concept with role-based workflows and a responsive interface for submitting and tracking campus complaints.", stack: ["HTML", "CSS", "JavaScript", "Firebase"], github: "https://github.com/manjurolekar", demo: "", icon: Layers3, tone: "blue" },
  { number: "04", title: "College Tech Club", category: "ApnoAI Task 1", description: "A responsive college technology club landing page with clear content sections, responsive styling, and a live deployment.", stack: ["HTML", "CSS", "JavaScript", "Vercel"], github: "https://github.com/manjurolekar/College-Tech-Club", demo: "https://college-tech-club.vercel.app/", icon: Code2, tone: "violet" },
  { number: "05", title: "React Profile Card", category: "ApnoAI Task 2", description: "A reusable React profile component with props, state, a profile photo, skill tags, social links, and a Like button.", stack: ["React", "CSS", "Vite"], github: "https://github.com/manjurolekar/react-profile-card", demo: "https://react-profile-card-ov8b.vercel.app/", icon: Layers3, tone: "peach" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={close} aria-label="Home">
        <span className="brand-mark">M<span>.</span></span>
        <span>MANJUNATH<span className="brand-muted"> / PORTFOLIO</span></span>
      </a>
      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        <a href="#about" onClick={close}>About</a>
        <a href="#skills" onClick={close}>Skills</a>
        <a href="#projects" onClick={close}>Projects</a>
        <a className="nav-contact" href="#contact" onClick={close}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability"><span /> OPEN TO LEARNING & OPPORTUNITIES</div>
        <p className="eyebrow">HELLO, WORLD! I'M</p>
        <h1>Manjunath<br /><span>Olekar.</span></h1>
        <h2>{profile.role}</h2>
        <p className="hero-description">
          I’m a Computer Engineering and IT Infrastructure diploma student who enjoys
          building useful web experiences, learning new technologies, and solving
          real-world problems through code.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
          <a className="button button-quiet" href="#contact">Contact me <ArrowUpRight size={17} /></a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="portrait-card">
          <div className="portrait-top"><span>PROFILE_01</span><span className="live-dot" /></div>
          <div className="portrait-frame">
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "grid";
              }}
            />
            <div className="portrait-fallback">MO</div>
          </div>
          <div className="portrait-name">{profile.name}</div>
          <div className="portrait-role"><Code2 size={14} /> {profile.role}</div>
          <div className="portrait-bottom"><span><span className="tiny-dot" /> BUILDING MY NEXT PROJECT</span><span>2026</span></div>
        </div>
        <div className="floating-chip chip-code"><Terminal size={17} /> <span>Keep building</span></div>
        <div className="floating-chip chip-cloud"><Cloud size={17} /> <span>Always learning</span></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-wrap section-block" id="about">
      <div className="section-heading">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Curious mind.<br /><span>Practical builder.</span></h2>
      </div>
      <div className="about-copy">
        <p>
          I’m a Computer Engineering & IT Infrastructure diploma student at G-NTTF Gadag
          with a CGPA of 8.4/10 and an expected completion in 2027. I enjoy building
          web applications and working with React, Node.js, Python/Flask, SQL, and
          cloud and DevOps tools. I’m seeking a fresher opportunity where I can
          contribute to practical projects and continue growing as a developer.
        </p>
        <div className="about-facts">
          <div><span className="fact-number">01</span><span>Learn by building</span></div>
          <div><span className="fact-number">02</span><span>Improve every iteration</span></div>
          <div><span className="fact-number">03</span><span>Keep it user-friendly</span></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { title: "Frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React.js"] },
    { title: "Programming", icon: Terminal, items: ["Java", "JavaScript", "Python", "C", "C++", "PHP"] },
    { title: "Data & Backend", icon: Database, items: ["Node.js", "Flask", "REST APIs", "MySQL", "Firebase", "SQL"] },
    { title: "Tools & Infrastructure", icon: Cloud, items: ["Git", "GitHub", "VS Code", "Linux", "Computer Networks", "AWS (EC2)", "Docker"] },
  ];
  return (
    <section className="section-wrap section-block" id="skills">
      <div className="section-heading heading-row">
        <div><p className="eyebrow">TOOLS I WORK WITH</p><h2>My current <span>toolkit.</span></h2></div>
        <p className="heading-note">A growing set of skills I use to learn, build, and troubleshoot.</p>
      </div>
      <div className="skill-grid">
        {groups.map(({ title, icon: Icon, items }, index) => (
          <article className={`skill-card tilt-card tilt-${index}`} key={title}>
            <div className={`skill-icon skill-icon-${index}`}><Icon size={21} /></div>
            <h3>{title}</h3>
            <div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section section-block" id="projects">
      <div className="section-wrap">
        <div className="section-heading heading-row">
          <div><p className="eyebrow">SELECTED WORK</p><h2>Projects with a <span>purpose.</span></h2></div>
          <p className="heading-note">Practice projects that turn concepts into something real.</p>
        </div>
        <div className="project-grid">
          {projects.map(({ number, title, category, description, stack, github, demo, icon: Icon, tone }) => (
            <article className={`project-card tilt-card project-tilt-${tone}`} key={title}>
              <div className={`project-art art-${tone}`}>
                <div className="art-window">
                  <div className="window-dots"><i /><i /><i /></div>
                  <Icon size={45} strokeWidth={1.35} />
                  <span>{number} / PROJECT</span>
                </div>
                <span className="project-number">{number}</span>
              </div>
              <div className="project-body">
                <p className="project-category">{category}</p>
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a href={github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
                  {demo && <a href={demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="project-note">Some academic project links currently point to my GitHub profile. Replace them with individual repository URLs when those repositories are public.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-wrap section-block" id="contact">
      <div className="contact-card">
        <div className="contact-orb" />
        <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
        <h2>Let's make<br /><span>something useful.</span></h2>
        <p className="contact-copy">I’m interested in learning, collaborating, and exploring entry-level opportunities in web development and IT. Reach out by email or connect with me on LinkedIn.</p>
        <a
          className="button button-light"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
          target="_blank"
          rel="noreferrer"
        ><Mail size={17} /> Email me <ArrowRight size={17} /></a>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Mail size={18} /> {profile.phone}</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="brand footer-brand" href="#home"><span className="brand-mark">M<span>.</span></span><span>MANJUNATH OLEKAR</span></a>
      <span>Designed and built with React + CSS.</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}