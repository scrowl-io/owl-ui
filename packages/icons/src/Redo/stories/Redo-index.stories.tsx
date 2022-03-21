import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRedoProps } from '../Redo.types';

import { display } from './Redo-display.stories';
import { appearance } from './Redo-appearance.stories';
import { size } from './Redo-size.stories';
import { theme } from './Redo-theme.stories';

export const Redo = (args: IconsRedoProps) => (
  <Icon {...args}></Icon>
);

Redo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Redo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
