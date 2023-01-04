import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section>
        <article>
          <h5><Link to='/about'>About us</Link></h5>
          <p>Our staff, Trainer and Group exercise instructor are commited
           to the fearing of our members a great fitness experience.We have 30+ years of Experienced</p>
          <div><Link to='/'>logo</Link></div>
        </article>
    </section>
  );
}

export default Footer