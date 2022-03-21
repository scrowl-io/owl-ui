import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReplay10Props } from '../Replay10.types';

import { display } from './Replay10-display.stories';
import { appearance } from './Replay10-appearance.stories';
import { size } from './Replay10-size.stories';
import { theme } from './Replay10-theme.stories';

export const Replay10 = (args: IconsReplay10Props) => (
  <Icon {...args}></Icon>
);

Replay10.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Replay10.argTypes = {
  display,
  appearance,
  size,
  theme,
};
