const pxScales = {
  lg: 'Large',
  '': 'Default',
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
