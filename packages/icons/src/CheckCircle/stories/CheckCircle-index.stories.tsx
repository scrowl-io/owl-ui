import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCheckCircleProps } from '../CheckCircle.types';

import { display } from './CheckCircle-display.stories';
import { appearance } from './CheckCircle-appearance.stories';
import { size } from './CheckCircle-size.stories';
import { theme } from './CheckCircle-theme.stories';

export const CheckCircle = (args: IconsCheckCircleProps) => (
  <Icon {...args}></Icon>
);

CheckCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CheckCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
