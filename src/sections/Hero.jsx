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
            <span className="hero-tag">Frontend Developer</span>

            <h1 className="hero-name">
              Sofía<br />
              López<br />
              <span>Ayerdi</span>
            </h1>

            <p className="hero-role">Ing. en Ciencias de la Computación</p>

            <p className="hero-description">
              Construyo interfaces que importan — donde el código
              limpio y el diseño cuidado se encuentran.
            </p>

            <Button text="Conocer más" className="cta-wrapper" />

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