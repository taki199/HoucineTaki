import { useGSAP } from "@gsap/react";
import { Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react.glb");

  const cubeRef = useRef();

  // GSAP animation for continuous rotation
  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1, // Infinite loop
        repeatDelay: 0, // No delay between repetitions
      })
      .to(cubeRef.current.rotation, {
        y: `+=${Math.PI * 2}`, // Rotate on the y-axis continuously
        duration: 5, // Adjust the speed of rotation
        ease: "none", // Keeps the rotation constant
      });
  });

  return (
    <Float floatIntensity={1}>
      <group {...props} position={[6, 4, 0]} scale={0.6}>
        <mesh
          ref={cubeRef}
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
