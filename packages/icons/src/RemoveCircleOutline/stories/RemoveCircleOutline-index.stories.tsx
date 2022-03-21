import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRemoveCircleOutlineProps } from '../RemoveCircleOutline.types';

import { display } from './RemoveCircleOutline-display.stories';
import { appearance } from './RemoveCircleOutline-appearance.stories';
import { size } from './RemoveCircleOutline-size.stories';
import { theme } from './RemoveCircleOutline-theme.stories';

export const RemoveCircleOutline = (args: IconsRemoveCircleOutlineProps) => (
  <Icon {...args}></Icon>
);

RemoveCircleOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RemoveCircleOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
