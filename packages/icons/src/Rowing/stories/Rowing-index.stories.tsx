import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRowingProps } from '../Rowing.types';

import { display } from './Rowing-display.stories';
import { appearance } from './Rowing-appearance.stories';
import { size } from './Rowing-size.stories';
import { theme } from './Rowing-theme.stories';

export const Rowing = (args: IconsRowingProps) => (
  <Icon {...args}></Icon>
);

Rowing.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Rowing.argTypes = {
  display,
  appearance,
  size,
  theme,
};
