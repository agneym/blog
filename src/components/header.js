import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DarkModeToggle from 'react-dark-mode-toggle';

import StyledLink from '../utils/styled-link';
import media from '../utils/media';
import mailIcon from '../images/icons/mail.svg';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 50;
  background-color: #ffffff;
  border: 0.1rem solid #e0e0e0;
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

const Icon = styled.img`
  height: 2rem;
`;

const Header = ({ title, mode }) => {
  return (
    <Container>
      <TitleLink to={'/'} css={``}>
        <Title>{title}</Title>
      </TitleLink>
      <div>
        <a
          href="#newsletter-title"
          title="Subscribe to Newsletter"
          aria-label="Subscribe to Newsletter"
        >
          <Icon src={mailIcon} alt="mail icon" />
        </a>
        <DarkModeToggle onChange={mode.toggle} checked={mode.value} size={80} />
      </div>
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
