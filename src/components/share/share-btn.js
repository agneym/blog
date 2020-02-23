import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Share2 } from 'react-feather';

const Btn = styled.button`
  padding: 0.5rem 1rem;
  box-shadow: none;
  border: 0.1rem solid #000000;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ShareIcon = styled(Share2)`
  display: inline-block;
  margin-right: 1rem;
  vertical-align: middle;
`;

const BtnText = styled.p`
  && {
    margin: 0;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
  }
`;

const ShareBtn = ({ shareFn }) => {
  return (
    <Btn onClick={shareFn}>
      <ShareIcon size="15" />
      <BtnText>Share</BtnText>
    </Btn>
  );
};

ShareBtn.propType = {
  shareFn: PropTypes.func.isRequired,
};

export default ShareBtn;
