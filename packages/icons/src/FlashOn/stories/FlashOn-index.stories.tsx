import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlashOnProps } from '../FlashOn.types';

import { display } from './FlashOn-display.stories';
import { appearance } from './FlashOn-appearance.stories';
import { size } from './FlashOn-size.stories';
import { theme } from './FlashOn-theme.stories';

export const FlashOn = (args: IconsFlashOnProps) => (
  <Icon {...args}></Icon>
);

FlashOn.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FlashOn.argTypes = {
  display,
  appearance,
  size,
  theme,
};
