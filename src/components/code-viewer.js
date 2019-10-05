import React from 'react';
import { Pre, LineNo } from '../templates/post-styles';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const CodeViewer = ({ code, children, className = '' }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim() || code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i, { length }) => (
            <div {...getLineProps({ line, key: i })}>
              {length > 7 && <LineNo>{i + 1}</LineNo>}
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeViewer;
