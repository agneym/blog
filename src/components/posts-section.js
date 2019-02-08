import React from 'react';
import PropTypes from 'prop-types';

class PostsSection extends Component {
  render() {
    return <p>Posts Section</p>;
  }
}

PostsSection.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      excerpt: PropTypes.string.isRequired,
    })
  ),
};

export default PostsSection;
