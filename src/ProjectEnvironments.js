import React, { Suspense } from 'react';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.2}>
      <group position={[-3.587, 1.961, 0.373]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.587, 1.961, 0.373]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.569, 0.349, 1.765]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.587, 1.961, 0.373]}>
        <mesh geometry={nodes.Object_13.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Outline} />
      </group>
      <group position={[-0.145, 0.771, -1.153]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Outline} />
      </group>
      <group position={[0.52, 0.349, -2.209]} rotation={[0, -0.19, 0]}>
        <mesh geometry={nodes.Object_19.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Outline} />
      </group>
      <group position={[-0.809, 0.222, -2.268]} rotation={[0, 1.413, 0]}>
        <mesh geometry={nodes.Object_22.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Outline} />
      </group>
      <group position={[-0.823, 0.222, -1.477]} rotation={[-Math.PI, 1.173, -Math.PI]} scale={1.361}>
        <mesh geometry={nodes.Object_25.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Outline} />
      </group>
      <group position={[0.685, 0.985, -1.363]} scale={1.439}>
        <mesh geometry={nodes.Object_28.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Outline} />
      </group>
      <group position={[-0.399, 0.349, -2.239]} rotation={[Math.PI, -1.265, Math.PI]} scale={1.242}>
        <mesh geometry={nodes.Object_31.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Outline} />
      </group>
      <group position={[0.011, 0.771, -2.553]} scale={0.902}>
        <mesh geometry={nodes.Object_34.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.611, 0.073, 1.66]}>
        <mesh geometry={nodes.Object_37.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Outline} />
      </group>
      <group position={[-0.771, 0.073, -1.223]} rotation={[-0.179, 1.242, 0]} scale={0.74}>
        <mesh geometry={nodes.Object_40.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.587, 1.961, 0.373]}>
        <mesh geometry={nodes.Object_43.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.587, 1.961, 0.373]}>
        <mesh geometry={nodes.Object_46.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.587, 1.961, 0.373]}>
        <mesh geometry={nodes.Object_49.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Outline} />
      </group>
      <group position={[-3.587, 1.961, 0.373]}>
        <mesh geometry={nodes.Object_52.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.Outline} />
      </group>
      <group position={[0.914, -0.03, -1.938]} rotation={[0, 1.067, 0]} scale={0.854}>
        <mesh geometry={nodes.Object_55.geometry} material={materials.Vegetation} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Outline} />
      </group>
      <group position={[0.911, 1.978, 5.617]}>
        <mesh geometry={nodes.Object_61.geometry} material={materials.DragonHead} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.Outline} />
      </group>
      <group position={[0, -1.38, 4.413]}>
        <mesh geometry={nodes.Object_64.geometry} material={materials.UV1_Bootom_part} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.Outline} />
      </group>
      <group position={[0, 0, 1.193]}>
        <mesh geometry={nodes.Object_67.geometry} material={materials.UV2_low_part} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.Outline} />
      </group>
      <group position={[-4.16, 0, 1.185]}>
        <mesh geometry={nodes.Object_72.geometry} material={materials.UV2_low_part} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.Outline} />
      </group>
      <group position={[0.013, 0, -2.277]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object_75.geometry} material={materials.UV2_low_part} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.Outline} />
      </group>
      <group position={[0.032, 4.772, 1.193]}>
        <mesh geometry={nodes.Object_78.geometry} material={materials.UV3_Up_part} />
        <mesh geometry={nodes.Object_79.geometry} material={materials.Outline} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.material_0} />
      </group>
      <group position={[-2.772, 6.698, 3.618]}>
        <mesh geometry={nodes.Object_82.geometry} material={materials.UV4_Roof} />
        <mesh geometry={nodes.Object_83.geometry} material={materials.Outline} />
      </group>
      <mesh geometry={nodes.Object_58.geometry} material={materials.Floor} />
      <mesh geometry={nodes.Object_59.geometry} material={materials.Outline} />
      <mesh geometry={nodes.Object_70.geometry} material={materials.Bottle} position={[-5.039, 0.359, 2.904]} />
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