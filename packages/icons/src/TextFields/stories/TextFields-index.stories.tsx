import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTextFieldsProps } from '../TextFields.types';

import { display } from './TextFields-display.stories';
import { appearance } from './TextFields-appearance.stories';
import { size } from './TextFields-size.stories';
import { theme } from './TextFields-theme.stories';

export const TextFields = (args: IconsTextFieldsProps) => (
  <Icon {...args}></Icon>
);

TextFields.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TextFields.argTypes = {
  display,
  appearance,
  size,
  theme,
};
