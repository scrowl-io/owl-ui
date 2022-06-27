const bgs = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
  light: 'Light',
  link: 'Link',
};

export const bg = {
  options: Object.keys(bgs),
  control: {
    type: 'select',
    labels: bgs,
  },
  defaultValue: 'primary',
};

export default {
  bg,
};
