import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlayCircleOutlineProps } from '../PlayCircleOutline.types';

import { display } from './PlayCircleOutline-display.stories';
import { appearance } from './PlayCircleOutline-appearance.stories';
import { size } from './PlayCircleOutline-size.stories';
import { theme } from './PlayCircleOutline-theme.stories';

export const PlayCircleOutline = (args: IconsPlayCircleOutlineProps) => (
  <Icon {...args}></Icon>
);

PlayCircleOutline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlayCircleOutline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
