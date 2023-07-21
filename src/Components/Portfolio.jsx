import React, { useRef, useEffect } from 'react';
import PortrfolioBox from './PortfolioBox';
import fimage1 from '../img/characters.png';
import fimage2 from '../img/environments.png';
import fimage3 from '../img/visualEffects.png';
import fimage4 from '../img/models.png';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

function Portfolio() {
  const scrollContainerRef = useRef(null);
  const contentItems = [
    { image: fimage1, title: "Characters" },
    { image: fimage2, title: "Environments" },
    { image: fimage3, title: "Visual effects" },
    { image: fimage4, title: "3D models" },
    { image: fimage1, title: "Characters" },
    { image: fimage2, title: "Environments" },
    { image: fimage3, title: "Visual effects" },
    { image: fimage4, title: "3D models" },
  ];

  useEffect(() => {
    const scrollSpeed = 1;
    const container = scrollContainerRef.current;

    const scroll = () => {
      container.scrollLeft += scrollSpeed; // Auto-scroll to the right
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        // Set the scroll position to the beginning when reaching the end
        container.scrollLeft = 0;
      }
    };

    let scrollInterval = setInterval(scroll, 50);

    // Stop auto-scrolling when the user hovers over the container
    container.addEventListener('mouseenter', () => {
      clearInterval(scrollInterval);
    });

    // Resume auto-scrolling when the user leaves the container
    container.addEventListener('mouseleave', () => {
      scrollInterval = setInterval(scroll, 50);
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    container.scrollLeft -= 100;
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    container.scrollLeft += 100;
  };

  return (
    <div id='portfolio'>
      <h1>TEAM MEMBERS</h1>
      <div className='horizontal-scroll-wrap'>
        <button className='leftRight-button' onClick={handleScrollLeft}><AiFillLeftCircle size={50}/></button>
        <div className='horizontal-scroll-container' ref={scrollContainerRef}>
          {contentItems.map((item, index) => (
            <button key={index} className='portfolio-button'>
              <PortrfolioBox image={item.image} title={item.title} />
            </button>
          ))}
        </div>
        <button className='leftRight-button' onClick={handleScrollRight}><AiFillRightCircle size={50}/></button>
      </div>
    </div>
  )
}

export default Portfolio;
