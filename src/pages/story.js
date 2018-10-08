import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Story from '../components/story';

const StoryPage = () => (
    <Layout>
        <h2>my story</h2>
        <Story />
    </Layout>
);

export default StoryPage;
