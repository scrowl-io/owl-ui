const themes = {
  light: 'Light',
  dark: 'Dark',
};

export const theme = {
  options: Object.keys(themes),
  control: {
    type: 'select',
    labels: themes,
  },
  defaultValue: 'light',
};

export default {
  theme,
};
