import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Subscribe() {
  return (
    <Container>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/agney"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/agney', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <label for="bd-email">Enter your email</label>
        <input type="email" name="email" id="bd-email" />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
      </form>
    </Container>
  );
}

export default Subscribe;
