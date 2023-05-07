import React from 'react';

import styled from '@emotion/styled';
import type { HeadFC } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import { css, Global } from '@emotion/react';

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300');
  body {
    margin: 0;
  }
  html {
    font-family: Raleway, sans-serif;
  }
  p {
    font-weight: 200;
    font-size: 1.1em;
  }
  h2 {
    font-weight: 300;
    font-size: 2em;
  }
  a {
    color: #05aeb2;
    font-weight: 300;
  }
  span {
    font-weight: 200;
    font-size: 1.1em;
  }
  h4 {
    font-size: 1.2em;
    text-decoration: underline;
  }
  h5 {
    font-weight: 200;
    font-size: 1.1em;
  }
  li {
    font-weight: 100;
    line-height: 1.6;
  }
`;

const BaseContent = css`
  margin: 0 auto;
  padding-top: 0;
`;

const FullWidthContent = styled.div`
  ${BaseContent}
`;

const Content = styled.div`
  ${BaseContent}
  max-width: 900px;
  padding-left: 20px;
  padding-right: 20px;
`;

interface Props {
  children: React.ReactNode;
  isFullWidth?: boolean;
}

const Layout = ({ children, isFullWidth }: Props) => (
  <>
    <Global styles={GlobalStyles} />
    <Header />
    {isFullWidth ? (
      <FullWidthContent>{children}</FullWidthContent>
    ) : (
      <Content>{children}</Content>
    )}
    <Footer />
  </>
);

export const Head: HeadFC = () => (
  <>
    <title>Sahar Bala - Software Engineer</title>
    <meta
      name="description"
      content="Sahar Bala is a Seattle based Software Engineer"
    />
  </>
);

export default Layout;
