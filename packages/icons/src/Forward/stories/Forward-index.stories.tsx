import * as React from 'react';
import { component as Icon } from '../index';
import { IconsForwardProps } from '../Forward.types';

import { display } from './Forward-display.stories';
import { appearance } from './Forward-appearance.stories';
import { size } from './Forward-size.stories';
import { theme } from './Forward-theme.stories';

export const Forward = (args: IconsForwardProps) => (
  <Icon {...args}></Icon>
);

Forward.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Forward.argTypes = {
  display,
  appearance,
  size,
  theme,
};
