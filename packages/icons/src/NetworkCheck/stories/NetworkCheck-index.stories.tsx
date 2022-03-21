import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNetworkCheckProps } from '../NetworkCheck.types';

import { display } from './NetworkCheck-display.stories';
import { appearance } from './NetworkCheck-appearance.stories';
import { size } from './NetworkCheck-size.stories';
import { theme } from './NetworkCheck-theme.stories';

export const NetworkCheck = (args: IconsNetworkCheckProps) => (
  <Icon {...args}></Icon>
);

NetworkCheck.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NetworkCheck.argTypes = {
  display,
  appearance,
  size,
  theme,
};
