import * as React from 'react';
import { component as Icon } from '../index';
import { IconsUndoProps } from '../Undo.types';

import { display } from './Undo-display.stories';
import { appearance } from './Undo-appearance.stories';
import { size } from './Undo-size.stories';
import { theme } from './Undo-theme.stories';

export const Undo = (args: IconsUndoProps) => (
  <Icon {...args}></Icon>
);

Undo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Undo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
