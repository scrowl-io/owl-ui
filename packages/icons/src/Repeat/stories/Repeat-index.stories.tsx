import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRepeatProps } from '../Repeat.types';

import { display } from './Repeat-display.stories';
import { appearance } from './Repeat-appearance.stories';
import { size } from './Repeat-size.stories';
import { theme } from './Repeat-theme.stories';

export const Repeat = (args: IconsRepeatProps) => (
  <Icon {...args}></Icon>
);

Repeat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Repeat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
