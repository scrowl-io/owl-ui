import * as React from 'react';
import { component as Icon } from '../index';
import { IconsOpenWithProps } from '../OpenWith.types';

import { display } from './OpenWith-display.stories';
import { appearance } from './OpenWith-appearance.stories';
import { size } from './OpenWith-size.stories';
import { theme } from './OpenWith-theme.stories';

export const OpenWith = (args: IconsOpenWithProps) => (
  <Icon {...args}></Icon>
);

OpenWith.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

OpenWith.argTypes = {
  display,
  appearance,
  size,
  theme,
};
