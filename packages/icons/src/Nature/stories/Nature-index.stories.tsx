import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNatureProps } from '../Nature.types';

import { display } from './Nature-display.stories';
import { appearance } from './Nature-appearance.stories';
import { size } from './Nature-size.stories';
import { theme } from './Nature-theme.stories';

export const Nature = (args: IconsNatureProps) => (
  <Icon {...args}></Icon>
);

Nature.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Nature.argTypes = {
  display,
  appearance,
  size,
  theme,
};
