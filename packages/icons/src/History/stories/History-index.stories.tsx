import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHistoryProps } from '../History.types';

import { display } from './History-display.stories';
import { appearance } from './History-appearance.stories';
import { size } from './History-size.stories';
import { theme } from './History-theme.stories';

export const History = (args: IconsHistoryProps) => (
  <Icon {...args}></Icon>
);

History.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

History.argTypes = {
  display,
  appearance,
  size,
  theme,
};
