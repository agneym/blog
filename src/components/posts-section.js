import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './post';
import media from '../utils/media';
import AnimatedLink from '../utils/animated-link';

const Title = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;
  margin: 6rem 0 0;
  text-transform: uppercase;

  ${media.phone`
    margin: 3rem 0 0;
  `}
`;

const BottomNav = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;

const PostsSection = props => {
  const { title, posts, currentPage, numPages } = props;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <section>
      <Title>{title}</Title>
      {posts.map(({ node }) => {
        return <Post key={node.id} node={node} />;
      })}
      <BottomNav>
        <li>
          {!isFirst && (
            <AnimatedLink to={`/${prevPage}`} rel="prev" direction="rtl">
              ← New Posts
            </AnimatedLink>
          )}
        </li>
        <li>
          {!isLast && (
            <AnimatedLink to={`/${nextPage}`} rel="next" direction="ltr">
              Older Posts →
            </AnimatedLink>
          )}
        </li>
      </BottomNav>
    </section>
  );
};

PostsSection.defaultProps = {
  title: '',
  posts: [],
  currentPage: 1,
  numPages: 1,
};

PostsSection.propTypes = {
  title: PropTypes.string,
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
        excerpt: PropTypes.string.isRequired,
      }),
    })
  ),
};

export default PostsSection;
