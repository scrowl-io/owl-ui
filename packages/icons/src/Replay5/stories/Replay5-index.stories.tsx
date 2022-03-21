import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReplay5Props } from '../Replay5.types';

import { display } from './Replay5-display.stories';
import { appearance } from './Replay5-appearance.stories';
import { size } from './Replay5-size.stories';
import { theme } from './Replay5-theme.stories';

export const Replay5 = (args: IconsReplay5Props) => (
  <Icon {...args}></Icon>
);

Replay5.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Replay5.argTypes = {
  display,
  appearance,
  size,
  theme,
};
