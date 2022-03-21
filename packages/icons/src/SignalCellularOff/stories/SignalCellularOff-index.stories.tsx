import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalCellularOffProps } from '../SignalCellularOff.types';

import { display } from './SignalCellularOff-display.stories';
import { appearance } from './SignalCellularOff-appearance.stories';
import { size } from './SignalCellularOff-size.stories';
import { theme } from './SignalCellularOff-theme.stories';

export const SignalCellularOff = (args: IconsSignalCellularOffProps) => (
  <Icon {...args}></Icon>
);

SignalCellularOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalCellularOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
