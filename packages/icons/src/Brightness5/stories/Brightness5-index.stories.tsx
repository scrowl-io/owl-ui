import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightness5Props } from '../Brightness5.types';

import { display } from './Brightness5-display.stories';
import { appearance } from './Brightness5-appearance.stories';
import { size } from './Brightness5-size.stories';
import { theme } from './Brightness5-theme.stories';

export const Brightness5 = (args: IconsBrightness5Props) => (
  <Icon {...args}></Icon>
);

Brightness5.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brightness5.argTypes = {
  display,
  appearance,
  size,
  theme,
};
