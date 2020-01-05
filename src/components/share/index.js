import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  TwitterIcon,
  TwitterShareButton,
  TelegramIcon,
  TelegramShareButton,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  PocketIcon,
  PocketShareButton,
} from 'react-share';
import styled, { keyframes, css } from 'styled-components';
import useWebShare from 'react-use-web-share';

import ShareBtn from './share-btn';

const bounce = keyframes`
  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const Container = styled.div`
  margin: 1rem 0 5rem;
  ${props =>
    props.visible &&
    css`
      animation: ${bounce} 800ms ease-in-out 2;
    `}
  transform-origin: center bottom;

  .social-icon {
    display: inline-block;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

const Share = ({ post }) => {
  const { loading, isSupported, share } = useWebShare();
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');
  const containerRef = useRef();
  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);
  useEffect(() => {
    const containerEl = containerRef.current;
    let observer;
    if (containerEl) {
      observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.unobserve(containerEl);
            }
          });
        },
        {
          threshold: 0.8,
        }
      );
      observer.observe(containerEl);
    }
    return () => {
      if (observer) {
        observer.unobserve(containerEl);
      }
    };
  }, []);
  return (
    <Container ref={containerRef} visible={visible}>
      <p
        css={`
          font-size: 1.4rem;
          color: rgb(0, 0, 0);
        `}
      >
        Share if you liked it:
      </p>
      {!loading && !isSupported ? (
        <>
          <TwitterShareButton
            url={url}
            title={`Read ${post.title}`}
            via={`agneymenon`}
            className="social-icon"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <TelegramShareButton
            title={`Read ${post.title} by ${post.author}`}
            url={url}
            className="social-icon"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <EmailShareButton
            url={url}
            subject={`Read ${post.title} by ${post.author}`}
            body={`${post.excerpt}
                Read more at ${url}
              `}
            className="social-icon"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
          <RedditShareButton url={url} className="social-icon">
            <RedditIcon size={32} round />
          </RedditShareButton>
          <PocketShareButton>
            <PocketIcon size={32} round />
          </PocketShareButton>
        </>
      ) : (
        <ShareBtn shareFn={share} />
      )}
    </Container>
  );
};

Share.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Share;
