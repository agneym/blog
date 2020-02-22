import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DarkModeToggle from 'react-dark-mode-toggle';
import { Mail, Rss } from 'react-feather';

import StyledLink from '../utils/styled-link';
import media from '../utils/media';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 50;
  border-bottom: 0.1rem solid ${props => props.theme.colors.border};
  padding: 2rem 3rem;
  box-sizing: border-box;
`;

const TitleLink = styled(StyledLink)`
  margin: 0 auto;

  ${media.phone`
    margin: inherit;
  `}
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
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
  }
`;

const IconLink = styled.a`
  height: 2rem;
  color: ${props => props.theme.colors.textColor};
  text-decoration: none;

  &:active,
  &:visited {
    color: inherit;
  }
`;

const Header = ({ title, mode }) => {
  return (
    <Container>
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
        <DarkModeToggle onChange={mode.toggle} checked={mode.value} size={50} />
      </IconContainer>
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
