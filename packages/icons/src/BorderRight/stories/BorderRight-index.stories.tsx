import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBorderRightProps } from '../BorderRight.types';

import { display } from './BorderRight-display.stories';
import { appearance } from './BorderRight-appearance.stories';
import { size } from './BorderRight-size.stories';
import { theme } from './BorderRight-theme.stories';

export const BorderRight = (args: IconsBorderRightProps) => (
  <Icon {...args}></Icon>
);

BorderRight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BorderRight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
