import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPagesProps } from '../Pages.types';

import { display } from './Pages-display.stories';
import { appearance } from './Pages-appearance.stories';
import { size } from './Pages-size.stories';
import { theme } from './Pages-theme.stories';

export const Pages = (args: IconsPagesProps) => (
  <Icon {...args}></Icon>
);

Pages.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Pages.argTypes = {
  display,
  appearance,
  size,
  theme,
};
