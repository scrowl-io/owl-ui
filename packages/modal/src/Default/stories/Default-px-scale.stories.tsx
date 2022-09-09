const pxScales = {
  xl: 'X-Large',
  lg: 'Large',
  sm: 'Small',
};

export const pxScale = {
  options: Object.keys(pxScales),
  control: {
    type: 'select',
    labels: pxScales,
  },
  defaultValue: '',
};

export default {
  pxScale,
};
