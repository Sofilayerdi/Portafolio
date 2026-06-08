import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Building } from "./Building";
import { Suspense, useRef, useState } from "react";

const Lights = () => (
  <>
    <ambientLight intensity={0.6} color="#fff5e0" />
    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
    <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#b0d0ff" />
    <pointLight position={[0, -2, 5]} intensity={0.3} color="#ffe8c0" />
  </>
);

const ZONES = [
  { id: "about",    label: "Sobre mí", position: [0.78, 0.4, 2.1] },
  { id: "skills",   label: "Habilidades", position: [0, 1.0,2.1] },
  { id: "projects", label: "Proyectos", position: [0,2.4, 2.1] },
  { id: "contact",  label: "Contacto",  position: [0,3.7, 0  ] },
];

const Hotspot = ({ zone, onZoneClick }) => (
  <Html position={zone.position} center zIndexRange={[10, 0]}>
    <button className="hotspot-btn" onClick={() => onZoneClick(zone.id)}>
      <span className="hotspot-emoji">{zone.emoji}</span>
      <span className="hotspot-text">{zone.label}</span>
    </button>
  </Html>
);

const SpinningBuilding = ({ spinning }) => {
  const groupRef = useRef();
  const speedRef = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const target = spinning ? 1.2 : 0;
    speedRef.current += (target - speedRef.current) * 0.04;
    groupRef.current.rotation.y += speedRef.current * delta;
  });

  return (
    <group ref={groupRef}>
      <Building position={[0, -1, 0]} />
    </group>
  );
};

const Model = ({ onZoneClick, spinning }) => {
  return (
    <Canvas
      camera={{ position: [0, 4, 15], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
      shadows
    >
      <Lights />

      <OrbitControls
        enablePan={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        target={[0, 1, 0]}
        enabled={!spinning}
      />

      <Suspense fallback={null}>
        <SpinningBuilding spinning={spinning} />

        {[
          { id: "about",    pos: [0.78, -0.3, 2.05], size: [0.6, 1.1, 0.1] },
          { id: "skills",   pos: [0,    0.4,  2.05], size: [1.8, 0.9, 0.1] },
          { id: "projects", pos: [0,    1.8,  2.05], size: [2.2, 1.0, 0.1] },
          { id: "contact",  pos: [0,    3.3,  0   ], size: [2.5, 0.6, 2.5] },
        ].map((z) => (
          <mesh
            key={z.id}
            position={z.pos}
            onClick={(e) => { e.stopPropagation(); onZoneClick(z.id); }}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "default")}
          >
            <boxGeometry args={z.size} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>
        ))}

        {ZONES.map((zone) => (
          <Hotspot key={zone.id} zone={zone} onZoneClick={onZoneClick} />
        ))}
      </Suspense>
    </Canvas>
  );
};

export default Model;