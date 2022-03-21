import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPowerInputProps } from '../PowerInput.types';

import { display } from './PowerInput-display.stories';
import { appearance } from './PowerInput-appearance.stories';
import { size } from './PowerInput-size.stories';
import { theme } from './PowerInput-theme.stories';

export const PowerInput = (args: IconsPowerInputProps) => (
  <Icon {...args}></Icon>
);

PowerInput.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PowerInput.argTypes = {
  display,
  appearance,
  size,
  theme,
};
