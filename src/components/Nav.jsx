import React from 'react';

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <div className="nav shadow">
        <div className="container nav__inner">
          <ul className="nav__column nav__logo">
            <li>Frank R.</li>
          </ul>
          <ul className="nav__column nav__scroll">
            <li>
              <a href="#" className="link-underline">
                <span className="link-underline__label">Work</span>
              </a>
            </li>
            <li>
              <a href="#" className="link-underline">
                <span className="link-underline__label">About</span>
              </a>
            </li>
          </ul>
          <ul className="nav__column nav__resume">
            <li className="menu__item">
              <a href="" className="link-button">
                <span className="link-button__label">Résumé</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
