import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children, isFullWidth }) => {
  const wrapperStyle = isFullWidth ? 'wrapper' : 'wrapper wrapper--max-width';

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content:
                  'Sahar Bala is a San Francisco based software engineer currently working at Eventbrite.',
              },
              { name: 'keywords', content: 'sahar bala, software engineer' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header />
          <div className={wrapperStyle}>{children}</div>
          <Footer />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
