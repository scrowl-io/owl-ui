const sizes = {
  Lg: 'Large',
  Md: 'Medium',
  Sm: 'Small',
};

export const size = {
  options: Object.keys(sizes),
  control: {
    type: 'select',
    labels: sizes,
  },
  defaultValue: 'Sm',
};

export default {
  size,
};
