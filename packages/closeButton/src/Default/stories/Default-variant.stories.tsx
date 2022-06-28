const variants = {
  dark: 'Dark',
  white: 'White',
};

export const variant = {
  options: Object.keys(variants),
  control: {
    type: 'select',
    labels: variants,
  },
  defaultValue: 'dark',
};

export default {
  variant,
};
