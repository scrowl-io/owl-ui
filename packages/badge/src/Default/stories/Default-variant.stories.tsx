const variants = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
  light: 'Light',
  info: 'Info',
  dark: 'Dark',
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
