const texts = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  dark: 'Dark',
  light: 'Light',
  white: 'White',
  muted: 'Muted',
};

export const text = {
  options: Object.keys(texts),
  control: {
    type: 'select',
    labels: texts,
  },
  defaultValue: 'dark',
};

export default {
  text,
};
