import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWbIridescentProps } from '../WbIridescent.types';

import { display } from './WbIridescent-display.stories';
import { appearance } from './WbIridescent-appearance.stories';
import { size } from './WbIridescent-size.stories';
import { theme } from './WbIridescent-theme.stories';

export const WbIridescent = (args: IconsWbIridescentProps) => (
  <Icon {...args}></Icon>
);

WbIridescent.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WbIridescent.argTypes = {
  display,
  appearance,
  size,
  theme,
};
