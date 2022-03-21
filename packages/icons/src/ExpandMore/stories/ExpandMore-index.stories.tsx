import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExpandMoreProps } from '../ExpandMore.types';

import { display } from './ExpandMore-display.stories';
import { appearance } from './ExpandMore-appearance.stories';
import { size } from './ExpandMore-size.stories';
import { theme } from './ExpandMore-theme.stories';

export const ExpandMore = (args: IconsExpandMoreProps) => (
  <Icon {...args}></Icon>
);

ExpandMore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExpandMore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
