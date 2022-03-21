import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccountCircleProps } from '../AccountCircle.types';

import { appearance } from './AccountCircle-appearance.stories';
import { size } from './AccountCircle-size.stories';
import { theme } from './AccountCircle-theme.stories';

export const AccountCircle = (args: IconsAccountCircleProps) => (
  <Icon {...args}></Icon>
);

AccountCircle.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccountCircle.argTypes = {
  appearance,
  size,
  theme,
};
