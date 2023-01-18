import React from 'react'
import { Link } from 'react-router-dom';
import { BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import './footer.css'

const date=new Date()
const thisytear = date.getFullYear()
const Footer = () => {
  return (
    <div>
      <section className="container footer__section">
        <article >
          <h5>About us</h5>
          <p className="text-light about_text">
            Our staff, Trainer and Group exercise instructor are commited to the
            fearing of our members a great fitness experience.We have 30+ years
            of Experienced
          </p>
          <div>
            <Link to="/" className="text-light">
              logo
            </Link>
          </div>
        </article>
        <article className="sitemap">
          <h5> Sitemap</h5>
          <p>
            <Link className="sitemap_link text-light">Shop</Link>
          </p>
          <p>
            <Link className="sitemap_link text-light">personal Training</Link>
          </p>
          <p>
            <Link className="sitemap_link text-light">Features</Link>
          </p>
          <p>
            <Link className="sitemap_link text-light">Clubs</Link>
          </p>
          <p>
            <Link className="sitemap_link text-light">Gallery</Link>
          </p>
        </article>
        <article className="contact_article">
          <h5>Contact us</h5>
          <div className="location_container">
            <GoLocation className="social_icon text-light" />
            <p className="text-light">North gate Akure</p>
          </div>
          <div className="location_container">
            <BsTelephone className="social_icon text-light" />
            <p className="text-light">+2347069258526</p>
          </div>
          <p className="follow_text text-light">Follow Us On</p>
          <div className="location_container ">
            <Link to="https://www.facebook.com/omoladesunday.15">
              <AiFillFacebook className="social_icon text-light" />
            </Link>
            <Link>
              <BsInstagram className="social_icon text-light" />
            </Link>
            <Link>
              <BsTwitter className="social_icon text-light" />
            </Link>
            <Link>
              <BsWhatsapp className="social_icon text-light" />
            </Link>
          </div>
        </article>
      </section>
      <div className="container copyright">
        <small>copyright {thisytear}.All right Reserved</small>
      </div>
    </div>
  );
}

export default Footer