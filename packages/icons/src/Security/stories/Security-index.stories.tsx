import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSecurityProps } from '../Security.types';

import { display } from './Security-display.stories';
import { appearance } from './Security-appearance.stories';
import { size } from './Security-size.stories';
import { theme } from './Security-theme.stories';

export const Security = (args: IconsSecurityProps) => (
  <Icon {...args}></Icon>
);

Security.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Security.argTypes = {
  display,
  appearance,
  size,
  theme,
};
