import styled from 'styled-components';

import StyledLink from './styled-link';

const AnimatedLink = styled(StyledLink)`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    width: 100%;
    transform: scaleX(0);
    height: 0.2rem;
    margin: 0.5rem 0 0;
    transition: transform 0.45s ease-in-out, opacity 0.45s ease-out;
    opacity: 0;
    background-color: ${props => props.theme.colors.textColor};
    transform-origin: ${props =>
      props.direction === 'ltr' ? 'left' : 'right'};
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  &:hover {
    ${props =>
      props.direction === 'rtl' &&
      `
      &::after {
        transform: scaleX(1);
        opacity: 1;
      }
    `}
    ${props =>
      props.direction === 'ltr' &&
      `
      &::before {
        transform: scaleX(1);
        opacity: 1;
      }
    `}
  }
`;

export default AnimatedLink;
