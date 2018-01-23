import React from 'react';
import { Element } from 'react-scroll';
import Nav from './Nav';
import Footer from './Footer';
import ShowProjectThumb from './ShowProjectThumb';

import phone_icon from '../img/phone.svg';
import email_icon from '../img/email.svg';

const Home = props => {
  return (
    <div>
      <Nav home={true} />
      <div className="header header--paralax">
        <div className="header__overlay" />
        <div className="header__inner container">
          <div className="header__content">
            <h1>
              I'm Frank Ruiz, a Frontend Developer from Southern California. I
              help businesses achieve their goals by converting concepts into
              code.
            </h1>
            <div className="header__work-line">
              <div className="header__vertical-line" />
              <h4>See My Work</h4>
            </div>
          </div>
        </div>
      </div>
      <Element name="work" className="work container">
        <div className="work__inner work__row">
          {props.projects.map(project => (
            <ShowProjectThumb key={project.id} {...project} />
          ))}
        </div>
      </Element>
      <Element name="about" className="about container">
        <div className="about__inner">
          <div className="about__left">
            <h2>About</h2>
            <p>
              Hey! Thanks for checking out my site. Currently I am a Frontend
              Developer at 530Medialab. My team and I build and maintain sites
              on a variety of platforms such as: Magento 1-2,
              Wordpress/WooCommerce, and Shopify. When I'm not at work or
              leaning a new skill I like to be active outdoors on a nice hike or
              pumping some iron at the gym!
            </p>
          </div>
          <div className="about__right">
            <div className="right__inner">
              <h2>Contact</h2>
              <p>
                Feel free to contact me below if you would like to discuss any
                opportunites.
              </p>
              <p>
                <a href="mailto:frank.ruiz.limon@gmail.com">
                  <span className="icon">
                    <img src={phone_icon} alt="Email" />
                  </span>{' '}
                  frank.ruiz.limon@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:19517337896">
                  <span className="icon">
                    <img src={email_icon} alt="phone" />
                  </span>{' '}
                  951-733-7896
                </a>
              </p>
            </div>
          </div>
        </div>
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
