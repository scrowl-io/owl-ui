import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTextFormatProps } from '../TextFormat.types';

import { display } from './TextFormat-display.stories';
import { appearance } from './TextFormat-appearance.stories';
import { size } from './TextFormat-size.stories';
import { theme } from './TextFormat-theme.stories';

export const TextFormat = (args: IconsTextFormatProps) => (
  <Icon {...args}></Icon>
);

TextFormat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TextFormat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
