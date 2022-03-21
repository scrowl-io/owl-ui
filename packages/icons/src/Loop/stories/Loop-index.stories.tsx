import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLoopProps } from '../Loop.types';

import { display } from './Loop-display.stories';
import { appearance } from './Loop-appearance.stories';
import { size } from './Loop-size.stories';
import { theme } from './Loop-theme.stories';

export const Loop = (args: IconsLoopProps) => (
  <Icon {...args}></Icon>
);

Loop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Loop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
