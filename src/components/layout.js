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
                  'Sahar Bala is a Seattle based Software Engineer currently working at Convoy.',
              },
              { name: 'keywords', content: 'sahar bala, software engineer' },
            ]}
          >
            <html lang="en" />
            <script async src="https://www.google-analytics.com/analytics.js" />
            <script>
              {`
                window.ga=window.ga||function()
                {(ga.q = ga.q || []).push(arguments)}
                ;ga.l=+new Date; ga('create',
                'UA-31671209-2', 'auto'); ga('send',
                'pageview');
              `}
            </script>
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
