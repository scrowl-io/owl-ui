import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightness3Props } from '../Brightness3.types';

import { display } from './Brightness3-display.stories';
import { appearance } from './Brightness3-appearance.stories';
import { size } from './Brightness3-size.stories';
import { theme } from './Brightness3-theme.stories';

export const Brightness3 = (args: IconsBrightness3Props) => (
  <Icon {...args}></Icon>
);

Brightness3.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brightness3.argTypes = {
  display,
  appearance,
  size,
  theme,
};
