import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightness7Props } from '../Brightness7.types';

import { display } from './Brightness7-display.stories';
import { appearance } from './Brightness7-appearance.stories';
import { size } from './Brightness7-size.stories';
import { theme } from './Brightness7-theme.stories';

export const Brightness7 = (args: IconsBrightness7Props) => (
  <Icon {...args}></Icon>
);

Brightness7.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brightness7.argTypes = {
  display,
  appearance,
  size,
  theme,
};
