import * as React from 'react';
import { component as Icon } from '../index';
import { IconsIndeterminateCheckBoxProps } from '../IndeterminateCheckBox.types';

import { display } from './IndeterminateCheckBox-display.stories';
import { appearance } from './IndeterminateCheckBox-appearance.stories';
import { size } from './IndeterminateCheckBox-size.stories';
import { theme } from './IndeterminateCheckBox-theme.stories';

export const IndeterminateCheckBox = (args: IconsIndeterminateCheckBoxProps) => (
  <Icon {...args}></Icon>
);

IndeterminateCheckBox.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

IndeterminateCheckBox.argTypes = {
  display,
  appearance,
  size,
  theme,
};
