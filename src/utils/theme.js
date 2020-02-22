const darkColors = {
  background: `#121212`,
  textColor: `rgba(255, 255, 255, 0.85)`,
  border: `#6e6e6e`,
};

const lightColors = {
  background: `#FFFFFF`,
  textColor: `rgba(0, 0, 0, 0.8)`,
  border: `#e0e0e0`,
};

const theme = {
  nav: {
    height: '6rem',
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
