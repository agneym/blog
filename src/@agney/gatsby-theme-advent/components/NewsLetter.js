import React from 'react';

import NewsLetterForm from '../../../components/subscribe/newsletter-form';

function NewsLetter() {
  return (
    <section
      css={`
        margin: 6rem auto;
        width: 60%;
        min-width: 600px;
      `}
    >
      <NewsLetterForm />
    </section>
  );
}

export default NewsLetter;
