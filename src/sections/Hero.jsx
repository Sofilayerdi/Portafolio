import { useState } from "react";
import Button from "../components/Button";
import Model from "../components/Models/Model";
import { Modal } from "../components/Modal";

const Hero = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <section className="hero">
        <div className="hero-layout">

          <div className="hero-content">
            <h1 className="hero-name">
              Sofía López<br />
              <span>Ayerdi</span>
            </h1>

            <p className="hero-role">Ing. en Ciencias de la Computación</p>

            <p className="hero-description">
              Desarrolladora Full Stack apasionada por crear productos digitales funcionales 
              y bien diseñados. Experiencia en desarrollo web, bases de datos y construcción de 
              interfaces intuitivas. Siempre buscando aprender, crecer y aportar soluciones con impacto real.
            </p>

            <Button
              text="Descargar CV"
              className="cta-wrapper"
              href="/cv-sofia-lopez.pdf"
              download="CV_Sofia_Lopez_Ayerdi.pdf"
            />

            <p className="hero-hint">Explora el edificio</p>
          </div>

          <div className="hero-model">
            <Model onZoneClick={setActiveModal} />
          </div>

        </div>
      </section>

      {activeModal && (
        <Modal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};

export default Hero;