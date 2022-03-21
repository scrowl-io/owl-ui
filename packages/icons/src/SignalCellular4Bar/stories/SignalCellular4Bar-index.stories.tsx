import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalCellular4BarProps } from '../SignalCellular4Bar.types';

import { display } from './SignalCellular4Bar-display.stories';
import { appearance } from './SignalCellular4Bar-appearance.stories';
import { size } from './SignalCellular4Bar-size.stories';
import { theme } from './SignalCellular4Bar-theme.stories';

export const SignalCellular4Bar = (args: IconsSignalCellular4BarProps) => (
  <Icon {...args}></Icon>
);

SignalCellular4Bar.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalCellular4Bar.argTypes = {
  display,
  appearance,
  size,
  theme,
};
