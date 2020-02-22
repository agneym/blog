import { lighten, darken } from 'polished';
import { css } from 'styled-components';
import media from './media';

const darkColors = {
  background: `#121212`,
  textColor: `rgba(255, 255, 255, 0.85)`,
  border: `#6e6e6e`,
  coffee: `#d24800`,
  textColorHover: darken(0.4, `rgba(255, 255, 255, 0.85)`),
};

const lightColors = {
  background: `#FFFFFF`,
  textColor: `rgba(0, 0, 0, 0.8)`,
  border: `#e0e0e0`,
  coffee: `#ff813f`,
  textColorHover: lighten(0.2, `rgba(0, 0, 0, 0.8)`),
};

const theme = {
  nav: {
    height: '6rem',
  },
  content: {
    width: css`
      width: 60%;
      max-width: 728px;
      margin: 0 auto;

      ${media.tablet`
        width: 85%;
      `}
    `,
  },
};

/**
 * Get the current theme considering mode.
 * @param {string} mode Mode of theme
 */
function getTheme(mode) {
  return {
    ...theme,
    colors: mode === 'light' ? lightColors : darkColors,
  };
}

export default getTheme;
