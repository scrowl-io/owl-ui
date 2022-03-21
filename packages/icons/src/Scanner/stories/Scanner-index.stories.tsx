import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScannerProps } from '../Scanner.types';

import { display } from './Scanner-display.stories';
import { appearance } from './Scanner-appearance.stories';
import { size } from './Scanner-size.stories';
import { theme } from './Scanner-theme.stories';

export const Scanner = (args: IconsScannerProps) => (
  <Icon {...args}></Icon>
);

Scanner.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Scanner.argTypes = {
  display,
  appearance,
  size,
  theme,
};
