import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallProps } from '../Call.types';

import { display } from './Call-display.stories';
import { appearance } from './Call-appearance.stories';
import { size } from './Call-size.stories';
import { theme } from './Call-theme.stories';

export const Call = (args: IconsCallProps) => (
  <Icon {...args}></Icon>
);

Call.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Call.argTypes = {
  display,
  appearance,
  size,
  theme,
};
