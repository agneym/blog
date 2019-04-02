import React from 'react';
import styled from 'styled-components';

import media from '../../utils/media';
import NotificationsForm from './notifications-form';
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
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  ${media.phone`
    font-size: 1.8rem;
  `}
`;

const Splitter = styled.div`
  margin: 1rem;
  width: 80%;

  ${media.phone`
    width: 95%;
  `}
`;

const Seperator = styled.p`
  width: 60%;
  font-size: small;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  line-height: 0.1em;
  margin: 5rem auto;
  color: rgba(0, 0, 0, 0.8);

  span {
    background: #fff;
    padding: 0 1rem;
  }
`;

function Subscribe() {
  return (
    <Container>
      <Title>Join the Squad</Title>
      <sub>No Spam. Just JavaScript.</sub>
      <sub>Unsubscribe anytime you want.</sub>
      <Splitter>
        <NotificationsForm />
        <Seperator>
          <span>OR</span>
        </Seperator>
        <NewsLetterForm />
      </Splitter>
    </Container>
  );
}

export default Subscribe;
