import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddCircleOutlineProps } from '../AddCircleOutline.types';

import { display } from './AddCircleOutline-display.stories';
import { appearance } from './AddCircleOutline-appearance.stories';
import { size } from './AddCircleOutline-size.stories';
import { theme } from './AddCircleOutline-theme.stories';

export const AddCircleOutline = (args: IconsAddCircleOutlineProps) => (
  <Icon {...args}></Icon>
);

AddCircleOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddCircleOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
