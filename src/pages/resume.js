import React from 'react';

import Layout from '../components/layout';
import Resume from '../components/resume';

const ResumePage = () => (
    <Layout>
        <div>
            <h2>resume</h2>
            <a
                href="https://drive.google.com/file/d/1Qkqak4BsuFRo8gL3LrChS36wQnJ8LHqTck3glzsosjM/view"
                target="_blank"
                rel="noopener noreferrer"
            >
                Download PDF Resume
            </a>
        </div>
        <Resume />
    </Layout>
);

export default ResumePage;
