const variants = {
  full: '',
  flush: 'flush',
};

export const variant = {
  options: Object.keys(variants),
  control: {
    type: 'radio',
    labels: variants,
  },
  defaultValue: 'full',
};

export default {
  variant,
};
