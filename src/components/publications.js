import React from 'react';
import './publications.css';

const Publications = () => (
    <div className="publications-container">
        <h3>Eventbrite Engineering Blog</h3>
        <ul>
            <li>
                <a href="https://www.eventbrite.com/engineering/how-to-move-from-customer-support-to-engineering-in-5-steps/">
                    How to Move From Customer Support to Engineering in 5 Steps
                </a>
            </li>
            <li>
                <a href="https://www.eventbrite.com/engineering/the-best-way-to-hire-qa-engineers/">
                    What Is the Best Way to Hire QA Engineers?
                </a>
            </li>
        </ul>
        <h3>Personal Blog</h3>
        <ul>
            <li>
                <a href="https://saharbala.wixsite.com/sahar/saharlearnseverything">
                    Sahar Learns Everything
                </a>
            </li>
        </ul>
    </div>
);

export default Publications;
