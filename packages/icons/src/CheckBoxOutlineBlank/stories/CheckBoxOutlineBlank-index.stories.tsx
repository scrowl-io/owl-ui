import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCheckBoxOutlineBlankProps } from '../CheckBoxOutlineBlank.types';

import { display } from './CheckBoxOutlineBlank-display.stories';
import { appearance } from './CheckBoxOutlineBlank-appearance.stories';
import { size } from './CheckBoxOutlineBlank-size.stories';
import { theme } from './CheckBoxOutlineBlank-theme.stories';

export const CheckBoxOutlineBlank = (args: IconsCheckBoxOutlineBlankProps) => (
  <Icon {...args}></Icon>
);

CheckBoxOutlineBlank.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CheckBoxOutlineBlank.argTypes = {
  display,
  appearance,
  size,
  theme,
};
