import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewComfyProps } from '../ViewComfy.types';

import { display } from './ViewComfy-display.stories';
import { appearance } from './ViewComfy-appearance.stories';
import { size } from './ViewComfy-size.stories';
import { theme } from './ViewComfy-theme.stories';

export const ViewComfy = (args: IconsViewComfyProps) => (
  <Icon {...args}></Icon>
);

ViewComfy.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewComfy.argTypes = {
  display,
  appearance,
  size,
  theme,
};
