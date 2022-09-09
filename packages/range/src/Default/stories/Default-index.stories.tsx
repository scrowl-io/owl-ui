import React from 'react';
import { Range } from '../index';
import { RangeDefaultProps, RangeProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const inputProps: RangeProps = {
  label: {
    content: 'Range',
    htmlFor: 'range',
  },
  control: {
    id: 'range',
    value: 5,
    min: 0,
    max: 10,
  },
};

export const Default = (args: RangeDefaultProps) => {
  return <Range {...args} />;
};

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
