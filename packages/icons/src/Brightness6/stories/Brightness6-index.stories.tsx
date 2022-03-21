import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightness6Props } from '../Brightness6.types';

import { display } from './Brightness6-display.stories';
import { appearance } from './Brightness6-appearance.stories';
import { size } from './Brightness6-size.stories';
import { theme } from './Brightness6-theme.stories';

export const Brightness6 = (args: IconsBrightness6Props) => (
  <Icon {...args}></Icon>
);

Brightness6.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brightness6.argTypes = {
  display,
  appearance,
  size,
  theme,
};
