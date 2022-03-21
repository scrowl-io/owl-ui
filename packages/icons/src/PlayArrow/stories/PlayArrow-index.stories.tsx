import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlayArrowProps } from '../PlayArrow.types';

import { display } from './PlayArrow-display.stories';
import { appearance } from './PlayArrow-appearance.stories';
import { size } from './PlayArrow-size.stories';
import { theme } from './PlayArrow-theme.stories';

export const PlayArrow = (args: IconsPlayArrowProps) => (
  <Icon {...args}></Icon>
);

PlayArrow.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlayArrow.argTypes = {
  display,
  appearance,
  size,
  theme,
};
