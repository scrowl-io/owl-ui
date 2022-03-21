import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPersonAddProps } from '../PersonAdd.types';

import { display } from './PersonAdd-display.stories';
import { appearance } from './PersonAdd-appearance.stories';
import { size } from './PersonAdd-size.stories';
import { theme } from './PersonAdd-theme.stories';

export const PersonAdd = (args: IconsPersonAddProps) => (
  <Icon {...args}></Icon>
);

PersonAdd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PersonAdd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
