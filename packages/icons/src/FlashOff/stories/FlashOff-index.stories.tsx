import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlashOffProps } from '../FlashOff.types';

import { display } from './FlashOff-display.stories';
import { appearance } from './FlashOff-appearance.stories';
import { size } from './FlashOff-size.stories';
import { theme } from './FlashOff-theme.stories';

export const FlashOff = (args: IconsFlashOffProps) => (
  <Icon {...args}></Icon>
);

FlashOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FlashOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
