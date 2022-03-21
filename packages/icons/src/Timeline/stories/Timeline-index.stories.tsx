import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTimelineProps } from '../Timeline.types';

import { display } from './Timeline-display.stories';
import { appearance } from './Timeline-appearance.stories';
import { size } from './Timeline-size.stories';
import { theme } from './Timeline-theme.stories';

export const Timeline = (args: IconsTimelineProps) => (
  <Icon {...args}></Icon>
);

Timeline.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Timeline.argTypes = {
  display,
  appearance,
  size,
  theme,
};
