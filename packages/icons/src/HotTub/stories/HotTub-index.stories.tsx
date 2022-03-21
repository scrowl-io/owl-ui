import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHotTubProps } from '../HotTub.types';

import { display } from './HotTub-display.stories';
import { appearance } from './HotTub-appearance.stories';
import { size } from './HotTub-size.stories';
import { theme } from './HotTub-theme.stories';

export const HotTub = (args: IconsHotTubProps) => (
  <Icon {...args}></Icon>
);

HotTub.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HotTub.argTypes = {
  display,
  appearance,
  size,
  theme,
};
