import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTransformProps } from '../Transform.types';

import { display } from './Transform-display.stories';
import { appearance } from './Transform-appearance.stories';
import { size } from './Transform-size.stories';
import { theme } from './Transform-theme.stories';

export const Transform = (args: IconsTransformProps) => (
  <Icon {...args}></Icon>
);

Transform.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Transform.argTypes = {
  display,
  appearance,
  size,
  theme,
};
