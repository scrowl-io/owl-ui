import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalPlayProps } from '../LocalPlay.types';

import { display } from './LocalPlay-display.stories';
import { appearance } from './LocalPlay-appearance.stories';
import { size } from './LocalPlay-size.stories';
import { theme } from './LocalPlay-theme.stories';

export const LocalPlay = (args: IconsLocalPlayProps) => (
  <Icon {...args}></Icon>
);

LocalPlay.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalPlay.argTypes = {
  display,
  appearance,
  size,
  theme,
};
