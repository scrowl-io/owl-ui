import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDehazeProps } from '../Dehaze.types';

import { display } from './Dehaze-display.stories';
import { appearance } from './Dehaze-appearance.stories';
import { size } from './Dehaze-size.stories';
import { theme } from './Dehaze-theme.stories';

export const Dehaze = (args: IconsDehazeProps) => (
  <Icon {...args}></Icon>
);

Dehaze.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dehaze.argTypes = {
  display,
  appearance,
  size,
  theme,
};
