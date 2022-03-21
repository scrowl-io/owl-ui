import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLayersProps } from '../Layers.types';

import { display } from './Layers-display.stories';
import { appearance } from './Layers-appearance.stories';
import { size } from './Layers-size.stories';
import { theme } from './Layers-theme.stories';

export const Layers = (args: IconsLayersProps) => (
  <Icon {...args}></Icon>
);

Layers.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Layers.argTypes = {
  display,
  appearance,
  size,
  theme,
};
