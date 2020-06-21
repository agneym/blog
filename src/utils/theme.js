import { lighten, darken } from 'polished';
import { css } from 'styled-components';

const darkColors = {
  background: `#1A202C`,
  textColor: `#EDF2F7`,
  textColorLight: darken(0.05, `#EDF2F7`),
  border: `#6e6e6e`,
  coffee: `#d24800`,
  textColorHover: darken(0.4, `#EDF2F7`),
};

const lightColors = {
  background: `#FFFFFF`,
  textColor: `rgba(0, 0, 0, 0.8)`,
  border: `#e0e0e0`,
  coffee: `#ff813f`,
  textColorHover: lighten(0.2, `rgba(0, 0, 0, 0.8)`),
};

const fonts = {
  heading: `'Lora', serif`,
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
    `,
  },
  fonts,
};

/**
 * Get the current theme considering mode.
 * @param {string} mode Mode of theme
 */
function getTheme(mode) {
  return {
    ...theme,
    mode,
    colors: mode === 'light' ? lightColors : darkColors,
  };
}

export default getTheme;
