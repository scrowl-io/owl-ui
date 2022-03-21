import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFormatShapesProps } from '../FormatShapes.types';

import { display } from './FormatShapes-display.stories';
import { appearance } from './FormatShapes-appearance.stories';
import { size } from './FormatShapes-size.stories';
import { theme } from './FormatShapes-theme.stories';

export const FormatShapes = (args: IconsFormatShapesProps) => (
  <Icon {...args}></Icon>
);

FormatShapes.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FormatShapes.argTypes = {
  display,
  appearance,
  size,
  theme,
};
