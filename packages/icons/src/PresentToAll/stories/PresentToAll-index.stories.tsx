import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPresentToAllProps } from '../PresentToAll.types';

import { display } from './PresentToAll-display.stories';
import { appearance } from './PresentToAll-appearance.stories';
import { size } from './PresentToAll-size.stories';
import { theme } from './PresentToAll-theme.stories';

export const PresentToAll = (args: IconsPresentToAllProps) => (
  <Icon {...args}></Icon>
);

PresentToAll.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PresentToAll.argTypes = {
  display,
  appearance,
  size,
  theme,
};
