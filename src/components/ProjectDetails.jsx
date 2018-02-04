import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

class ProjectDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const project = this.props.project;
    return (
      <div>
        <Nav />

        <div className="project-detail">
          <div className="container project-detail__inner">
            <p>
              <Link className="link--back" to="/">
                Back
              </Link>
            </p>
            <h1>{project.title}</h1>
            <div className="project-detail__content">
              <div className="project-detail__image">
                <img
                  className="shadow"
                  src={`${process.env.PUBLIC_URL}/img/${project.image}`}
                  alt={project.title}
                />
              </div>
              <div className="project-detail__text">
                <h3>Summary</h3>
                <p>{project.description}</p>
                <h3>Tech Used</h3>
                <ul>
                  {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ProjectDetails;
