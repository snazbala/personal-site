import React from 'react';
import { Link } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout isFullWidth={true}>
        <Hero />
    </Layout>
);

export default IndexPage;
