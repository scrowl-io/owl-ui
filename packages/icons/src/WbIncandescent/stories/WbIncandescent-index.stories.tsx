import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWbIncandescentProps } from '../WbIncandescent.types';

import { display } from './WbIncandescent-display.stories';
import { appearance } from './WbIncandescent-appearance.stories';
import { size } from './WbIncandescent-size.stories';
import { theme } from './WbIncandescent-theme.stories';

export const WbIncandescent = (args: IconsWbIncandescentProps) => (
  <Icon {...args}></Icon>
);

WbIncandescent.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WbIncandescent.argTypes = {
  display,
  appearance,
  size,
  theme,
};
