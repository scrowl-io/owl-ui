import * as React from 'react';
import { Range } from '../index';
import { RangeDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const rangeProps = {
  id: 'range',
  label: 'Example Range',
  optionalprops: {
    disabled: false,
    min: 0,
    max: 20,
  },
};

export const Default = (args: RangeDefaultProps) => <Range {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  rangeProps: rangeProps,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
