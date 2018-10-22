import React from 'react';

import Layout from '../components/layout';
import Resume from '../components/resume';

const ResumePage = () => (
    <Layout>
        <div>
            <h2>resume</h2>
            <a
                href="https://drive.google.com/file/d/1LdszIwOS9gwqFpQbCFjFLzQBm6yvebCg/view?usp=sharing"
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
