import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPauseCircleOutlineProps } from '../PauseCircleOutline.types';

import { display } from './PauseCircleOutline-display.stories';
import { appearance } from './PauseCircleOutline-appearance.stories';
import { size } from './PauseCircleOutline-size.stories';
import { theme } from './PauseCircleOutline-theme.stories';

export const PauseCircleOutline = (args: IconsPauseCircleOutlineProps) => (
  <Icon {...args}></Icon>
);

PauseCircleOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PauseCircleOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
