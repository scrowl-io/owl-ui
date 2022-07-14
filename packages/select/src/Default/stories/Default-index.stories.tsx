import * as React from 'react';
import { Select } from '../index';
import { SelectDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const selectProps = {
  id: 'select',
  label: 'Select an Option',
  optionalprops: {
    disabled: false,
    htmlSize: 1,
    options: [
      {
        id: 1,
        label: 'Option 1',
      },
      {
        id: 2,
        label: 'Option 2',
      },
      {
        id: 1,
        label: 'Option 3',
      },
    ],
  },
};

export const Default = (args: SelectDefaultProps) => <Select {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  selectProps: selectProps,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
