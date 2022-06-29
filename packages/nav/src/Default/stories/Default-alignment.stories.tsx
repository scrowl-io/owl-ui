// export const alignment = {
//   options: ['Horizontal', 'Center', 'Vertical'],
//   control: {
//     type: 'select',
//   },
//   defaultValue: 'Horizontal',
// };

// export default {
//   alignment,
// };

const alignments = {
  'flex-row': 'Horizontal',
  'justify-content-center': 'Center',
  'flex-column': 'Vertical',
};

export const alignment = {
  options: Object.keys(alignments),
  control: {
    type: 'select',
    labels: alignments,
  },
  defaultValue: 'flex-row',
};

export default {
  alignment,
};
