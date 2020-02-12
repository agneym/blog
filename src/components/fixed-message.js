import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import media from '../utils/media';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e74c3c;
  width: 100%;
  text-align: center;
  padding: 1rem 1.5rem;
  transform: translateY(-100%);
  transition: transform 450ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${media.phone`
    ${props =>
      props.visible &&
      `
      transform: translateY(0);
    `}
  `}
`;

const StyledAnchor = styled.a`
  color: #ffffff;
  text-decoration: none;

  span {
    display: inline-block;
    margin: 0.3rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  font-size: 2rem;
  box-sizing: border-box;
  right: 0rem;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffff;
  z-index: 5;
  background-color: transparent;
  border: none;
  appearance: none;
`;

function FixedMessage() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const previousScrollPosition = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      requestAnimationFrame(() => {
        if (scrollTop > 300 && previousScrollPosition.current < scrollTop) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        previousScrollPosition.current = scrollTop;
      });
    };
    if (!dismissed) {
      document.addEventListener('scroll', handleScroll, {
        passive: true,
      });
    }
    return () => {
      document.removeEventListener('scroll', handleScroll, {
        passive: true,
      });
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  return (
    <Container visible={visible}>
      <StyledAnchor href="#newsletter-title">
        <span>Join the monthly newsletter to catch up.</span>
      </StyledAnchor>
      <CloseButton
        aria-label="Close Newsletter Info Popover"
        onClick={handleDismiss}
      >
        &times;
      </CloseButton>
    </Container>
  );
}

export default FixedMessage;
