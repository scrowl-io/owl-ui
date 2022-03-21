import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderOuterProps } from '../BorderOuter.types';

import { display } from './BorderOuter-display.stories';
import { appearance } from './BorderOuter-appearance.stories';
import { size } from './BorderOuter-size.stories';
import { theme } from './BorderOuter-theme.stories';

export const BorderOuter = (args: IconsBorderOuterProps) => (
  <Icon {...args}></Icon>
);

BorderOuter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderOuter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
