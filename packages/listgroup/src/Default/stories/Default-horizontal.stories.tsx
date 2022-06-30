const breakpoints = {
  null: 'Vertical',
  xxl: 'XXL',
  xl: 'XL',
  lg: 'Large',
  md: 'Medium',
  sm: 'Small',
};

export const horizontal = {
  options: Object.keys(breakpoints),
  control: {
    type: 'select',
    labels: breakpoints,
  },
  defaultValue: 'sm',
};

export default {
  horizontal,
};
