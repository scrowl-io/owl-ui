import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhonelinkProps } from '../Phonelink.types';

import { display } from './Phonelink-display.stories';
import { appearance } from './Phonelink-appearance.stories';
import { size } from './Phonelink-size.stories';
import { theme } from './Phonelink-theme.stories';

export const Phonelink = (args: IconsPhonelinkProps) => (
  <Icon {...args}></Icon>
);

Phonelink.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Phonelink.argTypes = {
  display,
  appearance,
  size,
  theme,
};
