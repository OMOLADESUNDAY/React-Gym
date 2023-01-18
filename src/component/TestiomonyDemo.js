import React from 'react'
import { testimoniesData } from '../data/data'
import './testimonydemo.css'
const TestiomonyDemo = () => {
  return (
    <div className='testimony_container'>
      <h2 className='testimonial'>Testimonials</h2>
      <section className="testimony_inner_container">
        {testimoniesData.map((singleTestimony) => {
          const { id, image, name, testimony } = singleTestimony;
          return (
            <article key={id} className="testimony_article">
              <div className="image_container_testimony">
                <img src={image} alt={name} className="image_testimony" />
              </div>
              <p className="testimony_text">{testimony}</p>
              <small className="testimony_small">{name}</small>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default TestiomonyDemo