import React from 'react';
import styled from 'styled-components';

import media from '../../utils/media';
import NewsLetterForm from './newsletter-form';

const Container = styled.div`
  margin: 2rem 0 4rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.phone`
    padding: 1rem;
  `}
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  ${media.phone`
    font-size: 1.8rem;
  `}
`;

const Subtitle = styled.sub`
  text-align: center;
  line-height: 1.5;
`;

function Subscribe() {
  return (
    <Container>
      <Title id="newsletter-title">Join the Squad</Title>
      <Subtitle>No Spam. Just JavaScript.</Subtitle>
      <Subtitle>
        Get a digest of information every month. <br />
        Unsubscribe anytime you want.
      </Subtitle>
      <NewsLetterForm />
    </Container>
  );
}

export default Subscribe;
