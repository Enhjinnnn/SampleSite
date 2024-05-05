// Model.js

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Girl.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions.Armature) {
      actions.Armature.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} scale={0.07}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 1.4, 0, 0.15]} scale={0.253}>
          <primitive object={nodes.mixamorig1Hips} />
          <skinnedMesh
            name="Ch29"
            geometry={nodes.Ch29.geometry}
            material={materials.Ch29_Body}
            skeleton={nodes.Ch29.skeleton}
          />
        </group>
      </group>
    </group>
  );
}
