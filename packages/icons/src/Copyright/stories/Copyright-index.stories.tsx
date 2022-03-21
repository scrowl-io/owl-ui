import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCopyrightProps } from '../Copyright.types';

import { display } from './Copyright-display.stories';
import { appearance } from './Copyright-appearance.stories';
import { size } from './Copyright-size.stories';
import { theme } from './Copyright-theme.stories';

export const Copyright = (args: IconsCopyrightProps) => (
  <Icon {...args}></Icon>
);

Copyright.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Copyright.argTypes = {
  display,
  appearance,
  size,
  theme,
};
