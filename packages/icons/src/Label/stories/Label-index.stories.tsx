import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLabelProps } from '../Label.types';

import { display } from './Label-display.stories';
import { appearance } from './Label-appearance.stories';
import { size } from './Label-size.stories';
import { theme } from './Label-theme.stories';

export const Label = (args: IconsLabelProps) => (
  <Icon {...args}></Icon>
);

Label.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Label.argTypes = {
  display,
  appearance,
  size,
  theme,
};
