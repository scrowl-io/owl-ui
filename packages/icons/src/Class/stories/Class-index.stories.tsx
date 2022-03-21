import * as React from 'react';
import { component as Icon } from '../index';
import { IconsClassProps } from '../Class.types';

import { display } from './Class-display.stories';
import { appearance } from './Class-appearance.stories';
import { size } from './Class-size.stories';
import { theme } from './Class-theme.stories';

export const Class = (args: IconsClassProps) => (
  <Icon {...args}></Icon>
);

Class.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Class.argTypes = {
  display,
  appearance,
  size,
  theme,
};
