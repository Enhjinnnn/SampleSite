// VideoTexture.js

import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';

const VideoTexture = () => {
  const videoRef = useRef();
  const videoTexture = useTexture(videoRef.current);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ display: 'none' }}
      />
      <mesh position={[0, 0, -5]}>
        <planeBufferGeometry args={[16 / 9, 1]} />
        <meshBasicMaterial map={videoTexture} />
      </mesh>
    </>
  );
};

export default VideoTexture;
