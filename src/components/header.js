import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DarkModeToggle from 'react-dark-mode-toggle';
import { Mail, Rss } from 'react-feather';

import StyledLink from '../utils/styled-link';
import media from '../utils/media';

const Container = styled.nav`
  border-bottom: 0.1rem solid ${props => props.theme.colors.border};
  padding: 2rem 0 1.4rem;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.theme.content.width};

  ${media.tablet`
    width: 100%;
    padding: 0 1.2rem;
  `}
`;

const TitleLink = styled(StyledLink)`
  ${media.tablet`

  `}
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0px;
  text-transform: uppercase;
  margin: 0;

  ${media.phone`
    text-align: center;
  `}
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const IconLink = styled.a`
  height: 2rem;
  color: ${props => props.theme.colors.textColor};
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${props => props.theme.colors.textColorHover};
  }
`;

const Header = ({ title, mode }) => {
  return (
    <Container>
      <InnerContainer>
        <TitleLink to={'/'} css={``}>
          <Title>{title}</Title>
        </TitleLink>
        <IconContainer>
          <IconLink
            href="#newsletter-title"
            title="Subscribe to Newsletter"
            aria-label="Subscribe to Newsletter"
          >
            <Mail />
          </IconLink>
          <IconLink
            href="https://blog.agney.dev/rss.xml"
            title="Subscribe via RSS"
            aria-label="Subscribe via RSS"
          >
            <Rss />
          </IconLink>
          <DarkModeToggle
            onChange={mode.toggle}
            checked={mode.value}
            size={50}
          />
        </IconContainer>
      </InnerContainer>
    </Container>
  );
};

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
