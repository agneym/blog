import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import useDarkMode from 'use-dark-mode';

import Header from './header';
import GlobalStyles from '../utils/global';
import getTheme from '../utils/theme';
import media from '../utils/media';
import Footer from './footer';

const Content = styled.div`
  ${props => props.theme.content.width};

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
  const darkMode = useDarkMode(false);
  const theme = getTheme(darkMode.value ? 'dark' : 'light');
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header title={data.site.siteMetadata.title} mode={darkMode} />
        <Content>{children}</Content>
        <Footer />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
