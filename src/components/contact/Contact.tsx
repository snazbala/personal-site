import styled from '@emotion/styled';
import React from 'react';

const ContactContainer = styled.div`
  padding-bottom: 40px;
`;

const Contact = () => (
  <ContactContainer>
    <h3>Let's chat!</h3>
    <a href="https://www.linkedin.com/in/saharbala/" target="_blank">
      Find me on LinkedIn
    </a>
    <p>
      Or, follow me on{' '}
      <a href="https://twitter.com/snazbala" target="_blank">
        Twitter
      </a>
      .
    </p>
  </ContactContainer>
);

export default Contact;
