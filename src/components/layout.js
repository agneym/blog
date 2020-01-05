import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import media from '../utils/media';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
      local('Roboto-Light'), local('DroidSans'), local('Tahoma');
  }

  :root {
    font-size: 10px;
  }

  body {
    font-family: 'system';
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.8);
    min-height: 100vh;
    position: relative;
    font-size: 1.6rem;
  }

  ::selection {
    background-color: #08B2E3;
    color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Aleo', serif;
  }

  h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection {
    background-color: #DA344D;
  }
  
  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 1.6rem;
  }
  
  code {
    font-family: Menlo,Monaco,"Courier New",Courier,monospace;
    word-break: break-word;
  }

  pre code {
    word-break: normal;
  }
`;

const Content = styled.div`
  width: 60%;
  max-width: 728px;
  margin: 0 auto;

  ${media.tablet`
    width: 85%;
  `}
`;

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <Content>{children}</Content>
      <GlobalStyles />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
