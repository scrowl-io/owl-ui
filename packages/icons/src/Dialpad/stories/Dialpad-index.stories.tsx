import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDialpadProps } from '../Dialpad.types';

import { display } from './Dialpad-display.stories';
import { appearance } from './Dialpad-appearance.stories';
import { size } from './Dialpad-size.stories';
import { theme } from './Dialpad-theme.stories';

export const Dialpad = (args: IconsDialpadProps) => (
  <Icon {...args}></Icon>
);

Dialpad.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dialpad.argTypes = {
  display,
  appearance,
  size,
  theme,
};
