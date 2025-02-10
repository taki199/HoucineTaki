import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect } from "react";

const CameraAnimation = ({ orbitControlsRef }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Save the camera's initial position (default position)
    const initialPosition = {
      x: 0, // Default X position (center of the scene)
      y: 0, // Default Y position (center of the scene)
      z: 28, // Default Z position (front of the scene)
    };

    // Set the camera's starting position (viewing from far away)
    camera.position.set(100, 50, -100); // Move the camera far away
    camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene
    camera.updateProjectionMatrix(); // Update the camera's projection matrix

    // Animation timeline
    const timeline = gsap.timeline();

    // Step 1: Move the camera to the default position (front of the scene)
    timeline.to(
      camera.position,
      {
        x: initialPosition.x, // Move to the center of the scene
        y: initialPosition.y, // Move to the center of the scene
        z: initialPosition.z, // Move to the front of the scene
        duration: 10, // Animation duration in seconds
        ease: "power2.inOut", // Smooth easing
        onUpdate: () => {
          camera.lookAt(0, 0, 0); // Keep the camera looking at the center of the scene
          camera.updateProjectionMatrix(); // Update the camera's projection matrix during the animation
        },
        onComplete: () => {
          // Enable OrbitControls after the animation ends
          if (orbitControlsRef.current) {
            orbitControlsRef.current.enabled = true;
          }
        },
      },
      "0" // Start the animation immediately
    );
  }, [camera, orbitControlsRef]);

  return null;
};

export default CameraAnimation;
