import "./sliderStyle.css";
import imagen1 from "./slider1.jpg";
import imagen2 from "./slider2.jpg";
import imagen3 from "./slider3.jpg";
import { useEffect, useState } from "react";

const Slider = () => {
  const images = [
    { slider: imagen1, id: 1 },
    { slider: imagen2, id: 2 },
    { slider: imagen3, id: 3 },
  ];

  const [slideIndex, setSlideIndex] = useState(1);
  const [sliderTime, setSliderTime] = useState(5000);
  const moveDot = (index) => {
    setSlideIndex(index);
    setSliderTime(5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex === images.length
        ? setSlideIndex(1)
        : setSlideIndex(slideIndex + 1);
    }, sliderTime);
    return () => clearInterval(interval);
  }, [slideIndex, sliderTime, images.length]);

  return (
    <>
      <div className="sliderContainer">
        <div className="slider">
          <ul>
            {images.map((image, index) => {
              return (
                <li
                  key={image.id}
                  className={
                    slideIndex === index + 1 ? "slide active-anim" : "slide"
                  }
                >
                  <img
                    src={image.slider}
                    alt="Jenny Panichi"
                    className="logoImg"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
