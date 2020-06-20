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
import CodeViewer from '../components/code-viewer';
import FixedMessage from '../components/fixed-message';
import Coffee from '../components/coffee';
import PlaygroundWrapper from '../components/playground-wrapper';

const components = {
  pre: props => <pre {...props} />,
  code: CodeViewer,
  Playground: PlaygroundWrapper,
};

function BlogPostTemplate({ data, pageContext, location }) {
  const post = data.mdx;
  const { title: siteTitle, author } = data.site.siteMetadata;
  const { previous, next, permalink } = pageContext;
  const {
    frontmatter: { title, ogImage, tags, date },
  } = post;
  console.log(data);

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
      <Container className="h-entry">
        <Header>
          <Title className="p-name">{title}</Title>
          <div
            css={`
              display: flex;
              justify-content: space-between;
            `}
          >
            <sub>
              <span className="dt-published">Posted on {date}</span>
            </sub>
            <sub className="u-url">{permalink}</sub>
          </div>
        </Header>
        <div className="e-content">
          <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>
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
  query BlogPostBySlug($slug: String!, $permalink: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
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
    allWebMentionEntry(filter: { wmTarget: { eq: $permalink } }) {
      edges {
        node {
          wmTarget
          wmSource
          wmProperty
          wmId
          type
          url
          likeOf
          author {
            url
            type
            photo
            name
          }
          content {
            text
          }
        }
      }
    }
  }
`;
