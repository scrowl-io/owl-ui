import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalCarWashProps } from '../LocalCarWash.types';

import { display } from './LocalCarWash-display.stories';
import { appearance } from './LocalCarWash-appearance.stories';
import { size } from './LocalCarWash-size.stories';
import { theme } from './LocalCarWash-theme.stories';

export const LocalCarWash = (args: IconsLocalCarWashProps) => (
  <Icon {...args}></Icon>
);

LocalCarWash.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalCarWash.argTypes = {
  display,
  appearance,
  size,
  theme,
};
