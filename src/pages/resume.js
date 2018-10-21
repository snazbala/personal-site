import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Resume from '../components/resume';

const ResumePage = () => (
    <Layout>
        <div>
            <h2>resume</h2>
            <a href="../documents/SaharBalaResume_2018.pdf">
                Download PDF Resume
            </a>
        </div>
        <Resume />
    </Layout>
);

export default ResumePage;
