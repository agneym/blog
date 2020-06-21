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
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: contain;
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
        `}
      >
        <NumberStat icon={Heart}>{likes.length} Likes</NumberStat>
        <div>
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
