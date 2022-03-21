import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLayersClearProps } from '../LayersClear.types';

import { display } from './LayersClear-display.stories';
import { appearance } from './LayersClear-appearance.stories';
import { size } from './LayersClear-size.stories';
import { theme } from './LayersClear-theme.stories';

export const LayersClear = (args: IconsLayersClearProps) => (
  <Icon {...args}></Icon>
);

LayersClear.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LayersClear.argTypes = {
  display,
  appearance,
  size,
  theme,
};
