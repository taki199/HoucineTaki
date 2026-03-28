import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function Stars() {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
    }
  });

  const vertices = useMemo(() => {
    const v = [];
    for (let i = 0; i < 10000; i++) {
      v.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }
    return new Float32Array(v);
  }, []);

  return (
    <points ref={starsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={vertices}
          itemSize={3}
          count={vertices.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.3} color="white" />{" "}
      {/* Smaller stars */}
    </points>
  );
}

export default function SpaceBackground({ contentHeight }) {
  return (
    <Canvas
      style={{
        position: "absolute", // Use absolute positioning
        top: "100vh", // Start below the Hero section
        left: 0,
        width: "100%",
        height: `${contentHeight}px`, // Set height dynamically based on content
        zIndex: 0, // Ensure it stays behind other content
        backgroundColor: "#070707",
      }}
      camera={{ position: [0, 0, 10] }}
    >
      <Stars />
    </Canvas>
  );
}
