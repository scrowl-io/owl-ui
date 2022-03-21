import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPanToolProps } from '../PanTool.types';

import { display } from './PanTool-display.stories';
import { appearance } from './PanTool-appearance.stories';
import { size } from './PanTool-size.stories';
import { theme } from './PanTool-theme.stories';

export const PanTool = (args: IconsPanToolProps) => (
  <Icon {...args}></Icon>
);

PanTool.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PanTool.argTypes = {
  display,
  appearance,
  size,
  theme,
};
