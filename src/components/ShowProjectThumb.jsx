import React from 'react';
import { Link } from 'react-router-dom';

const ShowProjectThumb = props => {
  return (
    <div className="work__column">
      <figure className="work__column-overlay shadow">
        <img
          src={`${process.env.PUBLIC_URL}/img/${props.image}`}
          alt={`Image for ${props.title}`}
        />
        <figcaption>
          <h2>{props.title}</h2>
          <Link to={`/projects/${props.id}`}>View More</Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default ShowProjectThumb;
