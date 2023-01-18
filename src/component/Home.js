import React from 'react'
// import { Link } from 'react-router-dom'
import downloadImage from '../image/gym-girl4.jpg'
import downloadImage2 from "../image/gym-guy5.jpg";
import downloadImage3 from "../image/gym-girl3.jpg";
import downloadImage4 from "../image/gym-guy2.jpg";
import downloadImage5 from "../image/gym-guy1.jpg";
import './home.css'
import ImageSlider from './ImageSlider';
import FeatureDemo from './FeatureDemo';
import DownloadDemo from './DownloadDemo';
import TestiomonyDemo from './TestiomonyDemo';


const slides = [
  { id: 1, title: "one", image: downloadImage },
  { id: 2, title: "two", image: downloadImage2 },
  { id: 3, title: "three", image: downloadImage3 },
  { id: 4, title: "two", image: downloadImage4 },
  { id: 5, title: "three", image: downloadImage5 },
];

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="slider_container">
          <ImageSlider slide={slides} />
        </div>
        <FeatureDemo />
        <DownloadDemo />
      </div>
      <TestiomonyDemo />
    </div>
  );
}

export default Home
