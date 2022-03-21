import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCheckBoxProps } from '../CheckBox.types';

import { display } from './CheckBox-display.stories';
import { appearance } from './CheckBox-appearance.stories';
import { size } from './CheckBox-size.stories';
import { theme } from './CheckBox-theme.stories';

export const CheckBox = (args: IconsCheckBoxProps) => (
  <Icon {...args}></Icon>
);

CheckBox.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CheckBox.argTypes = {
  display,
  appearance,
  size,
  theme,
};
