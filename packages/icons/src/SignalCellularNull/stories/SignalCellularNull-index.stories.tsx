import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalCellularNullProps } from '../SignalCellularNull.types';

import { display } from './SignalCellularNull-display.stories';
import { appearance } from './SignalCellularNull-appearance.stories';
import { size } from './SignalCellularNull-size.stories';
import { theme } from './SignalCellularNull-theme.stories';

export const SignalCellularNull = (args: IconsSignalCellularNullProps) => (
  <Icon {...args}></Icon>
);

SignalCellularNull.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalCellularNull.argTypes = {
  display,
  appearance,
  size,
  theme,
};
