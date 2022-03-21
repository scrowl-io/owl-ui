import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHttpProps } from '../Http.types';

import { display } from './Http-display.stories';
import { appearance } from './Http-appearance.stories';
import { size } from './Http-size.stories';
import { theme } from './Http-theme.stories';

export const Http = (args: IconsHttpProps) => (
  <Icon {...args}></Icon>
);

Http.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Http.argTypes = {
  display,
  appearance,
  size,
  theme,
};
