import React, { PureComponent } from 'react';
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

class NewsLetterForm extends PureComponent {
  render() {
    return (
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/agney"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/agney', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <S.SubSection>
          <S.Subtitle>Newsletter</S.Subtitle>
          <sub>Prefer a digest of information every week?</sub>
        </S.SubSection>
        <br />
        <Label for="bd-email">Email</Label>
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
}

export default NewsLetterForm;
