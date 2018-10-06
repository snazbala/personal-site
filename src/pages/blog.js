import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = () => (
    <Layout>
        <h2>This is the blog page</h2>
        <p>Will have a link to some posts</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default BlogPage;
