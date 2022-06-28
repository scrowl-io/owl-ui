const variants = {
  primary: 'Primary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
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
