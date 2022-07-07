const alignments = {
  'flex-start': 'Start',
  'justify-content-end': 'End',
  'justify-content-center': 'Center',
  'flex-column': 'Vertical',
};

export const alignment = {
  options: Object.keys(alignments),
  control: {
    type: 'select',
    labels: alignments,
  },
  defaultValue: 'flex-start',
};

export default {
  alignment,
};
