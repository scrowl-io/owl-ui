import * as React from 'react';
import { component as Icon } from '../index';
import { IconsKitchenProps } from '../Kitchen.types';

import { display } from './Kitchen-display.stories';
import { appearance } from './Kitchen-appearance.stories';
import { size } from './Kitchen-size.stories';
import { theme } from './Kitchen-theme.stories';

export const Kitchen = (args: IconsKitchenProps) => (
  <Icon {...args}></Icon>
);

Kitchen.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Kitchen.argTypes = {
  display,
  appearance,
  size,
  theme,
};
