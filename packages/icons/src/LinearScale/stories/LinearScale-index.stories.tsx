import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLinearScaleProps } from '../LinearScale.types';

import { display } from './LinearScale-display.stories';
import { appearance } from './LinearScale-appearance.stories';
import { size } from './LinearScale-size.stories';
import { theme } from './LinearScale-theme.stories';

export const LinearScale = (args: IconsLinearScaleProps) => (
  <Icon {...args}></Icon>
);

LinearScale.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LinearScale.argTypes = {
  display,
  appearance,
  size,
  theme,
};
