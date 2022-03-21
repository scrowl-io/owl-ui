import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWebProps } from '../Web.types';

import { display } from './Web-display.stories';
import { appearance } from './Web-appearance.stories';
import { size } from './Web-size.stories';
import { theme } from './Web-theme.stories';

export const Web = (args: IconsWebProps) => (
  <Icon {...args}></Icon>
);

Web.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Web.argTypes = {
  display,
  appearance,
  size,
  theme,
};
