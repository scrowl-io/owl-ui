import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRadioButtonUncheckedProps } from '../RadioButtonUnchecked.types';

import { display } from './RadioButtonUnchecked-display.stories';
import { appearance } from './RadioButtonUnchecked-appearance.stories';
import { size } from './RadioButtonUnchecked-size.stories';
import { theme } from './RadioButtonUnchecked-theme.stories';

export const RadioButtonUnchecked = (args: IconsRadioButtonUncheckedProps) => (
  <Icon {...args}></Icon>
);

RadioButtonUnchecked.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RadioButtonUnchecked.argTypes = {
  display,
  appearance,
  size,
  theme,
};
