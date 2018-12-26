import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
  text-align: center;
`;

const Smiley = styled.p`
  font-size: 10rem;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Smiley>🤦🏻‍♂️</Smiley>
      <h1>NOT FOUND</h1>
      <p>I have not added this page yet.</p>
      <p>
        <span>Ask me to add it &nbsp;</span>
        <span>
          <a
            href="https://twitter.com/agneymenon"
            target="_blank"
            rel="noopener noreferrer"
          >
            @agneymenon
          </a>
        </span>
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
