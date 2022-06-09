const bgs = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  dark: 'Dark',
  light: 'Light',
};

export const bg = {
  options: Object.keys(bgs),
  control: {
    type: 'select',
    labels: bgs,
  },
  defaultValue: 'light',
};

export default {
  bg,
};
