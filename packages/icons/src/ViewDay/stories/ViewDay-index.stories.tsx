import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewDayProps } from '../ViewDay.types';

import { display } from './ViewDay-display.stories';
import { appearance } from './ViewDay-appearance.stories';
import { size } from './ViewDay-size.stories';
import { theme } from './ViewDay-theme.stories';

export const ViewDay = (args: IconsViewDayProps) => (
  <Icon {...args}></Icon>
);

ViewDay.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewDay.argTypes = {
  display,
  appearance,
  size,
  theme,
};
