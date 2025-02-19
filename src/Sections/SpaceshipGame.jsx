// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import React, { useCallback, useEffect, useRef, useState } from "react";

// // Player Spaceship Component
// const Spaceship = React.memo(({ position, onShoot }) => {
//   const spaceshipRef = useRef();

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowLeft") spaceshipRef.current.position.x -= 0.5;
//       if (event.key === "ArrowRight") spaceshipRef.current.position.x += 0.5;
//       if (event.key === " ") onShoot(spaceshipRef.current.position);
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [onShoot]);

//   return (
//     <mesh ref={spaceshipRef} position={position}>
//       <coneGeometry args={[0.5, 1, 3]} /> {/* Spaceship shape */}
//       <meshStandardMaterial color="blue" />
//     </mesh>
//   );
// });

// // Asteroid Component
// const Asteroid = React.memo(({ position, onRemove }) => {
//   const ref = useRef();

//   useFrame(() => {
//     ref.current.position.y -= 0.02;
//     if (ref.current.position.y < -5) onRemove();
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.2, 16, 16]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// });

// // Bullet Component
// const Bullet = React.memo(({ position, onRemove }) => {
//   const ref = useRef();

//   useFrame(() => {
//     ref.current.position.y += 0.1;
//     if (ref.current.position.y > 5) onRemove();
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.05, 8, 8]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// });

// // Game Logic Component (must be inside Canvas)
// const GameLogic = ({
//   setScore,
//   asteroids,
//   setAsteroids,
//   bullets,
//   setBullets,
// }) => {
//   const { scene } = useThree();

//   // Collision detection
//   useFrame(() => {
//     bullets.forEach((bullet) => {
//       asteroids.forEach((asteroid) => {
//         const distance = Math.sqrt(
//           Math.pow(bullet.position.x - asteroid.position.x, 2) +
//             Math.pow(bullet.position.y - asteroid.position.y, 2)
//         );
//         if (distance < 0.25) {
//           setAsteroids((prev) => prev.filter((a) => a.id !== asteroid.id));
//           setBullets((prev) => prev.filter((b) => b.id !== bullet.id));
//           setScore((prev) => prev + 1); // Update score
//         }
//       });
//     });
//   });

//   return null; // This component doesn't render anything
// };

// // Main Game Component
// const SpaceshipGame = () => {
//   const [asteroids, setAsteroids] = useState([]);
//   const [bullets, setBullets] = useState([]);
//   const [score, setScore] = useState(0);

//   // Asteroid spawning
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAsteroids((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           position: [(Math.random() - 0.5) * 10, 5, 0],
//         },
//       ]);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // Bullet shooting
//   const handleShoot = useCallback((position) => {
//     setBullets((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         position: [position.x, position.y, 0],
//       },
//     ]);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#1e1e1e",
//       }}
//     >
//       <div
//         style={{
//           width: "800px",
//           height: "600px",
//           border: "4px solid #00ff00",
//           borderRadius: "10px",
//           overflow: "hidden",
//           position: "relative",
//         }}
//       >
//         <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={0.5} />

//           <Spaceship position={[0, -4, 0]} onShoot={handleShoot} />

//           {asteroids.map((asteroid) => (
//             <Asteroid
//               key={asteroid.id}
//               position={asteroid.position}
//               onRemove={() =>
//                 setAsteroids((prev) => prev.filter((a) => a.id !== asteroid.id))
//               }
//             />
//           ))}

//           {bullets.map((bullet) => (
//             <Bullet
//               key={bullet.id}
//               position={bullet.position}
//               onRemove={() =>
//                 setBullets((prev) => prev.filter((b) => b.id !== bullet.id))
//               }
//             />
//           ))}

//           <GameLogic
//             setScore={setScore}
//             asteroids={asteroids}
//             setAsteroids={setAsteroids}
//             bullets={bullets}
//             setBullets={setBullets}
//           />
//         </Canvas>

//         {/* Score Display */}
//         <div
//           style={{
//             position: "absolute",
//             top: 20,
//             left: 20,
//             color: "white",
//             fontSize: 24,
//             pointerEvents: "none",
//           }}
//         >
//           Score: {score}
//         </div>

//         {/* Player Controls Display */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 20,
//             left: 20,
//             color: "white",
//             fontSize: 16,
//             pointerEvents: "none",
//           }}
//         >
//           Controls: Left/Right Arrow to Move, Space to Shoot
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpaceshipGame;
