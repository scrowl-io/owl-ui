const animations = {
  border: 'Border',
  grow: 'Grow',
};

export const animation = {
  options: Object.keys(animations),
  control: {
    type: 'radio',
    labels: animations,
  },
  defaultValue: 'border',
};

export default {
  animation,
};
