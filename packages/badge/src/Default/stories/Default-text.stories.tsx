const textColors = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
  light: 'Light',
  info: 'Info',
  dark: 'Dark',
};

export const text = {
  options: Object.keys(textColors),
  control: {
    type: 'select',
    labels: textColors,
  },
  defaultValue: 'light',
};

export default {
  text,
};
