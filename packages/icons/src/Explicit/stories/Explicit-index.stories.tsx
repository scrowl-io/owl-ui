import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExplicitProps } from '../Explicit.types';

import { display } from './Explicit-display.stories';
import { appearance } from './Explicit-appearance.stories';
import { size } from './Explicit-size.stories';
import { theme } from './Explicit-theme.stories';

export const Explicit = (args: IconsExplicitProps) => (
  <Icon {...args}></Icon>
);

Explicit.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Explicit.argTypes = {
  display,
  appearance,
  size,
  theme,
};
