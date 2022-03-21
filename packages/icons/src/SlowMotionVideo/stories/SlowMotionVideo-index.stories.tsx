import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSlowMotionVideoProps } from '../SlowMotionVideo.types';

import { display } from './SlowMotionVideo-display.stories';
import { appearance } from './SlowMotionVideo-appearance.stories';
import { size } from './SlowMotionVideo-size.stories';
import { theme } from './SlowMotionVideo-theme.stories';

export const SlowMotionVideo = (args: IconsSlowMotionVideoProps) => (
  <Icon {...args}></Icon>
);

SlowMotionVideo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SlowMotionVideo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
