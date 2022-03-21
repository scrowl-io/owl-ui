import * as React from 'react';
import { component as Icon } from '../index';
import { IconsControlPointProps } from '../ControlPoint.types';

import { display } from './ControlPoint-display.stories';
import { appearance } from './ControlPoint-appearance.stories';
import { size } from './ControlPoint-size.stories';
import { theme } from './ControlPoint-theme.stories';

export const ControlPoint = (args: IconsControlPointProps) => (
  <Icon {...args}></Icon>
);

ControlPoint.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ControlPoint.argTypes = {
  display,
  appearance,
  size,
  theme,
};
