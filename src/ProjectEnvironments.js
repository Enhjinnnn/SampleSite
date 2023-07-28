import React, { Suspense } from 'react';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model(props) {
  const { nodes, materials } = useGLTF('/drone.gltf')
  return (
    <group {...props} dispose={null} scale={0.2}>
      <mesh geometry={nodes.Mesh028.geometry} material={materials['Sel_Red.001']} />
      <mesh geometry={nodes.Mesh028_1.geometry} material={materials['Sel_Yellow.001']} />
      <mesh geometry={nodes.Mesh028_2.geometry} material={materials['Sel_ORange.001']} />
      <mesh geometry={nodes.Mesh028_3.geometry} material={materials['Sel_Green.001']} />
      <mesh geometry={nodes.Mesh028_4.geometry} material={materials['Sel_Cyan.001']} />
    </group>
  )
}

function ProjectEnvironments() {
  const ref=useRef()
  return (
    <div className='Environment'>
     <Canvas>
      <Suspense fallback={null}>
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

export default ProjectEnvironments