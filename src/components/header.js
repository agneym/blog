import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DarkModeToggle from 'react-dark-mode-toggle';

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

const Icon = styled.svg`
  height: 2rem;
  color: ${props => props.theme.colors.textColor};
`;

const Header = ({ title, mode }) => {
  return (
    <Container>
      <TitleLink to={'/'} css={``}>
        <Title>{title}</Title>
      </TitleLink>
      <IconContainer>
        <a
          href="#newsletter-title"
          title="Subscribe to Newsletter"
          aria-label="Subscribe to Newsletter"
        >
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </Icon>
        </a>
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
