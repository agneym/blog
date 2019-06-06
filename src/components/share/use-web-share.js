import { useState, useEffect, useRef } from 'react';

function shareContent(config, onSuccess, onError) {
  return function() {
    navigator
      .share(config)
      .then(onSuccess)
      .catch(onError);
  };
}

/**
 * Use native web share dialog when available
 * @param {Object} args Arguments to be passed to share
 * @param {string} args.title Title of content to be shared
 * @param {string} args.text Short text of content to be shared
 * @param {function} onSuccess function called on successfully sharing content
 * @param {function} onError callback function called on error sharing content
 * @returns {Object}
 */
function useWebShare(args = {}, onSuccess = () => {}, onError = () => {}) {
  const [loading, setLoading] = useState(true);
  const [isSupported, setSupport] = useState(false);
  const config = useRef({
    url: '',
  });

  useEffect(
    () => {
      const canonicalEl = document.querySelector('link[rel=canonical]');
      const url = canonicalEl ? canonicalEl.href : window.location.href;
      const title = args.title || window.title;
      const text = args.text || undefined;
      config.current = { title, text, url };

      if (navigator.share) {
        setSupport(true);
      } else {
        setSupport(false);
      }
      setLoading(false);
    },
    [args, onSuccess, onError]
  );
  return {
    loading,
    isSupported,
    config: config.current,
    share: shareContent(config.current, onSuccess, onError),
  };
}

export default useWebShare;
