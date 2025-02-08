import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Astronaut = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/little_astronaut.glb"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.011}
        >
          <group
            name="17f9d1b3a83741e2a2981db7241c686efbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Astronaut"
                  position={[0, 76.083, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Astronaut}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group
                      name="Object_8"
                      position={[0, 76.083, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/little_astronaut.glb");
export default Astronaut;
