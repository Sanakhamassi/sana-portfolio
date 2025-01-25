import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const meshRef = useRef(); // Ref to manipulate the mesh
  const [hovered, setHovered] = useState(false); // State for hover effect

  // Continuous rotation using useFrame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.8 : 0.05; // Faster on hover
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)} // Set hover state
      onPointerOut={() => setHovered(false)} // Reset hover state
      scale={isMobile ? 0.7 : 0.75} // Scale based on device size
    >
      {/* Lighting setup */}
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        position={isMobile ? [0, -4.25, -2.2] : [0, -4.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disables zoom to keep focus on hover interactions
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
