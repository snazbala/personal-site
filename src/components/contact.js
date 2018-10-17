import React from 'react';
import './contact.css';

const Contact = () => (
    <div className="contact-container">
        <h3>Let's chat!</h3>
        <p>For general inquiries: hello at saharbala.com.</p>
        <p>
            For recruiters:{' '}
            <a href="https://www.linkedin.com/in/saharbala/">LinkedIn</a>.
        </p>
        <p>
            Follow my cooking journey{' '}
            <a href="https://www.instagram.com/explore/tags/cookingforganbi/">
                #cookingforganbi
            </a>{' '}
            and some outdoor/travel adventures on Instagram:{' '}
            <a href="https://www.instagram.com/snazbala">@snazbala</a>.
        </p>
        <p>
            Or, follow me on <a href="https://twitter.com/snazbala">Twitter</a>.
        </p>
    </div>
);

export default Contact;
