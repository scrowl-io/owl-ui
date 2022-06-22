const triggers = {
  hover: 'hover',
  click: 'click',
  focus: 'focus',
};

export const trigger = {
  options: Object.keys(triggers),
  control: {
    type: 'select',
    labels: triggers,
  },
  defaultValue: 'click',
};

export default {
  trigger,
};
