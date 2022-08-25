const sizes = {
  lg: 'Large',
  '': 'Default',
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
