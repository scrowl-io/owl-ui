import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTimer10Props } from '../Timer10.types';

import { display } from './Timer10-display.stories';
import { appearance } from './Timer10-appearance.stories';
import { size } from './Timer10-size.stories';
import { theme } from './Timer10-theme.stories';

export const Timer10 = (args: IconsTimer10Props) => (
  <Icon {...args}></Icon>
);

Timer10.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Timer10.argTypes = {
  display,
  appearance,
  size,
  theme,
};
