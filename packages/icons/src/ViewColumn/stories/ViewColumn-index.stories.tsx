import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewColumnProps } from '../ViewColumn.types';

import { display } from './ViewColumn-display.stories';
import { appearance } from './ViewColumn-appearance.stories';
import { size } from './ViewColumn-size.stories';
import { theme } from './ViewColumn-theme.stories';

export const ViewColumn = (args: IconsViewColumnProps) => (
  <Icon {...args}></Icon>
);

ViewColumn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewColumn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
