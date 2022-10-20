import React, { useState } from 'react';
import { Range } from '../index';
import { RangeDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const label = {
  content: 'Range',
  htmlFor: 'range',
};

const controlConfig = {
  id: 'range',
  value: 5,
  min: 0,
  max: 10,
};

export const Default = ({ control, ...args }: RangeDefaultProps) => {
  const [rangeVal, setRangeVal] = useState(control.value);

  const handleRangeChange = (ev: React.SyntheticEvent) => {
    const target = ev.target as HTMLInputElement;

    setRangeVal(target.value);
  };

  control.value = rangeVal;
  return <Range {...args} control={control} onChange={handleRangeChange} />;
};

Default.args = {
  variant: variant.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  label,
  control: controlConfig,
};

Default.argTypes = {
  variant,
  pxScale,
  theme,
};
