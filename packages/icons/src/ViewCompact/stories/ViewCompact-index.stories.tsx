import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewCompactProps } from '../ViewCompact.types';

import { display } from './ViewCompact-display.stories';
import { appearance } from './ViewCompact-appearance.stories';
import { size } from './ViewCompact-size.stories';
import { theme } from './ViewCompact-theme.stories';

export const ViewCompact = (args: IconsViewCompactProps) => (
  <Icon {...args}></Icon>
);

ViewCompact.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewCompact.argTypes = {
  display,
  appearance,
  size,
  theme,
};
