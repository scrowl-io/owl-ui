import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightness4Props } from '../Brightness4.types';

import { display } from './Brightness4-display.stories';
import { appearance } from './Brightness4-appearance.stories';
import { size } from './Brightness4-size.stories';
import { theme } from './Brightness4-theme.stories';

export const Brightness4 = (args: IconsBrightness4Props) => (
  <Icon {...args}></Icon>
);

Brightness4.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brightness4.argTypes = {
  display,
  appearance,
  size,
  theme,
};
