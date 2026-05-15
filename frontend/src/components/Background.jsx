import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function InteractiveParticles() {
  const ref = useRef();
  const { mouse, viewport } = useThree();
  
  // Create 2000 larger particles
  const [positions] = useState(() => 
    random.inSphere(new Float32Array(2000 * 3), { radius: 1.2 })
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smoothly rotate the whole group
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (mouse.x * viewport.width) / 10, 0.1);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (mouse.y * viewport.height) / 10, 0.1);

    // Subtle floating animation
    ref.current.position.y = Math.sin(time / 2) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.008} // Increased size for visibility
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending} // Makes them "glow" against dark background
        />
      </Points>
    </group>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <InteractiveParticles />
      </Canvas>
    </div>
  );
}