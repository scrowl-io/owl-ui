import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHdProps } from '../Hd.types';

import { display } from './Hd-display.stories';
import { appearance } from './Hd-appearance.stories';
import { size } from './Hd-size.stories';
import { theme } from './Hd-theme.stories';

export const Hd = (args: IconsHdProps) => (
  <Icon {...args}></Icon>
);

Hd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Hd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
