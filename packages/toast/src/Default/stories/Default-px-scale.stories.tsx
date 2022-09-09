const pxScales = {
  Lg: 'Large',
  Md: 'Medium',
  Sm: 'Small',
};

export const pxScale = {
  options: Object.keys(pxScales),
  control: {
    type: 'select',
    labels: pxScales,
  },
  defaultValue: 'Md',
};

export default {
  pxScale,
};
