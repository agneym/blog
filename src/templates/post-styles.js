import styled from 'styled-components';

import media from '../utils/media';

export const Container = styled.article`
  margin-top: 8rem;

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

  pre {
    margin-bottom: 2rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0 2rem;
  }

  h1 {
    font-size: 40px;
    text-align: left;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 26px;
    font-weight: 700;
    padding: 0;
    margin: 56px 0 -13px -1.883px;
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

  hr {
    border: 0;
    border-top: 0.1rem solid #ccc;
    display: block;
    height: 1rem;
    padding: 0;
  }
`;

export const Header = styled.header`
  ${media.tablet`
    text-align: center;
  `};
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 3rem;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
`;
