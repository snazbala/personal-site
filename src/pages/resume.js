import React from 'react';

import Layout from '../components/layout';
import Resume from '../components/resume';

const ResumePage = () => (
    <Layout>
        <div>
            <h2>resume</h2>
            <a
                href="https://drive.google.com/file/d/1_u3jgQPMMLBNG8Z1wean4YyTOBo2PINF/view?usp=sharing"
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
