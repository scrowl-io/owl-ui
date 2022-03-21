import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTapAndPlayProps } from '../TapAndPlay.types';

import { display } from './TapAndPlay-display.stories';
import { appearance } from './TapAndPlay-appearance.stories';
import { size } from './TapAndPlay-size.stories';
import { theme } from './TapAndPlay-theme.stories';

export const TapAndPlay = (args: IconsTapAndPlayProps) => (
  <Icon {...args}></Icon>
);

TapAndPlay.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TapAndPlay.argTypes = {
  display,
  appearance,
  size,
  theme,
};
