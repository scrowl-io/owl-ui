import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTransferWithinAStationProps } from '../TransferWithinAStation.types';

import { display } from './TransferWithinAStation-display.stories';
import { appearance } from './TransferWithinAStation-appearance.stories';
import { size } from './TransferWithinAStation-size.stories';
import { theme } from './TransferWithinAStation-theme.stories';

export const TransferWithinAStation = (args: IconsTransferWithinAStationProps) => (
  <Icon {...args}></Icon>
);

TransferWithinAStation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TransferWithinAStation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
