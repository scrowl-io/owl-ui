const variants = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
  light: 'Light',
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
