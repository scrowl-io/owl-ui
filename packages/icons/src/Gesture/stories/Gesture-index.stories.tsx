import * as React from 'react';
import { component as Icon } from '../index';
import { IconsGestureProps } from '../Gesture.types';

import { display } from './Gesture-display.stories';
import { appearance } from './Gesture-appearance.stories';
import { size } from './Gesture-size.stories';
import { theme } from './Gesture-theme.stories';

export const Gesture = (args: IconsGestureProps) => (
  <Icon {...args}></Icon>
);

Gesture.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Gesture.argTypes = {
  display,
  appearance,
  size,
  theme,
};
