import React from 'react';

const Hero = () => {
  return (
    <div className="header header--paralax">
      <div className="header__overlay" />
      <div className="header__inner container">
        <div className="header__content">
          <h1>
            I'm Frank Ruiz, a Frontend Developer from Southern California. I
            help businesses achieveh their goals by converting concepts into
            code.
          </h1>
          <div className="header__work-line">
            <div className="header__vertical-line" />
            <h4>See My Work</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
