const bgs = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
  light: 'Light',
  info: 'Info',
  dark: 'Dark',
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
