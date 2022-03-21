import * as React from 'react';
import { component as Icon } from '../index';
import { IconsForward5Props } from '../Forward5.types';

import { display } from './Forward5-display.stories';
import { appearance } from './Forward5-appearance.stories';
import { size } from './Forward5-size.stories';
import { theme } from './Forward5-theme.stories';

export const Forward5 = (args: IconsForward5Props) => (
  <Icon {...args}></Icon>
);

Forward5.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Forward5.argTypes = {
  display,
  appearance,
  size,
  theme,
};
