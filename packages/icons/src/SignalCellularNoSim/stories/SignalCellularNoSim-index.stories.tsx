import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalCellularNoSimProps } from '../SignalCellularNoSim.types';

import { display } from './SignalCellularNoSim-display.stories';
import { appearance } from './SignalCellularNoSim-appearance.stories';
import { size } from './SignalCellularNoSim-size.stories';
import { theme } from './SignalCellularNoSim-theme.stories';

export const SignalCellularNoSim = (args: IconsSignalCellularNoSimProps) => (
  <Icon {...args}></Icon>
);

SignalCellularNoSim.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalCellularNoSim.argTypes = {
  display,
  appearance,
  size,
  theme,
};
