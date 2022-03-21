import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPrintProps } from '../Print.types';

import { display } from './Print-display.stories';
import { appearance } from './Print-appearance.stories';
import { size } from './Print-size.stories';
import { theme } from './Print-theme.stories';

export const Print = (args: IconsPrintProps) => (
  <Icon {...args}></Icon>
);

Print.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Print.argTypes = {
  display,
  appearance,
  size,
  theme,
};
