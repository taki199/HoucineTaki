import { PerspectiveCamera } from "@react-three/drei"; // Import OrbitControls
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Ring";
import RobotModel from "../components/RobotModel";
import Target from "../components/Target";
import { calculateSizes } from "../constants/index";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:tex-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi,I am <span className="text-3xl font-extrabold ">H</span>oucine{" "}
          <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient">
          Transforming ideas into interactive realities
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 28]} />

            {/* Robot Model */}
            <HeroCamera isMobile={isMobile}>
              <RobotModel
                scale={sizes.deskScale}
                position={[0, -9, 2]}
                rotation={[0, 0, 0]}
              />
            </HeroCamera>

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
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

            {/* OrbitControls */}
            {/* <OrbitControls
              enablePan={true} 
              enableZoom={false} 
              enableRotate={true} 
              minDistance={5} 
              maxDistance={50} 
            /> */}
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
