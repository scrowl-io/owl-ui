import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBrightness2Props } from '../Brightness2.types';

import { display } from './Brightness2-display.stories';
import { appearance } from './Brightness2-appearance.stories';
import { size } from './Brightness2-size.stories';
import { theme } from './Brightness2-theme.stories';

export const Brightness2 = (args: IconsBrightness2Props) => (
  <Icon {...args}></Icon>
);

Brightness2.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Brightness2.argTypes = {
  display,
  appearance,
  size,
  theme,
};
