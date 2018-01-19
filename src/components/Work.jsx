import React from 'react';

const Work = () => {
  return (
    <div className="work container">
      <div className="work__inner work__row">
        <div className="work__column">
          <figure className="work__column-overlay shadow">
            <img src="http://via.placeholder.com/350x250" alt="img" />
            <figcaption>
              <h2>
                Example <span>Project</span>
              </h2>
              <a href="#">View More</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Work;
