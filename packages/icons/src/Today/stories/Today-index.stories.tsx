import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTodayProps } from '../Today.types';

import { display } from './Today-display.stories';
import { appearance } from './Today-appearance.stories';
import { size } from './Today-size.stories';
import { theme } from './Today-theme.stories';

export const Today = (args: IconsTodayProps) => (
  <Icon {...args}></Icon>
);

Today.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Today.argTypes = {
  display,
  appearance,
  size,
  theme,
};
