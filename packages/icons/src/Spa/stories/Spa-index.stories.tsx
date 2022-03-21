import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSpaProps } from '../Spa.types';

import { display } from './Spa-display.stories';
import { appearance } from './Spa-appearance.stories';
import { size } from './Spa-size.stories';
import { theme } from './Spa-theme.stories';

export const Spa = (args: IconsSpaProps) => (
  <Icon {...args}></Icon>
);

Spa.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Spa.argTypes = {
  display,
  appearance,
  size,
  theme,
};
