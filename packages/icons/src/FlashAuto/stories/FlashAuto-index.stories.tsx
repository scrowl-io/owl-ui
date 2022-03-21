import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlashAutoProps } from '../FlashAuto.types';

import { display } from './FlashAuto-display.stories';
import { appearance } from './FlashAuto-appearance.stories';
import { size } from './FlashAuto-size.stories';
import { theme } from './FlashAuto-theme.stories';

export const FlashAuto = (args: IconsFlashAutoProps) => (
  <Icon {...args}></Icon>
);

FlashAuto.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FlashAuto.argTypes = {
  display,
  appearance,
  size,
  theme,
};
