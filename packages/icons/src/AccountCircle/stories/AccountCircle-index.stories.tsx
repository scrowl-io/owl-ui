import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccountCircleProps } from '../AccountCircle.types';

import { display } from './AccountCircle-display.stories';
import { appearance } from './AccountCircle-appearance.stories';
import { size } from './AccountCircle-size.stories';
import { theme } from './AccountCircle-theme.stories';

export const AccountCircle = (args: IconsAccountCircleProps) => (
  <Icon {...args}></Icon>
);

AccountCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccountCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
