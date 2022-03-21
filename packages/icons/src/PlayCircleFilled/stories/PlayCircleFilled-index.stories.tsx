import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlayCircleFilledProps } from '../PlayCircleFilled.types';

import { display } from './PlayCircleFilled-display.stories';
import { appearance } from './PlayCircleFilled-appearance.stories';
import { size } from './PlayCircleFilled-size.stories';
import { theme } from './PlayCircleFilled-theme.stories';

export const PlayCircleFilled = (args: IconsPlayCircleFilledProps) => (
  <Icon {...args}></Icon>
);

PlayCircleFilled.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlayCircleFilled.argTypes = {
  display,
  appearance,
  size,
  theme,
};
