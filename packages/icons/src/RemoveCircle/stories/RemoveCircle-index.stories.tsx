import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRemoveCircleProps } from '../RemoveCircle.types';

import { display } from './RemoveCircle-display.stories';
import { appearance } from './RemoveCircle-appearance.stories';
import { size } from './RemoveCircle-size.stories';
import { theme } from './RemoveCircle-theme.stories';

export const RemoveCircle = (args: IconsRemoveCircleProps) => (
  <Icon {...args}></Icon>
);

RemoveCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RemoveCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
