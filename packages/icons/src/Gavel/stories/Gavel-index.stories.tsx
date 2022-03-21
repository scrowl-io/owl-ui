import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGavelProps } from '../Gavel.types';

import { display } from './Gavel-display.stories';
import { appearance } from './Gavel-appearance.stories';
import { size } from './Gavel-size.stories';
import { theme } from './Gavel-theme.stories';

export const Gavel = (args: IconsGavelProps) => (
  <Icon {...args}></Icon>
);

Gavel.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Gavel.argTypes = {
  display,
  appearance,
  size,
  theme,
};
