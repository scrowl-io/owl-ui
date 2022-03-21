import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPinDropProps } from '../PinDrop.types';

import { display } from './PinDrop-display.stories';
import { appearance } from './PinDrop-appearance.stories';
import { size } from './PinDrop-size.stories';
import { theme } from './PinDrop-theme.stories';

export const PinDrop = (args: IconsPinDropProps) => (
  <Icon {...args}></Icon>
);

PinDrop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PinDrop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
