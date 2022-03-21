import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPlayForWorkProps } from '../PlayForWork.types';

import { display } from './PlayForWork-display.stories';
import { appearance } from './PlayForWork-appearance.stories';
import { size } from './PlayForWork-size.stories';
import { theme } from './PlayForWork-theme.stories';

export const PlayForWork = (args: IconsPlayForWorkProps) => (
  <Icon {...args}></Icon>
);

PlayForWork.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PlayForWork.argTypes = {
  display,
  appearance,
  size,
  theme,
};
