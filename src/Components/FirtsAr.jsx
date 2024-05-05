import React, { useRef, useEffect } from 'react';
import AFrame from 'aframe';

function FirstAR() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (scene) {
      // Initialize A-Frame with AR capabilities
      AFrame.scenes[0] = scene;
      window.addEventListener('arjs-loaded', () => {
        scene.setAttribute('embedded', '');
      });
    }
  }, []);

  return (
    <div ref={sceneRef}>
      <a-scene arjs="trackingMethod: marker; detectionMode: color; debugUIEnabled: false;">
        <a-marker preset="hiro">
          <a-box position="-1 0.5 0" color="red"></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default FirstAR;
