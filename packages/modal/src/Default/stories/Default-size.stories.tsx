const sizes = {
  xl: 'X-Large',
  lg: 'Large',
  sm: 'Small',
};

export const size = {
  options: Object.keys(sizes),
  control: {
    type: 'select',
    labels: sizes,
  },
  defaultValue: '',
};

export default {
  size,
};
