import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGrainProps } from '../Grain.types';

import { display } from './Grain-display.stories';
import { appearance } from './Grain-appearance.stories';
import { size } from './Grain-size.stories';
import { theme } from './Grain-theme.stories';

export const Grain = (args: IconsGrainProps) => (
  <Icon {...args}></Icon>
);

Grain.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Grain.argTypes = {
  display,
  appearance,
  size,
  theme,
};
