import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAdjustProps } from '../Adjust.types';

import { display } from './Adjust-display.stories';
import { appearance } from './Adjust-appearance.stories';
import { size } from './Adjust-size.stories';
import { theme } from './Adjust-theme.stories';

export const Adjust = (args: IconsAdjustProps) => (
  <Icon {...args}></Icon>
);

Adjust.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Adjust.argTypes = {
  display,
  appearance,
  size,
  theme,
};
