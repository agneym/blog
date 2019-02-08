import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './post';
import media from '../utils/media';

const Title = styled.h3`
  font-weight: 400;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  margin: 6rem 0 0;
  text-transform: uppercase;

  ${media.phone`
    margin: 3rem 0 0;
  `}
`;

class PostsSection extends Component {
  render() {
    const { title, posts } = this.props;
    return (
      <section>
        <Title>{title}</Title>
        {posts.map(({ node }) => {
          return <Post key={node.id} node={node} />;
        })}
      </section>
    );
  }
}

PostsSection.defaultProps = {
  title: '',
  posts: [],
};

PostsSection.propTypes = {
  title: PropTypes.string,
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
