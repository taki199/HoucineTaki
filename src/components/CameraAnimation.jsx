import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect } from "react";

const CameraAnimation = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Save the camera's initial position and rotation
    const initialPosition = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    };
    const initialRotation = {
      x: camera.rotation.x,
      y: camera.rotation.y,
      z: camera.rotation.z,
    };

    // Animation timeline
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Loop forever with a 1-second delay between loops

    // Step 1: Zoom out and move behind the scene
    timeline.to(camera.position, {
      x: initialPosition.x, // Keep X position the same
      y: initialPosition.y, // Keep Y position the same
      z: initialPosition.z + 20, // Move the camera further back (zoom out)
      duration: 5, // Animation duration in seconds
      ease: "power2.inOut", // Smooth easing
    });

    // Step 2: Rotate the camera to look behind the scene
    timeline.to(
      camera.rotation,
      {
        y: Math.PI, // Rotate 180 degrees (in radians)
        duration: 5, // Animation duration in seconds
        ease: "power2.inOut", // Smooth easing
      },
      "<"
    ); // Start this animation at the same time as the previous one

    // Step 3: Move the camera back to its original position
    timeline.to(camera.position, {
      x: initialPosition.x, // Return to initial X position
      y: initialPosition.y, // Return to initial Y position
      z: initialPosition.z, // Return to initial Z position
      duration: 5, // Animation duration in seconds
      ease: "power2.inOut", // Smooth easing
    });

    // Step 4: Rotate the camera back to its original rotation
    timeline.to(
      camera.rotation,
      {
        y: initialRotation.y, // Return to initial Y rotation
        duration: 5, // Animation duration in seconds
        ease: "power2.inOut", // Smooth easing
      },
      "<"
    ); // Start this animation at the same time as the previous one
  }, [camera]);

  return null;
};

export default CameraAnimation;
