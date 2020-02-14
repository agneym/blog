import React, { useRef, useEffect } from 'react';

function Comments() {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://comments.app/js/widget.js?2';
    script.async = true;
    script.setAttribute('data-comments-app-website', 'V2EyRovY');
    script.setAttribute('data-color', '343638');
    script.setAttribute('data-colorful', '1');
    script.setAttribute('data-limit', 5);
    script.setAttribute('data-outlined', 1);

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      css={`
        margin: 1rem 0;
      `}
    />
  );
}

export default Comments;
