import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTollProps } from '../Toll.types';

import { display } from './Toll-display.stories';
import { appearance } from './Toll-appearance.stories';
import { size } from './Toll-size.stories';
import { theme } from './Toll-theme.stories';

export const Toll = (args: IconsTollProps) => (
  <Icon {...args}></Icon>
);

Toll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Toll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
