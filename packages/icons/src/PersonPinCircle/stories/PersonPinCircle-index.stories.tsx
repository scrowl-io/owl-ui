import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPersonPinCircleProps } from '../PersonPinCircle.types';

import { display } from './PersonPinCircle-display.stories';
import { appearance } from './PersonPinCircle-appearance.stories';
import { size } from './PersonPinCircle-size.stories';
import { theme } from './PersonPinCircle-theme.stories';

export const PersonPinCircle = (args: IconsPersonPinCircleProps) => (
  <Icon {...args}></Icon>
);

PersonPinCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PersonPinCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
