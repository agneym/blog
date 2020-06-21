import React from 'react';
import styled from 'styled-components';
import { Heart } from 'react-feather';

import NumberStat from './number-stat';

const Title = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-top: 0;
`;

const Container = styled.div`
  margin: 1rem 0;
  padding: 2rem 1rem;
  border-top: 0.1rem solid ${props => props.theme.colors.border};
  border-bottom: 0.1rem solid ${props => props.theme.colors.border};
`;

const AuthorImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  flex: none;
  vertical-align: middle;
`;

function WebMentions({ data }) {
  const likes = data.edges.filter(({ node }) => node.wmProperty === 'like-of');
  const likeAuthors = likes.map(
    ({ node }) => node.author && { wmId: node.wmId, ...node.author }
  );
  return (
    <Container>
      <Title>WebMentions</Title>
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        <NumberStat icon={Heart}>{likes.length} Likes</NumberStat>
        <div
          css={`
            margin-left: 2rem;
          `}
        >
          {likeAuthors.map(author => (
            <AuthorImage
              src={author.photo}
              alt={author.name}
              key={author.name}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default WebMentions;
