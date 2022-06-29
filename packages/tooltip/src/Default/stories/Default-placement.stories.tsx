const placements = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

export const placement = {
  options: Object.keys(placements),
  control: {
    type: 'select',
    labels: placements,
  },
  defaultValue: 'right',
};

export default {
  placement,
};
