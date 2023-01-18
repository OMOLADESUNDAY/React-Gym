import React from 'react'
import { Link } from 'react-router-dom'
import {featuresData } from '../data/data'
import './featureDemo.css'
const FeatureDemo = () => {
  return (
    <section className='featuredemo_container'>
        <h2 className='feature_text'>Our Features</h2>
        <article className='featureDemo_article'>
            {featuresData.map((singlefeature)=>{
                const {id,image,name,description}=singlefeature
                return (
                  <Link key={id} className="featureDemoCard">
                    <img
                      className="featureDemoCard_image"
                      src={image}
                      alt={name}
                    />
                    <div className='description_container'>
                      <h2 className="featureDemoCard_name">{name}</h2>
                      <p className="featureDemoCard_description">
                        {description}
                      </p>
                    </div>
                  </Link>
                );
            })}
        </article>
        <Link className='btn feature-btn'>See All Features</Link>
    </section>
  )
}

export default FeatureDemo