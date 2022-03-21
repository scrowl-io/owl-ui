import * as React from 'react';
import { component as Icon } from '../index';
import { IconsComputerProps } from '../Computer.types';

import { display } from './Computer-display.stories';
import { appearance } from './Computer-appearance.stories';
import { size } from './Computer-size.stories';
import { theme } from './Computer-theme.stories';

export const Computer = (args: IconsComputerProps) => (
  <Icon {...args}></Icon>
);

Computer.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Computer.argTypes = {
  display,
  appearance,
  size,
  theme,
};
