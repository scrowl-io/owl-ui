import * as React from 'react';
import { component as Icon } from '../index';
import { IconsControlPointDuplicateProps } from '../ControlPointDuplicate.types';

import { display } from './ControlPointDuplicate-display.stories';
import { appearance } from './ControlPointDuplicate-appearance.stories';
import { size } from './ControlPointDuplicate-size.stories';
import { theme } from './ControlPointDuplicate-theme.stories';

export const ControlPointDuplicate = (args: IconsControlPointDuplicateProps) => (
  <Icon {...args}></Icon>
);

ControlPointDuplicate.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ControlPointDuplicate.argTypes = {
  display,
  appearance,
  size,
  theme,
};
