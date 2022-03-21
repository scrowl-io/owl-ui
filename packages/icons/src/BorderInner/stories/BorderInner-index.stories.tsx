import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderInnerProps } from '../BorderInner.types';

import { display } from './BorderInner-display.stories';
import { appearance } from './BorderInner-appearance.stories';
import { size } from './BorderInner-size.stories';
import { theme } from './BorderInner-theme.stories';

export const BorderInner = (args: IconsBorderInnerProps) => (
  <Icon {...args}></Icon>
);

BorderInner.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderInner.argTypes = {
  display,
  appearance,
  size,
  theme,
};
