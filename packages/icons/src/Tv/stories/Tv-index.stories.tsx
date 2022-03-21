import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTvProps } from '../Tv.types';

import { display } from './Tv-display.stories';
import { appearance } from './Tv-appearance.stories';
import { size } from './Tv-size.stories';
import { theme } from './Tv-theme.stories';

export const Tv = (args: IconsTvProps) => (
  <Icon {...args}></Icon>
);

Tv.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Tv.argTypes = {
  display,
  appearance,
  size,
  theme,
};
