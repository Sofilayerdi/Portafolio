import Button from "../components/Button"

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-layout">
                <header className="hero-header">
                    <div className="hero-text">
                        <div className="hero-badge">
                            
                        </div>
                        <h1>Sofia López Ayerdi</h1>
                        <p className="hero-role">Estudiante de la Universidad del Valle</p>
                        <p className="hero-description">
                            Estudiante de Ingeniería en Ciencias de la Computación en Universidad del Valle. 
                            Desarrolladora Full Stack buscando oportunidades para crecer profesionalmente y 
                            aplicar mis conocimientos para contribuir en soluciones innovadoras.
                        </p>
                        <Button
                            text="Conocer más"
                            className="cta-wrapper"
                        />
                    </div>
                </header>
            </div>
        </section>
    )
}

export default Hero