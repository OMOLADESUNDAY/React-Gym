import React from 'react'
import { Link } from 'react-router-dom'
import downloadImage from '../image/gym-girl4.jpg'
import downloadImage2 from "../image/gym-guy5.jpg";
import { featuresData,testimoniesData } from '../data/data'
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from "react-icons/io";
import './home.css'

const Home = () => {
  return (
    <div>
      <div className="home__container">
        <h2>TODAY IS YOUR DAY</h2>
        <Link to="/register" className="btn join-btn">
          Join Now
        </Link>
      </div>
      <h2 className="feature__text">Our Features</h2>
      <div className="feature__cards">
        {featuresData.map((feature) => {
          const { id, name, image, description } = feature;
          return (
            <div key={id} className="feature__card">
              <div className="feature__img_container">
                <img className="feature__img" src={image} alt={name} />
              </div>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
      <section className="container show_feature_btn_container">
        <Link to="/features" className="btn show_feature_btn">See All Features</Link>
      </section>
      <section>
        <article className="download_article">
          <img
            className="downloadapp_img"
            src={downloadImage}
            alt="downlaodapp"
          />
          <div>
            <h2>Download Our App</h2>
            <p>
              get exclusive access to iconic instructor with immersive live and
              on-demand classes whereever you are, whenever you are ready.
              Unrivaled access to today's best-in-class brand. Sweat with us,
              ride with SoulCycle, recover with TB12,flow with PURE yogaPush
              your pace with precision run and meditate with Headstrong --All in
              one app
            </p>
            <a href={downloadImage} download className="btn download_btn">
              Download App
            </a>
          </div>
        </article>
        <article className="download_article">
          <div>
            <h2>Get Your Gear</h2>
            <p>
              get exclusive access to iconic instructor with immersive live and
              on-demand classes whereever you are, whenever you are ready.
              Unrivaled access to today's best-in-class brand. Sweat with us,
              ride with SoulCycle, recover with TB12,flow with PURE yogaPush
              your pace with precision run and meditate with Headstrong --All in
              one app
            </p>
            <Link to="/shop" className="btn download_btn_2">
              Shop Now
            </Link>
          </div>
          <img
            className="downloadapp_img"
            src={downloadImage2}
            alt="downlaodapp"
          />
        </article>
      </section>
      <section className=" testimony_section">
        <button className="left_scroll_btn">
          <IoIosArrowDropleftCircle className="scroll__btn" />
        </button>

        {testimoniesData.map((singleTestimony) => {
          const { id, name, image, testimony } = singleTestimony;
          return (
            <article key={id} className="testimony__article">
              <img src={image} className="testimony__image" alt={name} />
              <p>{testimony}</p>
              <small>{name}</small>
            </article>
          );
        })}
        <button className="right_scroll_btn">
          <IoIosArrowDroprightCircle className="scroll__btn" />
        </button>
      </section>
    </div>
  );
}

export default Home
