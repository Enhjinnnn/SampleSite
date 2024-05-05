import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';

function ProjectModels() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 }
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  const downloadPhoto = () => {
    let photo = photoRef.current;
    const link = document.createElement('a');
    link.download = 'taken_photo.png';

    photo.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className='name'>
      <div className='canvas-container'>
        <Canvas>
          <ambientLight />
          <spotLight
            intensity={0.9}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Model />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>

        <div className='video-overlay'>
          <video ref={videoRef} autoPlay muted playsInline className='video-feed'></video>
        </div>
      </div>

      <div className='result' style={{ display: hasPhoto ? 'block' : 'none' }}>
        <canvas ref={photoRef}></canvas>
        {hasPhoto && <button onClick={downloadPhoto}>Download</button>}
        <button onClick={closePhoto}>Close</button>
      </div>
    </div>
  );
}

export default ProjectModels;
