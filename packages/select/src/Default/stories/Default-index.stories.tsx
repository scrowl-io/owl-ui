import * as React from 'react';
import { Select } from '../index';
import { SelectDefaultProps, SelectProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const inputProps: SelectProps = {
  label: {
    content: 'Select',
    htmlFor: 'select',
  },
  control: {
    id: 'select',
    options: [
      {
        id: '1',
        label: 'Option 1',
      },
      {
        id: '2',
        label: 'Option 2',
      },
      {
        id: '3',
        label: 'Option 3',
      },
    ],
  },
};

export const Default = (args: SelectDefaultProps) => <Select {...args} />;

Default.args = {
  variant: variant.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  inputProps: inputProps,
};

Default.argTypes = {
  variant,
  pxScale,
  theme,
};
