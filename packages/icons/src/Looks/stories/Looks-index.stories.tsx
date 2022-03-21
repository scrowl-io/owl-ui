import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLooksProps } from '../Looks.types';

import { display } from './Looks-display.stories';
import { appearance } from './Looks-appearance.stories';
import { size } from './Looks-size.stories';
import { theme } from './Looks-theme.stories';

export const Looks = (args: IconsLooksProps) => (
  <Icon {...args}></Icon>
);

Looks.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Looks.argTypes = {
  display,
  appearance,
  size,
  theme,
};
