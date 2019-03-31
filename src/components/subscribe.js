import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0 5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const Form = styled.form`
  width: 80%;
  margin: 1rem;
`;

const EmailInput = styled.input`
  padding: 1rem;
  display: block;
  width: 100%;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);

  &:focus {
    border: 0.1rem solid #000000;
    outline: none;
  }
`;

const Label = styled.label`
  font-size: small;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const SubmitBtn = styled.input`
  background-color: transparent;
  box-shadow: none;
  border: 0.1rem solid #000000;
  padding: 0.8rem 1rem;
  text-transform: uppercase;
  width: 80%;
  margin: 2rem auto;
  display: block;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.2rem;
`;

function Subscribe() {
  return (
    <Container>
      <Title>Join the Newsletter</Title>
      <sub>No Spam. Just JavaScript.</sub>
      <sub>Unsubscribe anytime you want.</sub>
      <Form
        action="https://buttondown.email/api/emails/embed-subscribe/agney"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/agney', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <Label for="bd-email">Email</Label>
        <EmailInput
          type="email"
          name="email"
          id="bd-email"
          required
          placeholder="johndoe@gmail.com"
        />
        <input type="hidden" value="1" name="embed" />
        <SubmitBtn type="submit" value="Subscribe" />
      </Form>
    </Container>
  );
}

export default Subscribe;
