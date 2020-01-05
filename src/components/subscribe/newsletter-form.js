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
  padding: 1rem;
  display: block;
  margin: auto;
  width: 76%;
  font-size: 1.2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);

  &:focus {
    border: 0.1rem solid #000000;
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
        margin-top: 2rem;
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
