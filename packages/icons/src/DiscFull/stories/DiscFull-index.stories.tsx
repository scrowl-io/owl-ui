import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDiscFullProps } from '../DiscFull.types';

import { display } from './DiscFull-display.stories';
import { appearance } from './DiscFull-appearance.stories';
import { size } from './DiscFull-size.stories';
import { theme } from './DiscFull-theme.stories';

export const DiscFull = (args: IconsDiscFullProps) => (
  <Icon {...args}></Icon>
);

DiscFull.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DiscFull.argTypes = {
  display,
  appearance,
  size,
  theme,
};
