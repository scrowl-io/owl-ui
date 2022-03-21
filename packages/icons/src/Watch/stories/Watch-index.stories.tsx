import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWatchProps } from '../Watch.types';

import { display } from './Watch-display.stories';
import { appearance } from './Watch-appearance.stories';
import { size } from './Watch-size.stories';
import { theme } from './Watch-theme.stories';

export const Watch = (args: IconsWatchProps) => (
  <Icon {...args}></Icon>
);

Watch.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Watch.argTypes = {
  display,
  appearance,
  size,
  theme,
};
