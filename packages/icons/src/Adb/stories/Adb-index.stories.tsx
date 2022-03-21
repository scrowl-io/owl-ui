import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAdbProps } from '../Adb.types';

import { display } from './Adb-display.stories';
import { appearance } from './Adb-appearance.stories';
import { size } from './Adb-size.stories';
import { theme } from './Adb-theme.stories';

export const Adb = (args: IconsAdbProps) => (
  <Icon {...args}></Icon>
);

Adb.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Adb.argTypes = {
  display,
  appearance,
  size,
  theme,
};
