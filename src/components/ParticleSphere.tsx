import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 1500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + (Math.random() - 0.5) * 0.3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("hsl(175, 80%, 50%)");
    const purple = new THREE.Color("hsl(260, 60%, 60%)");
    for (let i = 0; i < count; i++) {
      const mixed = cyan.clone().lerp(purple, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return col;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const ParticleSphere = () => {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleSphere;
