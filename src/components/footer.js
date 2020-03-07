import React from 'react';
import styled from 'styled-components';
import AnimatedLink from '../utils/animated-link';

const Container = styled.footer`
  margin-top: 2rem auto 0;
  padding: 2rem 0.5rem;
  width: ${props => props.theme.content.width};
  display: flex;
  justify-content: space-between;
`;

const ExternalLink = styled(AnimatedLink).attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
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

function Footer() {
  return (
    <Container>
      <ExternalLink
        href="https://agney.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>agney.dev</p>
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
          <ExternalLink direction="ltr" as="a" href="https://github.com/agneym">
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
        <LinkContainer>
          <ExternalLink
            direction="ltr"
            as="a"
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
      </div>
    </Container>
  );
}

export default Footer;
