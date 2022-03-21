import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPollProps } from '../Poll.types';

import { display } from './Poll-display.stories';
import { appearance } from './Poll-appearance.stories';
import { size } from './Poll-size.stories';
import { theme } from './Poll-theme.stories';

export const Poll = (args: IconsPollProps) => (
  <Icon {...args}></Icon>
);

Poll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Poll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
