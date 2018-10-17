import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Projects from '../components/projects';

const ProjectsPage = () => (
    <Layout>
        <h2>projects</h2>
        <Projects />
    </Layout>
);

export default ProjectsPage;
