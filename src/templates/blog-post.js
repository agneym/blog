import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Title, LinkList, Header } from './post-styles';
import Share from '../components/share';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import 'react-js-live/build/main.css';
import Subscribe from '../components/subscribe';
import AnimatedLink from '../utils/animated-link';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const author = this.props.data.site.siteMetadata.author;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={post.frontmatter.tags}
        />
        <Container>
          <Header>
            <Title>{post.frontmatter.title}</Title>
            <sub
              css={`
                color: rgba(0, 0, 0, 0.8);
              `}
            >
              <span>Posted on {post.frontmatter.date}</span>
            </sub>
          </Header>
          <MDXRenderer>{post.code.body}</MDXRenderer>
          <Share
            post={{
              title: post.frontmatter.title,
              excerpt: post.excerpt,
              author: author,
            }}
          />
          <LinkList>
            <li>
              {previous && (
                <AnimatedLink
                  to={previous.fields.slug}
                  rel="prev"
                  direction="rtl"
                >
                  ← {previous.frontmatter.title}
                </AnimatedLink>
              )}
            </li>
            <li>
              {next && (
                <AnimatedLink to={next.fields.slug} rel="next" direction="ltr">
                  {next.frontmatter.title} →
                </AnimatedLink>
              )}
            </li>
          </LinkList>
        </Container>
        <Subscribe />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
