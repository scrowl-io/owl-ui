import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFiberNewProps } from '../FiberNew.types';

import { display } from './FiberNew-display.stories';
import { appearance } from './FiberNew-appearance.stories';
import { size } from './FiberNew-size.stories';
import { theme } from './FiberNew-theme.stories';

export const FiberNew = (args: IconsFiberNewProps) => (
  <Icon {...args}></Icon>
);

FiberNew.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FiberNew.argTypes = {
  display,
  appearance,
  size,
  theme,
};
