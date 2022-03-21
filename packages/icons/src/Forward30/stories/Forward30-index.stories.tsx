import * as React from 'react';
import { component as Icon } from '../index';
import { IconsForward30Props } from '../Forward30.types';

import { display } from './Forward30-display.stories';
import { appearance } from './Forward30-appearance.stories';
import { size } from './Forward30-size.stories';
import { theme } from './Forward30-theme.stories';

export const Forward30 = (args: IconsForward30Props) => (
  <Icon {...args}></Icon>
);

Forward30.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Forward30.argTypes = {
  display,
  appearance,
  size,
  theme,
};
