import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccessibleProps } from '../Accessible.types';

import { display } from './Accessible-display.stories';
import { appearance } from './Accessible-appearance.stories';
import { size } from './Accessible-size.stories';
import { theme } from './Accessible-theme.stories';

export const Accessible = (args: IconsAccessibleProps) => (
  <Icon {...args}></Icon>
);

Accessible.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Accessible.argTypes = {
  display,
  appearance,
  size,
  theme,
};
