import React, { Component } from 'react';
import { Link, scroll } from 'react-scroll';

class Nav extends Component {
  scrollTo() {
    scroll.scrollTo();
  }

  showNavLinks = props => {
    if (props.home) {
      return (
        <ul className="nav__column nav__scroll">
          <li>
            <Link
              to="work"
              offset={-100}
              smooth={true}
              duration={500}
              delay={250}
              className="link-underline"
            >
              <span className="link-underline__label">Work</span>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              offset={-100}
              smooth={true}
              duration={500}
              delay={250}
              className="link-underline"
            >
              <span className="link-underline__label">About</span>
            </Link>
          </li>
        </ul>
      );
    }
  };

  render() {
    return (
      <div className="nav__wrapper">
        <div className="nav shadow">
          <div className="container nav__inner">
            <ul className="nav__column nav__logo">
              <li>Frank R.</li>
            </ul>
            {this.showNavLinks(this.props)}
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
  }
}

export default Nav;
