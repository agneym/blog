import React from 'react';
import styled from 'styled-components';

import media from '../../utils/media';
import NewsLetterForm from './newsletter-form';
import StyledLink from '../../utils/styled-link';

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

const Text = styled.p`
  text-align: center;
  max-width: 40ch;
  line-height: 1.4;
  margin-bottom: 0;

  ${StyledLink} {
    text-decoration: underline;
  }
`;

function Subscribe() {
  return (
    <Container>
      <Title id="newsletter-title">Join the Squad</Title>
      <Subtitle>No Spam. Just JavaScript.</Subtitle>
      <Text>
        <span>
          I sent out a newsletter every month containing information that I find
          notable and useful.{' '}
        </span>
        <span>
          {' '}
          Unsubscribe any time you want & Feel free to browse{' '}
          <StyledLink
            as="a"
            href="https://buttondown.email/archives"
            target="_blank"
            rel="noopener noreferrer"
          >
            Archives
          </StyledLink>
        </span>
      </Text>
      <NewsLetterForm />
    </Container>
  );
}

export default Subscribe;
