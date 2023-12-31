import React, { useRef, useEffect, useState } from 'react';

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
  }, [videoRef]);

  return (
    <div className='name'>
      <div className='camera'>
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP</button>
      </div>
      <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
        {hasPhoto && <button onClick={downloadPhoto}>Download</button>}
        <button onClick={closePhoto}>Close</button>
      </div>
    </div>
  );
}

export default ProjectModels;
