const variants = {
  light: 'Light',
  dark: 'Dark',
};

export const variant = {
  options: Object.keys(variants),
  control: {
    type: 'select',
    labels: variants,
  },
  defaultValue: 'light',
};

export default {
  variant,
};
