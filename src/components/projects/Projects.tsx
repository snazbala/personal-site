import React from 'react';

const Projects = () => (
  <div style={{ paddingBottom: '40px' }}>
    <h3>
      <a href="https://github.com/snazbala/personal-site">Personal site</a>{' '}
      <ul>
        <li>this one!</li>
      </ul>
    </h3>
    <h3>
      <a href="https://github.com/eventbrite/britecharts">Britecharts</a>
      <ul>
        <li> Open source contributor</li>
      </ul>
    </h3>
    <h3>
      <a href="https://lease-estimate.netlify.com/">
        Full stack lease estimate app
      </a>
      <ul>
        <li>Returns a monthly rent estimate for qualified home owners.</li>
        <li>Provides an Admin view to see submissions and estimates.</li>
        <li>
          <a href="https://github.com/snazbala/rental-estimate">
            Source (frontend)
          </a>
        </li>
        <li>
          <a href="https://github.com/snazbala/rental-estimate-api">
            Source (backend)
          </a>
        </li>
      </ul>
    </h3>
  </div>
);

export default Projects;
