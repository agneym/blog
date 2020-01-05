import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import media from '../utils/media';
import GlobalStyles from '../utils/global';

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
