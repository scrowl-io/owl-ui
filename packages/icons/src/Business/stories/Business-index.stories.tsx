import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBusinessProps } from '../Business.types';

import { display } from './Business-display.stories';
import { appearance } from './Business-appearance.stories';
import { size } from './Business-size.stories';
import { theme } from './Business-theme.stories';

export const Business = (args: IconsBusinessProps) => (
  <Icon {...args}></Icon>
);

Business.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Business.argTypes = {
  display,
  appearance,
  size,
  theme,
};
