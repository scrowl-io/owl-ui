const variants = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
  'outline-primary': 'Outline-Primary',
  'outline-secondary': 'Outline-Secondary',
  'outline-success': 'Outline-Success',
  'outline-warning': 'Outline-Warning',
  'outline-danger': 'Outline-Danger',
  'outline-info': 'Outline-Info',
  'outline-light': 'Outline-Light',
  'outline-dark': 'Outline-Dark',
  link: 'Link',
};

export const variant = {
  options: Object.keys(variants),
  control: {
    type: 'select',
    labels: variants,
  },
  defaultValue: 'primary',
};

export default {
  variant,
};
