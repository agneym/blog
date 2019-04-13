import styled from 'styled-components';

import media from '../utils/media';

export const Container = styled.article`
  margin-top: 6rem;

  ${media.phone`
    margin-top: 4rem;
  `}

  p {
    line-height: 1.5;
  }

  ul,
  ol {
    padding-left: 1rem;
  }

  blockquote {
    font-size: 25px;
    font-style: italic;
    line-height: 44.4px;
    overflow-wrap: break-word;
    margin: 3rem 0 3rem 0;
    color: rgba(0, 0, 0, 0.98);
    padding: 0 0 0 2rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0 2rem;
  }

  h1 {
    margin-bottom: 8px;
  }

  h2 {
    font-size: 26px;
    font-weight: 700;
    padding: 0;
    margin: 30px 0 -10px -1.883px;
    text-align: left;
    line-height: 34.5px;
    letter-spacing: -0.45px;
  }

  h3 {
    margin: 5rem 0 2rem;
  }

  p,
  i,
  a {
    margin-top: 21px;
    font-size: 18px;
    letter-spacing: -0.03px;
    line-height: 1.58;
    color: inherit;
  }

  a {
    word-break: break-all;
  }

  hr {
    border: 0;
    border-top: 0.1rem solid #ccc;
    display: block;
    height: 1rem;
    padding: 0;
  }

  ol {
    margin-left: 1rem;
    list-style: none;
    counter-reset: custom-counter;
  }

  ol li {
    counter-increment: custom-counter;
    line-height: 1.5;
    margin: 0.5rem 0;
  }

  ul li {
    line-height: 1.5;
    margin: 0.5rem 0;
    font-size: 1.8rem;
  }

  ol li > p {
    display: inline;
  }

  ol li::before {
    content: counter(custom-counter) '. ';
    font-size: small;
    color: gray;
    margin-right: 0.6rem;
  }

  pre {
    overflow-x: auto;
    word-wrap: break-word;

    &[aria-hidden] {
      background-color: inherit;
    }
  }
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  overflow-x: auto;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }

  &[class*='language-'] {
    border: 0;
    padding: 1.5rem;
    border-radius: 0;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

export const Header = styled.header`
  ${media.tablet`
    text-align: center;
  `};
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 4.2rem;

  ${media.phone`
    font-size: 2.8rem;
    text-align: center;
  `}
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
`;
