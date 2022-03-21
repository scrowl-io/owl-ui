import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGraphicEqProps } from '../GraphicEq.types';

import { display } from './GraphicEq-display.stories';
import { appearance } from './GraphicEq-appearance.stories';
import { size } from './GraphicEq-size.stories';
import { theme } from './GraphicEq-theme.stories';

export const GraphicEq = (args: IconsGraphicEqProps) => (
  <Icon {...args}></Icon>
);

GraphicEq.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

GraphicEq.argTypes = {
  display,
  appearance,
  size,
  theme,
};
