import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ExperiencePage = () => (
    <Layout>
        <h2>This is the experience page</h2>
        <p>Will have some cards to both resume and story</p>
        <Link to="/resume/">Resume</Link>
        <Link to="/story/">Story</Link>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default ExperiencePage;
