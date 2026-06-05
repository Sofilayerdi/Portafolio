import Button from "../components/Button"
import Model from "../components/Models/Model"

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-layout">
                <header className="hero-header">
                    <div className="hero-text">
                        <h1>Sofia López Ayerdi</h1>
                    
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
