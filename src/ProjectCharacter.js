import React, {Suspense, useEffect} from 'react';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';



export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Girl.gltf')
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
          <skinnedMesh name="Ch29" geometry={nodes.Ch29.geometry} material={materials.Ch29_Body} skeleton={nodes.Ch29.skeleton} />
        </group>
      </group>
    </group>
  )
}


function ProjectCharacter() {
  const ref=useRef()
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Environment'>
     <Canvas>
      <Suspense fallback={null} >
       <ambientLight/>
       <spotLight intensity={0.9} angle={0.1} penumbra={1}
                 position={[10,15,10]}
                 castShadow/>
       <Model/>
       <OrbitControls enablePan={true}
                      enableZoom={true}
                      enableRotate={true}/>
      </Suspense>
     </Canvas>
    </div>
  )
}

export default ProjectCharacter