import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Building } from "./Building";

const Model = () => {
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={1} />
        
            <OrbitControls 
            enablePan={false}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            />

            <Building/>
        
        </Canvas>
    )
}

export default Model;