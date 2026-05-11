import { Stars, Float, PerspectiveCamera, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function BackgroundParticles() {
  const points = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.z = time * 0.03;
  });

  return (
    <group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <mesh ref={points as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={new Float32Array(300).map(() => (Math.random() - 0.5) * 50)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="#8B5CF6" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function FloatingShapes() {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-5, 2, -10]} scale={1.5}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8B5CF6" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <Sphere position={[6, -3, -8]} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#22D3EE"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, -5, -15]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#A78BFA" transparent opacity={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Experience() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22D3EE" />
      
      <BackgroundParticles />
      <FloatingShapes />
      
      <fog attach="fog" args={['#020617', 5, 30]} />
    </>
  );
}
