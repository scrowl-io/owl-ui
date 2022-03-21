import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCachedProps } from '../Cached.types';

import { display } from './Cached-display.stories';
import { appearance } from './Cached-appearance.stories';
import { size } from './Cached-size.stories';
import { theme } from './Cached-theme.stories';

export const Cached = (args: IconsCachedProps) => (
  <Icon {...args}></Icon>
);

Cached.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Cached.argTypes = {
  display,
  appearance,
  size,
  theme,
};
