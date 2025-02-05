import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import Button from "../components/Button";

const About = () => {
  const globeEl = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("houcine.taki21@gmail.com").then(() => {
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    const globe = globeEl.current;
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;

    // Add clouds sphere
    const CLOUDS_IMG_URL = "/assets/clouds.png"; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi,I'm Houcine</p>
              <p className="grid-subtext">
                Passionate full-stack developer specializing in MERN, React, and
                Next.js. Currently diving into 3D magic with Three.js 🎨 and
                leveling up my backend skills with Spring Boot ⚡. Always
                building, learning, and pushing limits!
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              className="w-full sm:h-[276px] h-fit object-contain"
              alt="grid_2"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                i specialize in Javascript/Typescript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                // labelsData={[
                //   {
                //     lat: 33.589886,
                //     lng: -7.603869,
                //     text: "I'm here!",
                //     color: "white",
                //     size: 700,
                //   },
                // ]}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I can work remotely across most timezones
              </p>
              <p className="grid-subtext">
                im based in Casablanca,Morocco with remote work available.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="gird-container">
            <img
              src="/assets/grid3.png"
              alt="grid_3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Fueled by my love for coding 💡</p>
              <p className="grid-subtext">
                I enjoy tackling challenges and bringing ideas to life through
                code! 🔥
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid_4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              {/* <p className="grid-headtext">Fueled by my love for coding 💡</p> */}
              <p className="grid-subtext text-center">Contact Me🔥</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  houcine.taki21@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
