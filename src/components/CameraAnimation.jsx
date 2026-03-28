import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const CameraAnimation = ({ orbitControlsRef, onComplete }) => {
  const { camera } = useThree();
  const calledRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const initialPosition = { x: 0, y: 0, z: 28 };

    camera.position.set(100, 50, -100);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    const timeline = gsap.timeline({ repeat: 0 });

    timeline.to(
      camera.position,
      {
        x: initialPosition.x,
        y: initialPosition.y,
        z: initialPosition.z,
        duration: 10,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(0, 0, 0);
          camera.updateProjectionMatrix();
        },
        onComplete: () => {
          if (orbitControlsRef.current) {
            orbitControlsRef.current.enabled = true;
          }
          if (!calledRef.current) {
            calledRef.current = true;
            onCompleteRef.current?.();
          }
        },
      },
      "0"
    );

    return () => timeline.kill();
    // Only run once on mount — refs keep callbacks fresh
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default CameraAnimation;
