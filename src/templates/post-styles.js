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
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-style: italic;
    letter-spacing: -0.36px;
    line-height: 44.4px;
    overflow-wrap: break-word;
    margin: 55px 0 33px 0;
    /* text-align: center; */
    color: rgba(0, 0, 0, 0.68);
    padding: 0 0 0 50px;
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
    font-size: 48px;
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

  p,
  i,
  a {
    margin-top: 21px;
    font-family: 'Lora';
    font-size: 21px;
    letter-spacing: -0.03px;
    line-height: 1.58;
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
