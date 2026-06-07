import { useState, useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const MODALS = {
  about: {
    label: "Sobre mí",
    title: "Hola, soy Sofía",
    content: "about",
  },
  skills: {
    label: "Habilidades",
    title: "Stack técnico",
    content: "skills",
  },
  projects: {
    label: "Proyectos",
    title: "Lo que he construido",
    content: "projects",
  },
  contact: {
    label: "Contacto",
    title: "Hablemos",
    content: "contact",
  },
};

// ── Sub-contents ──────────────────────────────────────────────────────────────

function AboutContent() {
  return (
    <div className="about-grid">
      <p className="about-bio">
        Soy <strong>Sofía López Ayerdi</strong>, estudiante de Ingeniería en Ciencias de la
        Computación en la Universidad del Valle, Guatemala. Me apasiona construir
        interfaces que no solo funcionen bien, sino que <strong>se sientan bien</strong> —
        ese punto donde el código y el diseño se encuentran.
        <br /><br />
        Estoy orientada al <strong>desarrollo frontend</strong>, pero con una base sólida
        en backend que me permite entender (y construir) el sistema completo. Busco
        oportunidades donde pueda crecer, aprender rápido y dejar huella en el producto.
      </p>

      <div className="about-divider" />

      <div>
        <p className="about-why-title">¿Por qué trabajar conmigo?</p>
        <div className="about-reasons">
          <div className="about-reason">
            <div className="about-reason-dot" />
            <p><strong>Aprendo con intención.</strong> Cuando me interesa algo, voy al fondo — no me quedo en la superficie.</p>
          </div>
          <div className="about-reason">
            <div className="about-reason-dot" />
            <p><strong>Me importa el detalle.</strong> La diferencia entre bueno y memorable está en los márgenes, las transiciones, la tipografía.</p>
          </div>
          <div className="about-reason">
            <div className="about-reason-dot" />
            <p><strong>Pienso en full-stack.</strong> Diseño interfaces pensando en el backend que las sostiene.</p>
          </div>
          <div className="about-reason">
            <div className="about-reason-dot" />
            <p><strong>Comunico bien.</strong> Documentación, trabajo en equipo, presentar ideas — no me asustan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsContent() {
  const groups = [
    {
      title: "Frontend",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "GSAP", "Three.js"],
      highlight: ["React", "Three.js"],
    },
    {
      title: "Backend",
      tags: ["Go", "Node.js", "REST APIs", "PostgreSQL", "Docker"],
      highlight: ["Go"],
    },
    {
      title: "Herramientas",
      tags: ["Git", "GitHub", "Vite", "Figma", "VS Code"],
      highlight: [],
    },
    {
      title: "Aprendiendo",
      tags: ["TypeScript", "Next.js", "Framer Motion"],
      highlight: ["TypeScript", "Next.js"],
    },
  ];

  return (
    <div className="skills-grid">
      {groups.map((g) => (
        <div key={g.title}>
          <p className="skill-group-title">{g.title}</p>
          <div className="skill-tags">
            {g.tags.map((t) => (
              <span
                key={t}
                className={`skill-tag${g.highlight.includes(t) ? " highlight" : ""}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsContent() {
  const projects = [
    {
      name: "Bloom Florería",
      description:
        "Sistema de gestión para una florería con roles múltiples (gerente, vendedor, auditor), reportes de ventas y control de inventario en tiempo real.",
      techs: ["React", "Go", "PostgreSQL", "Docker"],
      image: null,
    },
    {
      name: "Proyecto 2",
      description: "Descripción del proyecto. Agrega aquí los detalles de qué problema resuelve y qué lo hace interesante.",
      techs: ["React", "Node.js"],
      image: null,
    },
    {
      name: "Proyecto 3",
      description: "Descripción del proyecto. Agrega aquí los detalles de qué problema resuelve y qué lo hace interesante.",
      techs: ["Next.js", "TypeScript"],
      image: null,
    },
  ];

  return (
    <div className="projects-list">
      {projects.map((p) => (
        <div className="project-card" key={p.name}>
          {p.image ? (
            <img className="project-img" src={p.image} alt={p.name} />
          ) : (
            <div className="project-img-placeholder">imagen del proyecto</div>
          )}
          <div className="project-info">
            <p className="project-name">{p.name}</p>
            <p className="project-desc">{p.description}</p>
            <div className="project-techs">
              {p.techs.map((t) => (
                <span className="project-tech" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactContent() {
  const items = [
    {
      icon: "✉",
      label: "Correo",
      value: "sofia@email.com",
      href: "mailto:sofia@email.com",
    },
    {
      icon: "☎",
      label: "Teléfono",
      value: "+502 0000 0000",
      href: "tel:+50200000000",
    },
    {
      icon: "⌥",
      label: "GitHub",
      value: "github.com/sofilopez",
      href: "https://github.com",
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: "linkedin.com/in/sofilopez",
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="contact-list">
      {items.map((item) => (
        <a
          key={item.label}
          className="contact-item"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-icon">{item.icon}</div>
          <div className="contact-text">
            <p className="contact-label">{item.label}</p>
            <p className="contact-value">{item.value}</p>
          </div>
          <span className="contact-arrow">→</span>
        </a>
      ))}
    </div>
  );
}

// ── Modal shell ───────────────────────────────────────────────────────────────

export function Modal({ type, onClose }) {
  const [closing, setClosing] = useState(false);
  const data = MODALS[type];

  // close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 240);
  };

  const renderContent = () => {
    switch (data.content) {
      case "about":    return <AboutContent />;
      case "skills":   return <SkillsContent />;
      case "projects": return <ProjectsContent />;
      case "contact":  return <ContactContent />;
      default: return null;
    }
  };

  return (
    <div className={`modal-overlay${closing ? " closing" : ""}`} onClick={handleClose}>
      <div
        className={`modal-card${closing ? " closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <p className="modal-label">{data.label}</p>
            <h2 className="modal-title">{data.title}</h2>
          </div>
          <button className="modal-close" onClick={handleClose} aria-label="Cerrar">✕</button>
        </div>
        <div className="modal-body">{renderContent()}</div>
      </div>
    </div>
  );
}