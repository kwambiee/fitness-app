import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./stylesheet/slideshow.css";

const SlideShow = () => {
  const zoomOutProperties = {
    duration: 2500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  const images = [
    "/assets/workout-1.jpg",
    "/assets/workout-2.jpg",
    "/assets/workout-3.jpg",
    "/assets/workout-4.jpg",
    "/assets/workout-5.jpg",
  ];

  return (
    <div className='slide-container'>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;
