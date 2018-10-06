import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ArtPage = () => (
    <Layout>
        <h2>This is the art page</h2>
        <p>Will have an instagram feed for painthearted</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default ArtPage;
