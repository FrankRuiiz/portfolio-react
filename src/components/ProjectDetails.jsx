import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

const ProjectDetails = props => {
  const project = props.project;
  return (
    <div>
      <Nav />

      <div className="project-detail">
        <div className="container project-detail__inner">
          <p>
            <Link to="/">&laquo; Back</Link>
          </p>
          <h1>{project.title}</h1>
          <div className="project-detail__content">
            <div className="project-detail__image">
              <img
                src={`${process.env.PUBLIC_URL}/img/${project.image}`}
                alt={project.title}
              />
            </div>
            <div className="project-detail__text">
              <h3>Summary</h3>
              <p>{project.description}</p>
              <h3>Tech Used</h3>
              <ul>{project.technologies.map(tech => <li>{tech}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
