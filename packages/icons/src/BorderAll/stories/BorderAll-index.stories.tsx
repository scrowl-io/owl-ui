import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderAllProps } from '../BorderAll.types';

import { display } from './BorderAll-display.stories';
import { appearance } from './BorderAll-appearance.stories';
import { size } from './BorderAll-size.stories';
import { theme } from './BorderAll-theme.stories';

export const BorderAll = (args: IconsBorderAllProps) => (
  <Icon {...args}></Icon>
);

BorderAll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderAll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
