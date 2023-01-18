import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

import './imageSlider.css'

const ImageSlider = ({slide}) => {
    const gotoPrevious=()=>{
      const isFirstSlide=currentIndex === 0;
      const newIndex=isFirstSlide ? slide.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
    }
    const gotoNext = () => {
         const isLastSlide = currentIndex === slide.length -1;
         const newIndex = isLastSlide ? 0 : currentIndex + 1;
         setCurrentIndex(newIndex);
    };
    const gotoSlide=(slideIndex)=>{
      setCurrentIndex(slideIndex)
    }
    const [currentIndex, setCurrentIndex]=useState(0)
    return (
      <div className="imageSlider">
        <div className="leftarrow" onClick={gotoPrevious}>
          <AiOutlineArrowLeft className="arrow" />
        </div>
        <div
          className="image_slide fade"
          style={{ backgroundImage: `url(${slide[currentIndex].image})` }}
        >
          <p className='slider_text'>TODAY IS YOUR DAY</p>
          <Link className='btn slider_btn' to='/shop'>shop now</Link>
        </div>
        <div className="rightarrow" onClick={gotoNext}>
          <AiOutlineArrowRight className="arrow" />
        </div>
        <div className='dot_container'>
        {slide.map((slidedot,slideIndex)=>{
          return (
            <div
              className="dots"
              key={slideIndex}
              onClick={() => gotoSlide(slideIndex)}
            >
              .
            </div>
          );
        })}
        </div>
      </div>
    );
}

export default ImageSlider