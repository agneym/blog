import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostsSection from '../components/posts-section';
import Subscribe from '../components/subscribe';

function BlogIndex({ data, pageContext }) {
  const posts = data.allMdx.edges;
  const { currentPage, numPages } = pageContext;

  return (
    <Layout>
      <SEO
        title="All Posts - A personal blog by Agney Menon"
        keywords={[
          `mindless`,
          `blog`,
          `javascript`,
          `agney`,
          `boy with silver wings`,
        ]}
      />
      <main>
        <Bio />
        <PostsSection
          title={`Latest Posts`}
          posts={posts}
          currentPage={currentPage}
          numPages={numPages}
        />
        <Subscribe />
      </main>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
