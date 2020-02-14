import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Title, LinkList, Header } from './post-styles';
import Share from '../components/share';
import Subscribe from '../components/subscribe';
import AnimatedLink from '../utils/animated-link';
import 'react-js-live/build/main.css';
import CodeViewer from '../components/code-viewer';
import FixedMessage from '../components/fixed-message';
import Coffee from '../components/Coffee';

const components = {
  pre: props => <pre {...props} />,
  code: CodeViewer,
};

function BlogPostTemplate({ data, pageContext, location, children }) {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author;
  const { previous, next } = pageContext;
  const {
    frontmatter: { title, ogImage, tags, date },
  } = post;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={title}
        description={post.excerpt}
        keywords={tags}
        filename={ogImage ? ogImage.filename : null}
        date={date}
        type="post"
      />
      <FixedMessage />
      <Container>
        <Header>
          <Title>{title}</Title>
          <sub
            css={`
              color: rgba(0, 0, 0, 0.8);
            `}
          >
            <span>Posted on {date}</span>
          </sub>
        </Header>
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
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
      <Coffee />
      <Subscribe />
    </Layout>
  );
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
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        ogImage {
          filename
        }
      }
    }
  }
`;
