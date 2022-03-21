import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDragHandleProps } from '../DragHandle.types';

import { display } from './DragHandle-display.stories';
import { appearance } from './DragHandle-appearance.stories';
import { size } from './DragHandle-size.stories';
import { theme } from './DragHandle-theme.stories';

export const DragHandle = (args: IconsDragHandleProps) => (
  <Icon {...args}></Icon>
);

DragHandle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DragHandle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
