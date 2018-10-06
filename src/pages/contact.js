import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ContactPage = () => (
    <Layout>
        <h2>This is the contact page</h2>
        <p>Will have an email form</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default ContactPage;
