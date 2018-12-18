import React from 'react';
import './projects.css';

const Projects = () => (
    <div className="projects-container">
        <h3>
            <a href="https://github.com/snazbala/personal-site">
                Personal Site
            </a>{' '}
            <div className="personal-site">- this one!</div>
        </h3>
        <h3>
            <a href="https://github.com/eventbrite/britecharts">
                Open source contributor to Britecharts
            </a>
        </h3>
        <h3>
            <a href="http://sahar-currency-converter.herokuapp.com/">
                Tiny little currency converter with real time data
            </a>
            <span> (wip - note: 30 second delay to load from Heroku)</span>
        </h3>
    </div>
);

export default Projects;
