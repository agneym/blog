import styled from 'styled-components';

import StyledLink from './styled-link';

const AnimatedLink = styled(StyledLink)`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    width: 0;
    height: 0.2rem;
    margin: 0.5rem 0 0;
    transition: width 0.45s ease-in-out, opacity 0.45s ease-out;
    opacity: 0;
    ${props => props.direction === 'ltr' && `left: 0;`}
    ${props =>
      props.direction === 'rtl' && `right: 0;`}
    background-color: black;
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
        width: 84%;
        opacity: 1;
      }
    `}
    ${props =>
      props.direction === 'ltr' &&
      `
      &::before {
        width: 84%;
        opacity: 1;
      }
    `}
  }
`;

export default AnimatedLink;
