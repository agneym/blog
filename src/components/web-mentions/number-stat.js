import React from 'react';
import styled from 'styled-components';

const Stat = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textColorLight};

  svg {
    margin-right: 1rem;
  }
`;

const Text = styled.span`
  font-weight: 500;
`;

function NumberStat({ icon: Icon, children }) {
  return (
    <Stat>
      <Icon color="red" />
      <Text>{children}</Text>
    </Stat>
  );
}

export default NumberStat;
