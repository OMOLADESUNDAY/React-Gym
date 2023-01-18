import React from 'react'
import { Link } from 'react-router-dom';
import './downloadDemo.css'
import downloadFile from "../data/sundayinership.pdf";
import downloadImage1 from '../image/avatar1.jpg'
import downloadImage2 from '../image/avatar2.jpg'



const DownloadDemo = () => {
  return (
    <section className="downloadDemoApp_container">
      <article className="downloaddemo_firstarticle">
        <div className="downloaddemo_image_container">
          <img
            src={downloadImage1}
            className="downloaddemo_image"
            alt="downloadappimage"
          />
        </div>
        <div className="downloaddemo_text_container">
          <h2>Download Our App</h2>
          <p className="downloaddemo_text">
            get exclusive access to iconic instructor with immersive live and
            on-demand classes whereever you are, whenever you are ready.
            Unrivaled access to today's best-in-class brand. Sweat with us, ride
            with SoulCycle, recover with TB12,flow with PURE yogaPush your pace
            with precision run and meditate with Headstrong --All in one app
          </p>
          <a href={downloadFile} className="btn download-btn" download>
            Download App
          </a>
        </div>
      </article>
      <article className="downloaddemo_firstarticle inverse">
        <div className="downloaddemo_text_container">
          <h2>Get your Gear</h2>
          <p className="downloaddemo_text">
            get exclusive access to iconic instructor with immersive live and
            on-demand classes whereever you are, whenever you are ready.
            Unrivaled access to today's best-in-class brand. Sweat with us, ride
            with SoulCycle, recover with TB12,flow with PURE yogaPush your pace
            with precision run and meditate with Headstrong --All in one app
          </p>
          <Link to="/shop" className="btn download-btn">
            Shop Now
          </Link>
        </div>
        <div className="downloaddemo_image_container">
          <img
            src={downloadImage2}
            className="downloaddemo_image"
            alt="downloadappimage"
          />
        </div>
      </article>
    </section>
  );
}

export default DownloadDemo