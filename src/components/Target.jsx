import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <mesh {...props} ref={targetRef} scale={2}>
      <primitive object={scene} ref={targetRef} />
    </mesh>
  );
};

export default Target;
