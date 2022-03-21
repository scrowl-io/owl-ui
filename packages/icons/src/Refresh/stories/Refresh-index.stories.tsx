import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRefreshProps } from '../Refresh.types';

import { display } from './Refresh-display.stories';
import { appearance } from './Refresh-appearance.stories';
import { size } from './Refresh-size.stories';
import { theme } from './Refresh-theme.stories';

export const Refresh = (args: IconsRefreshProps) => (
  <Icon {...args}></Icon>
);

Refresh.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Refresh.argTypes = {
  display,
  appearance,
  size,
  theme,
};
