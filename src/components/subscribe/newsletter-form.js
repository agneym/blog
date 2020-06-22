import React, { memo } from 'react';
import styled from 'styled-components';
import * as S from './layout';

const Label = styled.label`
  font-size: small;
  margin: 0.5rem auto;
  display: block;
  text-align: left;
  width: 80%;
`;

const EmailInput = styled.input`
  padding: 1.2rem 1rem;
  display: block;
  margin: auto;
  font-size: 1.4rem;
  border: 0.1rem solid ${props => props.theme.colors.border};
  background-color: inherit;
  width: 80%;
  box-sizing: border-box;

  &:focus {
    border: 0.1rem solid rgba(255, 255, 255, 0.6);
    outline: none;
  }
`;

function NewsLetterForm() {
  const submitForm = () => {
    window.open('https://buttondown.email/agney', 'popupwindow');
  };
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/agney"
      method="post"
      target="popupwindow"
      onSubmit={submitForm}
      css={`
        width: 80%;
        min-width: 300px;
        margin-top: 1.5rem;
      `}
    >
      <Label htmlFor="bd-email">Email</Label>
      <EmailInput
        type="email"
        name="email"
        id="bd-email"
        required
        placeholder="johndoe@gmail.com"
      />
      <input type="hidden" value="1" name="embed" />
      <S.SubmitBtn type="submit" value="Subscribe" />
    </form>
  );
}

export default memo(NewsLetterForm);
