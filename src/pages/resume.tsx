import React from 'react';

import Layout from '../components/layout/Layout';
import Resume from '../components/resume/Resume';

const ResumePage = () => (
  <Layout>
    <div>
      <h2>resume</h2>
      <a
        href="https://drive.google.com/file/d/1_taDgRSpew6cpPCs6knNk7Mtn0v0qbXJ/view?usp=sharing"
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
