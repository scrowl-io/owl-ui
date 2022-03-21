import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFiberDvrProps } from '../FiberDvr.types';

import { display } from './FiberDvr-display.stories';
import { appearance } from './FiberDvr-appearance.stories';
import { size } from './FiberDvr-size.stories';
import { theme } from './FiberDvr-theme.stories';

export const FiberDvr = (args: IconsFiberDvrProps) => (
  <Icon {...args}></Icon>
);

FiberDvr.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FiberDvr.argTypes = {
  display,
  appearance,
  size,
  theme,
};
