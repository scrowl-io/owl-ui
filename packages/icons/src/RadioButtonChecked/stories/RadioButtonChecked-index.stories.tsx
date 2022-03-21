import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRadioButtonCheckedProps } from '../RadioButtonChecked.types';

import { display } from './RadioButtonChecked-display.stories';
import { appearance } from './RadioButtonChecked-appearance.stories';
import { size } from './RadioButtonChecked-size.stories';
import { theme } from './RadioButtonChecked-theme.stories';

export const RadioButtonChecked = (args: IconsRadioButtonCheckedProps) => (
  <Icon {...args}></Icon>
);

RadioButtonChecked.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RadioButtonChecked.argTypes = {
  display,
  appearance,
  size,
  theme,
};
