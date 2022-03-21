import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReplay30Props } from '../Replay30.types';

import { display } from './Replay30-display.stories';
import { appearance } from './Replay30-appearance.stories';
import { size } from './Replay30-size.stories';
import { theme } from './Replay30-theme.stories';

export const Replay30 = (args: IconsReplay30Props) => (
  <Icon {...args}></Icon>
);

Replay30.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Replay30.argTypes = {
  display,
  appearance,
  size,
  theme,
};
