import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRotate90DegreesCcwProps } from '../Rotate90DegreesCcw.types';

import { display } from './Rotate90DegreesCcw-display.stories';
import { appearance } from './Rotate90DegreesCcw-appearance.stories';
import { size } from './Rotate90DegreesCcw-size.stories';
import { theme } from './Rotate90DegreesCcw-theme.stories';

export const Rotate90DegreesCcw = (args: IconsRotate90DegreesCcwProps) => (
  <Icon {...args}></Icon>
);

Rotate90DegreesCcw.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Rotate90DegreesCcw.argTypes = {
  display,
  appearance,
  size,
  theme,
};
