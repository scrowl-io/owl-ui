import * as React from 'react';
import { component as Icon } from '../index';
import { IconsReplayProps } from '../Replay.types';

import { display } from './Replay-display.stories';
import { appearance } from './Replay-appearance.stories';
import { size } from './Replay-size.stories';
import { theme } from './Replay-theme.stories';

export const Replay = (args: IconsReplayProps) => (
  <Icon {...args}></Icon>
);

Replay.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Replay.argTypes = {
  display,
  appearance,
  size,
  theme,
};
