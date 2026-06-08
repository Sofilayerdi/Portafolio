import { useState, useEffect } from "react";


const MODALS = {
  about: {
    label: "Sobre mí",
    title: "Hola, soy Sofía",
    content: "about",
  },
  skills: {
    label: "Habilidades",
    title: "Habilidades Técnicas",
    content: "skills",
  },
  projects: {
    label: "Proyectos",
    title: "Proyectos Destacados",
    content: "projects",
  },
  contact: {
    label: "Contacto",
    title: "Contáctame",
    content: "contact",
  },
};

function AboutContent() {
  return (
    <div className="about-grid">
      <p className="about-bio">
        Soy <strong>Sofía López Ayerdi</strong>, estudiante de 3er año en Ingeniería en Ciencias de la Computación en 
        la Universidad del Valle de Guatemala. Me apasiona crear soluciones tecnológicas que no 
        solo funcionen bien, sino que también sean intuitivas, agradables de usar y generen un 
        impacto real. Disfruto el proceso de transformar ideas en productos funcionales, combinando 
        diseño, lógica y tecnología.
        <br /><br />
        Mi enfoque principal es el <strong>desarrollo Full Stack</strong>, ya que me gusta entender y participar 
        en todo el proceso de construcción de software. Desde el desarrollo de interfaces modernas y experiencias 
        de usuario cuidadas, hasta la implementación de APIs, bases de datos y la lógica que sostiene cada aplicación. 
        Esta visión integral me permite conectar la experiencia del usuario con la tecnología que la hace posible.
        <br /><br />
        Soy una persona curiosa, adaptable y con muchas ganas de aprender. Busco oportunidades donde pueda seguir 
        creciendo como desarrolladora, colaborar en proyectos desafiantes y aportar soluciones de calidad que conviertan 
        ideas complejas en experiencias digitales útiles y bien diseñadas.

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
        </div>
      </div>
    </div>
  );
}

function SkillBar({ level }) {
  return (
    <div className="skill-bar-track">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`skill-bar-segment${i <= level ? " filled" : ""}`}
        />
      ))}
    </div>
  );
}

function SkillsContent() {
  const skills = [
    { name: "React",       category: "Frontend",    level: 5, icon: "⚛" },
    { name: "JavaScript",  category: "Frontend",    level: 5, icon: "JS" },
    { name: "TypeScript",  category: "Frontend",    level: 3, icon: "TS" },
    { name: "CSS / HTML",  category: "Frontend",    level: 5, icon: "◈" },
    { name: "Vue",         category: "Frontend",    level: 3, icon: "◉" },
    { name: "Three.js",    category: "Frontend",    level: 2, icon: "△" },
    { name: "Go",          category: "Backend",     level: 5, icon: "Go" },
    { name: "Node.js",     category: "Backend",     level: 4, icon: "◆" },
    { name: "PostgreSQL",  category: "Backend",     level: 4, icon: "🗄" },
    { name: "REST APIs",   category: "Backend",     level: 4, icon: "⇄" },
    { name: "Docker",      category: "Backend",     level: 3, icon: "□" },
    { name: "Python",      category: "Backend",     level: 3, icon: "Py" },
    { name: "Git / GitHub",category: "Herramientas",level: 5, icon: "⎇" },
    { name: "Figma",       category: "Herramientas",level: 4, icon: "✦" },
    { name: "Vite",        category: "Herramientas",level: 4, icon: "⚡" },
  ];

  const categories = ["Frontend", "Backend", "Herramientas"];

  return (
    <div className="skills-new">
      {categories.map((cat) => (
        <div key={cat} className="skills-category">
          <div className="skills-category-header">
            <span className="skills-category-label">{cat}</span>
          </div>
          <div className="skills-rows">
            {skills.filter((s) => s.category === cat).map((s) => (
              <div key={s.name} className="skill-row">
                <div className="skill-row-icon">{s.icon}</div>
                <span className="skill-row-name">{s.name}</span>
                <SkillBar level={s.level} />
              </div>
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
        "Sistema de gestión para una florería con autenticación JWT, roles de PostgreSQL (gerente, vendedor, auditor, comprador), control de inventario en tiempo real, creación de ramos y reportes de ventas mensuales.",
      techs: ["React", "Go", "PostgreSQL", "Docker"],
      image: "/src/assets/bloom.jpeg",
    },
    {
      name: "Calculadora Web",
      description: "Calculadora desarrollada en React + TypeScript con operaciones básicas, soporte decimal y manejo de errores. Incluye pruebas unitarias con Vitest y Testing Library, documentación visual con Storybook y despliegue en GitHub Pages.",
      techs: ["React", "TypeScript"],
      image: "/src/assets/calculadora.png",
    },
    {
      name: "Bele'k",
      description: "Aplicación Android de turismo en Guatemala desarrollada en Kotlin con Jetpack Compose. Recomienda destinos populares y poco conocidos según los intereses del usuario, con autenticación Supabase, base de datos local con Room, mapas con Google Maps API y soporte para múltiples idiomas y monedas.",
      techs: ["Kotlin", "Jetpack Compose"],
      image: "/src/assets/belek.jpeg",
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
      value: "sofiayerdi@gmail.com",
      href: "mailto:sofiayerdi@gmail.com",
    },
    {
      icon: "☎",
      label: "Teléfono",
      value: "+502 3362 4997",
      href: "tel:+50233624997",
    },
    {
      icon: "⌥",
      label: "GitHub",
      value: "@Sofilayerdi",
      href: "https://github.com/Sofilayerdi",
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: "@sofilayerdi",
      href: "https://www.linkedin.com/in/sofilayerdi/",
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


export function Modal({ type, onClose }) {
  const [closing, setClosing] = useState(false);
  const data = MODALS[type];

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