import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ResumePage = () => (
    <Layout>
        <h2>This is the resume page</h2>
        <p>PDF viewer maybe?</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default ResumePage;
