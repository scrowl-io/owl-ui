import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTimer3Props } from '../Timer3.types';

import { display } from './Timer3-display.stories';
import { appearance } from './Timer3-appearance.stories';
import { size } from './Timer3-size.stories';
import { theme } from './Timer3-theme.stories';

export const Timer3 = (args: IconsTimer3Props) => (
  <Icon {...args}></Icon>
);

Timer3.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Timer3.argTypes = {
  display,
  appearance,
  size,
  theme,
};
