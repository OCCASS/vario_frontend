import React, {useState} from 'react';
import styles from "./Slider.module.scss"

const Slider = ({images, currentSlide, setCurrentSlide}) => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => prev === images.length - 1 ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? images.length - 1 : prev - 1)
  }

  const getSlideStyles = (index) => {
    const indexDiff = Math.abs(currentSlide - index)

    if (index < currentSlide) {
      return {left: 0, transform: `translate(${-100 * indexDiff - 50}%, 0)`}
    } else if (index > currentSlide) {
      return {left: 0, transform: `translate(${100 * indexDiff + 50}%, 0)`}
    } else {
      return {left: "50%", transform: "translate(-50%, 0)"}
    }
  }

  const onTouchEnd = () => {
    if (touchStart - touchEnd > 150) nextSlide()
    if (touchStart - touchEnd < -150) prevSlide()
  }

  return (
    <div className={styles.slider}
         onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
         onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
         onTouchEnd={onTouchEnd}
    >
      <div className={styles.slider__button_left} onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </svg>
      </div>
      <div className={styles.slider__button_right} onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
      </div>
      {
        images.map((value, index) =>
          <img src={value} key={index} alt={value} style={getSlideStyles(index)} className={styles.slider__item}/>)
      }
    </div>
  );
};

export default Slider;
