import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Building } from "./Building";
import { Suspense, useRef } from "react";

const Lights = () => {
  const targetRef = useRef();
  return (
    <>
      <mesh ref={targetRef} position={[0, 1, 0]} visible={false}>
        <sphereGeometry args={[0.1]} />
        <meshBasicMaterial />
      </mesh>
      <ambientLight intensity={0.6} color="#fff5e0" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#b0d0ff" />
      <pointLight position={[0, -2, 5]} intensity={0.3} color="#ffe8c0" />
    </>
  );
};

const Model = ({ onZoneClick }) => {
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
      />

      <Suspense fallback={null}>
        <Building position={[0, -1, 0]} />
        
        <mesh
          position={[0.78, -0.3, 2.05]}
          onClick={(e) => { e.stopPropagation(); onZoneClick("about"); }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          <boxGeometry args={[0.6, 1.1, 0.1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        <mesh
          position={[0, 0.4, 2.05]}
          onClick={(e) => { e.stopPropagation(); onZoneClick("skills"); }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          <boxGeometry args={[1.8, 0.9, 0.1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        <mesh
          position={[0, 1.8, 2.05]}
          onClick={(e) => { e.stopPropagation(); onZoneClick("projects"); }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          <boxGeometry args={[2.2, 1.0, 0.1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        <mesh
          position={[0, 3.3, 0]}
          onClick={(e) => { e.stopPropagation(); onZoneClick("contact"); }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          <boxGeometry args={[2.5, 0.6, 2.5]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </Suspense>
    </Canvas>
  );
};

export default Model;