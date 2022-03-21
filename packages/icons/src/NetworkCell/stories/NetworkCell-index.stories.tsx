import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNetworkCellProps } from '../NetworkCell.types';

import { display } from './NetworkCell-display.stories';
import { appearance } from './NetworkCell-appearance.stories';
import { size } from './NetworkCell-size.stories';
import { theme } from './NetworkCell-theme.stories';

export const NetworkCell = (args: IconsNetworkCellProps) => (
  <Icon {...args}></Icon>
);

NetworkCell.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NetworkCell.argTypes = {
  display,
  appearance,
  size,
  theme,
};
