import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  filename,
  type,
  date,
}) {
  const data = useStaticQuery(detailsQuery);
  const metaDescription =
    description ||
    `${data.site.siteMetadata.title} - ${data.site.siteMetadata.description}`;
  const [url, setUrl] = useState('');
  useEffect(() => {
    if (typeof window !== `undefined`) {
      setUrl(window.location.href);
    }
  }, []);

  const featuredImage =
    data.site.siteMetadata.siteUrl +
    (filename ? `/post-images/${filename}.jpg` : '/icons/icon-512x512.png');

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: url,
      name: title,
    },
  ];
  if (type === 'post') {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image: featuredImage,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'TechArticle',
        url,
        name: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: featuredImage,
        },
        description,
        author: {
          '@type': 'Person',
          name: data.site.siteMetadata.author,
        },
        datePublished: date,
        publisher: {
          '@type': 'Organization',
          name: data.site.siteMetadata.title,
          logo: {
            '@type': 'ImageObject',
            url: '/icons/icon-512x512.png',
          },
          url: url || 'https://blog.agney.dev',
        },
        dateModified: date,
      }
    );
  }
  return (
    <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta
        name="google-site-verification"
        content="z5vpqyTgwWRPzObs2wou_QT2kjtk2a-xF-27nX3Umc4"
      />

      <meta
        name="og:title"
        content={`${title} - ${data.site.siteMetadata.title}`}
      />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={featuredImage} />

      <meta
        name="twitter:title"
        content={`${title} - ${data.site.siteMetadata.title}`}
      />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:creator"
        content={data.site.siteMetadata.social.twitter}
      />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  filename: null,
  type: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  filename: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuerys {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`;
