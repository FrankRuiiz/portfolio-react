import React from 'react';
import linkedIn_icon from '../img/linkedin-logo.svg';
import github_icon from '../img/github-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <span>&copy; Frank Ruiz - 2019</span>
        </div>
        <div className="footer__right">
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/frankruiiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn_icon} alt="Linked In" />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://github.com/FrankRuiiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_icon} alt="Github" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
