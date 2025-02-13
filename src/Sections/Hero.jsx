import { useGSAP } from "@gsap/react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"; // Import OrbitControls
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";
import CameraAnimation from "../components/CameraAnimation";
import CanvasLoader from "../components/CanvasLoader";
import Cube from "../components/Cube";
import FliyingAstronaut from "../components/FliyingAstronaut";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Ring";
import SpaceTravel from "../components/SpaceTravel";
import Target from "../components/Target";
import { calculateSizes } from "../constants/index";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const hero = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    // Initial state: Hide the block and move it above the viewport
    gsap.set(hero.current, { y: -100, opacity: 0 });

    // Animation: Wait for 10 seconds, then animate the block to its original position
    gsap.to(hero.current, {
      y: 0, // Move to original Y position
      opacity: 1, // Fade in
      duration: 1, // Animation duration
      delay: 10, // Wait for 10 seconds before starting
      ease: "power2.out", // Smooth easing
      zIndex: 10, // Use zIndex instead of z
    });
  }, []);
  useGSAP(() => {
    // Initial state: Hide the block and move it above the viewport
    gsap.set(btnRef.current, { y: -100, opacity: 0 });

    // Animation: Wait for 10 seconds, then animate the block to its original position
    gsap.to(btnRef.current, {
      y: 0, // Move to original Y position
      opacity: 1, // Fade in
      duration: 1, // Animation duration
      delay: 10, // Wait for 10 seconds before starting
      ease: "power2.out", // Smooth easing
      zIndex: 10, // Use zIndex instead of z
    });
  }, []);

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const orbitControlsRef = useRef(); // Define the ref here

  return (
    <section className="min-h-screen w-full flex flex-col relative z" id="home">
      <div
        className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"
        ref={hero}
      >
        <p className="sm:tex-3xl text-2xl font-medium text-white text-center font-generalsans z-10">
          Hi,I am <span className="text-3xl font-extrabold ">H</span>oucine{" "}
          <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient z-10">
          Transforming ideas into interactive realities
        </p>
        {/* Robot Model */}
        {/* <Status scale={2.5} position={[0, -9, 2]} rotation={[0, 0, 0]} /> */}
        {/* <HeroCamera isMobile={isMobile}>
              <RobotModel
                scale={sizes.deskScale}
                position={[0, -9, 2]}
                rotation={[0, 0, 0]}
              />
            </HeroCamera> */}
      </div>
      <div className="w-full h-full absolute inset-0 mb-6">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <CameraAnimation orbitControlsRef={orbitControlsRef} />

            {/* Use OrbitControls as the default controller */}
            <OrbitControls
              ref={orbitControlsRef} // Pass the ref to OrbitControls
              makeDefault // Make OrbitControls the default controller
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
              minDistance={5}
              maxDistance={100}
              enabled={false} // Disable controls initially
            />
            <PerspectiveCamera makeDefault position={[0, 0, 28]} />

            {/* Models */}
            <SpaceTravel
              position={[35, 1, -20]}
              scale={[1, 1, 0.7]}
              rotation={[0, Math.PI / 2, -4]}
            />
            <FliyingAstronaut scale={4} position={[0, -10, 0]} />
            <group>
              <Target
                scale={1.5}
                position={sizes.targetPosition}
                rotation={[0, Math.PI / 5, 0]}
              />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            {/* Lights */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={3} />

            {/* OrbitControls */}
          </Suspense>
        </Canvas>
      </div>
      <div
        className="absolute bottom-7 left-0 right-0 w-full z-10 c-space"
        ref={btnRef}
      >
        <a href="#about" className="w-fit">
          <Button
            name="Let's Build Something Cool ⚡"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96 bg-gradient-to-r from-slate-500 to-slate-900 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
