import styled from 'styled-components';

export const SubmitBtn = styled.input`
  background-color: transparent;
  box-shadow: none;
  border: 0.1rem solid ${props => props.theme.colors.textColor};
  padding: 1rem 1rem 1.2rem;
  text-transform: uppercase;
  width: 80%;
  margin: 3rem auto 2rem;
  display: block;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.2rem;
  color: inherit;
  font-weight: 500;
`;

export const SubSection = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

export const Subtitle = styled.h3`
  margin-bottom: 0;
`;
