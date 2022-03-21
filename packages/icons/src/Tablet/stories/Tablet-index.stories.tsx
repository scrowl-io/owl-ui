import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTabletProps } from '../Tablet.types';

import { display } from './Tablet-display.stories';
import { appearance } from './Tablet-appearance.stories';
import { size } from './Tablet-size.stories';
import { theme } from './Tablet-theme.stories';

export const Tablet = (args: IconsTabletProps) => (
  <Icon {...args}></Icon>
);

Tablet.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Tablet.argTypes = {
  display,
  appearance,
  size,
  theme,
};
