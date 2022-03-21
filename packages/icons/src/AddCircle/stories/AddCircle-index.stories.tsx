import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddCircleProps } from '../AddCircle.types';

import { display } from './AddCircle-display.stories';
import { appearance } from './AddCircle-appearance.stories';
import { size } from './AddCircle-size.stories';
import { theme } from './AddCircle-theme.stories';

export const AddCircle = (args: IconsAddCircleProps) => (
  <Icon {...args}></Icon>
);

AddCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
