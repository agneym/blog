import React from 'react';
import Playground from '@agney/playground';
import { useTheme } from 'styled-components';

function PlaygroundWrapper(props) {
  const theme = useTheme();
  return <Playground {...props} mode={theme.mode} />;
}

export default PlaygroundWrapper;
