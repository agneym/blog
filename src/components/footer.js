import React from 'react';
import styled, { keyframes } from 'styled-components';

import media from '../utils/media';
import AnimatedLink from '../utils/animated-link';

const Container = styled.footer`
  ${props => props.theme.content.width};
  padding: 2rem 0.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    width: 100%;
    padding: 1rem 1.5rem;
  `}
`;

const ExternalLink = styled(AnimatedLink).attrs(props => ({
  target: '_blank',
  rel: `noopener noreferrer ${props.rel || ''}`,
}))``;

const LinkContainer = styled.p`
  margin: 0.8rem 0;
  display: block;

  ${ExternalLink} {
    margin: 0 1rem;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const animateGradient = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const MainWebsite = styled.p`
  font-size: 2.8rem;
  margin: 0;
  font-weight: bolder;
  background-image: linear-gradient(45deg, #05eeb2, #0552ee);
  background-size: 100%;
  background-size: 400% 400%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  animation: ${animateGradient} 8s ease infinite;

  ${media.phone`
    font-size: 2.2rem;
  `}
`;

function Footer() {
  return (
    <Container>
      <ExternalLink className="h-card" href="https://agney.dev" as="a" rel="me">
        <MainWebsite>agney.dev</MainWebsite>
      </ExternalLink>
      <div
        css={`
          text-align: right;
        `}
      >
        <p
          css={`
            margin-bottom: 0.6rem;
          `}
        >
          Connect with me
        </p>
        <LinkContainer>
          <ExternalLink
            direction="ltr"
            as="a"
            rel="me"
            href="https://twitter.com/agneymenon"
          >
            Twitter
          </ExternalLink>
          <ExternalLink direction="ltr" as="a" href="https://medium.com/@agney">
            Medium
          </ExternalLink>
          <ExternalLink
            direction="ltr"
            as="a"
            href="https://dev.to/boywithsilverwings"
          >
            Dev.to
          </ExternalLink>
        </LinkContainer>
        <LinkContainer>
          <ExternalLink direction="ltr" to="/rss.xml">
            RSS
          </ExternalLink>
          <ExternalLink
            rel="me"
            direction="ltr"
            as="a"
            href="https://github.com/agneym"
          >
            Github
          </ExternalLink>
          <ExternalLink
            direction="ltr"
            as="a"
            href="https://stackoverflow.com/users/4374566/agney"
          >
            StackOverflow
          </ExternalLink>
        </LinkContainer>
      </div>
    </Container>
  );
}

export default Footer;
